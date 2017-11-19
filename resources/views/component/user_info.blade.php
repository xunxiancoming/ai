@php
    $ad = app('util')->getAd()
@endphp
<div class="bg-white mb16 p16">
    <img src="{{ asset('images/logo.jpg') }}" class="article-avatar">
    <button class="follow">已关注</button>
    <button class="unfollow">关注</button>
    <hr>
    <div class="row mt8">
        <div class="ctn center">
            <div>关注者</div>
            <div>15</div>
        </div>
        <hr>
        <div class="ctn center">
            <div>关注了</div>
            <div>51</div>
        </div>
    </div>
</div>