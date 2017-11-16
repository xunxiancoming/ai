@extends('layouts.app')
@section('title', '详情 - IntelliTour')

@section('content')
    <div class="ctn660 ptb16">

        <div class="bg-white mb16">

            <textarea
                    id="title"
                    class="p16 write-title"
                    title="标题"
                    placeholder="请输入标题"
                    rows="1"
            ></textarea>

            <div id="menu" class="write-toolbar"></div>
            <div style="padding: 8px; color: #ccc"></div>
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
                    // 'image',  // 插入图片 todo
                    'code',  // 插入代码
                    'undo',  // 撤销
                    'redo'  // 重复
                ]
                editor.customConfig.showLinkImg = false // 隐藏“网络图片”tab
                editor.customConfig.uploadImgServer = '{{ route('api.upload') }}'  // 上传图片到服务器
                editor.customConfig.uploadImgHeaders = {
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                }
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