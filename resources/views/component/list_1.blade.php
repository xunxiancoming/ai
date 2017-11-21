{{--List 1--}}
<div class="ctn-list_1">
    @foreach($articles as $k => $v)
        @includeIf('item.list_1', ['item' => $v])
    @endforeach
</div>