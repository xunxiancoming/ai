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

        <script src="{{ asset('js/wangEditor.min.js') }}"></script>
        <script>
            document.getElementById('title').value = ''
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
            {{--editor.customConfig.showLinkImg = false // 隐藏“网络图片”tab--}}
            {{--editor.customConfig.uploadImgServer = '{{ route('api.upload') }}'  // 上传图片到服务器--}}
            {{--editor.customConfig.uploadImgHeaders = {--}}
                {{--'X-CSRF-TOKEN': '{{ csrf_token() }}'--}}
            {{--}--}}
            {{--editor.customConfig.uploadImgParams = {--}}
                {{--api_token: '{{ Auth::user()->api_token }}'--}}
            {{--}--}}
            {{--editor.customConfig.uploadFileName = 'upload_file'--}}
            editor.customConfig.debug = true
            editor.customConfig.qiniu = true
            editor.create()

            // 初始化七牛上传
            uploadInit()

            // 初始化七牛上传的方法
            function uploadInit() {
                // 获取相关 DOM 节点的 ID
                var btnId = editor.imgMenuId;
                var containerId = editor.toolbarElemId;
                var textElemId = editor.textElemId;

                // 创建上传对象
                var uploader = Qiniu.uploader({
                    runtimes: 'html5,flash,html4',    //上传模式,依次退化
                    browse_button: btnId,       //上传选择的点选按钮，**必需**
                    uptoken_url: '/uptoken',
                    //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                    // uptoken : '<Your upload token>',
                    //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                    // unique_names: true,
                    // 默认 false，key为文件名。若开启该选项，SDK会为每个文件自动生成key（文件名）
                    // save_key: true,
                    // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK在前端将不对key进行任何处理
                    domain: 'http://7xrjl5.com1.z0.glb.clouddn.com/',
                    //bucket 域名，下载资源时用到，**必需**
                    container: containerId,           //上传区域DOM ID，默认是browser_button的父元素，
                    max_file_size: '4mb',             //最大文件体积限制
                    flash_swf_url: '../js/plupload/Moxie.swf',  //引入flash,相对路径
                    filters: {
                        mime_types: [
                            //只允许上传图片文件 （注意，extensions中，逗号后面不要加空格）
                            { title: "图片文件", extensions: "jpg,gif,png,bmp" }
                        ]
                    },
                    max_retries: 3,                   //上传失败最大重试次数
                    dragdrop: true,                   //开启可拖曳上传
                    drop_element: textElemId,        //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                    chunk_size: '4mb',                //分块上传时，每片的体积
                    auto_start: true,                 //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    init: {
                        'FilesAdded': function(up, files) {
                            plupload.each(files, function(file) {
                                // 文件添加进队列后,处理相关的事情
                                printLog('on FilesAdded');
                            });
                        },
                        'BeforeUpload': function(up, file) {
                            // 每个文件上传前,处理相关的事情
                            printLog('on BeforeUpload');
                        },
                        'UploadProgress': function(up, file) {
                            // 显示进度
                            printLog('进度 ' + file.percent)
                        },
                        'FileUploaded': function(up, file, info) {
                            // 每个文件上传成功后,处理相关的事情
                            // 其中 info 是文件上传成功后，服务端返回的json，形式如
                            // {
                            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //    "key": "gogopher.jpg"
                            //  }
                            printLog(info);
                            // 参考http://developer.qiniu.com/docs/v6/api/overview/up/response/simple-response.html

                            var domain = up.getOption('domain');
                            var res = $.parseJSON(info);
                            var sourceLink = domain + res.key; //获取上传成功后的文件的Url

                            printLog(sourceLink);

                            // 插入图片到editor
                            editor.cmd.do('insertHtml', '<img src="' + sourceLink + '" style="max-width:100%;"/>')
                        },
                        'Error': function(up, err, errTip) {
                            //上传出错时,处理相关的事情
                            printLog('on Error');
                        },
                        'UploadComplete': function() {
                            //队列文件处理完毕后,处理相关的事情
                            printLog('on UploadComplete');
                        }
                        // Key 函数如果有需要自行配置，无特殊需要请注释
                        //,
                        // 'Key': function(up, file) {
                        //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                        //     // 该配置必须要在 unique_names: false , save_key: false 时才生效
                        //     var key = "";
                        //     // do something with key here
                        //     return key
                        // }
                    }
                    // domain 为七牛空间（bucket)对应的域名，选择某个空间后，可通过"空间设置->基本设置->域名设置"查看获取
                    // uploader 为一个plupload对象，继承了所有plupload的方法，参考http://plupload.com/docs
                });
            }

            // 封装 console.log 函数
            function printLog(title, info) {
                window.console && console.log(title, info);
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