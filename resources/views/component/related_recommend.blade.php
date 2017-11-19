{{--Related Recommendation--}}
<div class="ctn-rel-rec">
    <div class="header">
        —— 相关推荐 ——
    </div>

    <div class="body">
        @foreach(app('util')->getRelatedRecommend() as $k => $item)
            @includeIf('item.related_recommend')
        @endforeach
    </div>
</div>