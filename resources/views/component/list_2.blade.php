{{--List 2--}}
<div class="ctn-list_2">
    @foreach($articles as $k => $item)
        @includeIf('item.list_2')
    @endforeach
</div>