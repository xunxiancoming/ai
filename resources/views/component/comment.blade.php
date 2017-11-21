{{--Comment--}}
<div class="bg-white mb16 p16">

    {{--Comment Bar--}}
    <div class="p8">
        <textarea id="comment-editor" title="" rows="6"></textarea>
    </div>

    {{--Action Bar--}}
    <div class="gray plr8">
        <div class="right-mg">
            @guest
                您还未登录，<a href="{{ route('login') }}">登录</a>后可进行评论！
            @endguest
            <button @guest disabled @endguest>发表评论</button>
        </div>
    </div>
</div>

{{--Comments--}}
<div class="pbt16 plr32 bg-white mb16">
    <div class="gray">
        <span>评论（12）</span>
    </div>
    @foreach(['','','','',''] as $k => $v)
        @includeIf('item.comment_item')
    @endforeach
</div>