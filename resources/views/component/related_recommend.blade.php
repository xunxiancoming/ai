{{--Recommendation--}}
<div class="bg-white mb16 ctn">
    <div class="p16">
        <div class="gray center">
            —— 相关推荐 ——
        </div>
    </div>

    <div class="p16 row">
        @foreach(app('util')->getRelatedRecommend() as $k => $item)
            @includeIf('item.related_recommend')
        @endforeach
    </div>
</div>