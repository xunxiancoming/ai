@extends('layouts.app')
@section('title', '文章发布')

@section('content')
    <div class="ctn660 ptb16">

        <div class="bg-white ">

            <div class="ctn-write-img" id="before">
                <i class="fa fa-camera"></i>
                <input type="file" id="write-img" name="upload_file" accept=".jpeg, .jpg, .png">
            </div>

            <div class="ctn-write-img" id="after" hidden>
                <img id="write-top-img" src=""/>
                <i class="fa fa-trash-o write-delete-img" id="delete" title="删除"></i>
            </div>

            <script>
                let upload_file = document.getElementById('write-img')

                let before = document.getElementById('before')
                let after = document.getElementById('after')

                upload_file.addEventListener('change', () => {

                    let form = new FormData
                    form.append('upload_file', upload_file.files[0])
                    form.append('api_token', '{{ Auth::user()->api_token }}')

                    window.axios.post('{{ route('api.upload') }}', form).then(res => {
                        if (res.status === 200 && res.data.errno === 0) {
                            let img = document.getElementById('write-top-img')
                            img.src = '{{ url('') }}' + res.data.data[0]

                            upload_file.value = null
                            before.hidden = true
                            after.hidden = false
                        }
                    })
                }, false)

                document.getElementById('delete').addEventListener('click', () => {
                    before.hidden = false
                    after.hidden = true
                }, false)

            </script>

            <textarea
                    id="title"
                    class="p16 write-title"
                    title="标题"
                    placeholder="请输入标题"
                    rows="1"
            ></textarea>

            <div id="menu" class="write-toolbar"></div>

            <div id="text" class="write-text"></div>

            <div class="center p16">
                <button id="publish">发布</button>
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
                editor.customConfig.showLinkImg = false // 隐藏“网络图片”tab
                editor.customConfig.uploadImgServer = '{{ route('api.upload') }}'  // 上传图片到服务器
                editor.customConfig.uploadImgHeaders = {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
                editor.customConfig.uploadImgParams = {
                    api_token: '{{ Auth::user()->api_token }}'
                }
                editor.customConfig.uploadFileName = 'upload_file'
                editor.customConfig.debug = true

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

                editor.create()
            </script>
        </div>

    </div>
@endsection