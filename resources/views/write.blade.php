@extends('layouts.app')
@section('title', '文章发布')

@section('content')
    <div class="ctn-write">
        {{--Picture--}}
        <div class="ctn-write-img" id="before">
            <i class="fa fa-camera"></i>
            <span>@lang('common.write.pic')</span>
            <input type="file" id="write-img" name="upload_file" accept=".jpeg, .jpg, .png">
        </div>
        <div class="ctn-write-img" id="after" hidden>
            <img id="write-top-img" src=""/>
            <i class="fa fa-trash-o write-delete-img" id="delete" title="@lang('common.delete')"></i>
        </div>

        <script>
            let upload_file = document.getElementById('write-img')
            let img = document.getElementById('write-top-img')

            let before = document.getElementById('before')
            let after = document.getElementById('after')

            upload_file.addEventListener('change', () => {
                let form = new FormData
                form.append('token', '{{ app('util')->getUploadToken() }}')
                form.append('file', upload_file.files[0])

                window.axios.post('http://up-z2.qiniu.com', form).then(res => {
                    if (res.status === 200) {
                        img.src = 'http://ozoz93ox4.bkt.clouddn.com/' + res.data.key

                        upload_file.value = null
                        before.hidden = true
                        after.hidden = false
                    }
                })
            }, false)

            document.getElementById('delete').addEventListener('click', () => {
                img.src = ''
                before.hidden = false
                after.hidden = true
            }, false)
        </script>

        {{--Title--}}
        <textarea id="title" class="write-title" title="@lang('common.title')"
                  placeholder="@lang('common.write.title')" rows="1"></textarea>

        <hr>

        {{--Editor--}}
        <div id="menu" class="write-toolbar"></div>
        <div id="text" class="write-text"></div>

        <hr>

        <textarea id="title" class="write-tags" title="@lang('common.tag')"
                  placeholder="@lang('common.write.tags')" rows="1"></textarea>

        <div class="center p16">
            <button id="publish">@lang('common.publish')</button>
        </div>

        <script src="{{ asset('js/plupload/moxie.js') }}"></script>
        <script src="{{ asset('js/plupload/plupload.dev.js') }}"></script>
        <script src="{{ asset('js/qiniu.min.js') }}"></script>
        <script src="{{ asset('js/wangEditor.min.js') }}"></script>
        <script>
            document.getElementById('title').value = '' // init title
            let E = window.wangEditor
            let editor = new E('#menu', '#text')
            editor.customConfig.menus = [
                'head',  // 标题
                'bold',  // 粗体
                'italic',  // 斜体
                'link',  // 插入链接
                'list',  // 列表
                'justify',  // 对齐方式
                'quote',  // 引用
                'image',  // 插入图片
                'code',  // 插入代码
                'undo',  // 撤销
                'redo'  // 重复
            ]
            editor.customConfig.uploadImgServer = 'http://up-z2.qiniu.com'  // 上传图片到服务器
            editor.customConfig.debug = true
            editor.customConfig.qiniu = true
            editor.create()

            uploadInit()

            function uploadInit() {
                let btnId = editor.imgMenuId
                let containerId = editor.toolbarElemId
                let textElemId = editor.textElemId

                let uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',    //上传模式,依次退化
                    browse_button: btnId,       //上传选择的点选按钮，**必需**
                    container: containerId,           //上传区域DOM ID，默认是browser_button的父元素，
                    drop_element: textElemId,        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传

                    uptoken: '{{ app('util')->getUploadToken() }}', // uptoken_url: '/uptoken',
                    unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
                    domain: 'http://ozoz93ox4.bkt.clouddn.com/', //bucket 域名，下载资源时用到，**必需**
                    max_file_size: '4mb',
                    flash_swf_url: '{{ asset('js/plupload/Moxie.swf') }}',  //引入flash,相对路径
                    filters: {
                        mime_types: [
                            {title: '图片文件', extensions: 'jpg,gif,png,bmp'} //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                        ]
                    },
                    max_retries: 3,                   //上传失败最大重试次数
                    dragdrop: true,                   //开启可拖曳上传
                    chunk_size: '4mb',                //分块上传时，每片的体积
                    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    init: {
                        'FilesAdded': (up, files) => {
                            plupload.each(files, function (file) {
                                printLog('on FilesAdded')
                            })
                        },
                        'BeforeUpload': (up, file) => {
                            printLog('on BeforeUpload')
                        },
                        'UploadProgress': (up, file) => {
                            printLog('进度 ' + file.percent)
                        },
                        'FileUploaded': (up, file, info) => {
                            let domain = up.getOption('domain')
                            let res = JSON.parse(info.response)
                            let sourceLink = domain + res.key //获取上传成功后的文件的Url

                            printLog(info)
                            printLog(sourceLink)
                            editor.cmd.do('insertHtml', '<img src="' + sourceLink + '" style="width:100%;"/>')
                        },
                        'Error': (up, err, errTip) => {
                            printLog('on Error')
                        },
                        'UploadComplete': () => {
                            printLog('on UploadComplete')
                        }
                    }
                })
            }

            function printLog(title, info) {
                window.console && console.log(title, info)
            }

            // Submit
            document.getElementById('publish').addEventListener('click', () => {
                // 读取 html
                let text = editor.txt.text()
                let html = editor.txt.html()
                let title = document.getElementById('title').value

                // if (!title.trim()) alert('NoTitle')
                // if (!text.trim()) alert('NoText')

                window.axios.post('{{ route('api.publishArticle') }}', {
                    title: title,
                    content: html,
                    api_token: '{{ Auth::user()->api_token }}'
                }).then(data => {
                    console.log(data)
                })
            }, false)
        </script>
    </div>
@endsection