{{--List 3--}}
<div class="ctn-list_3">
    @foreach($articles as $k => $item)
        @includeIf('item.list_3')
    @endforeach
</div>