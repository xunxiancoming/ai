@php
    $ad = app('util')->getAd()
@endphp
<div class="ad-activity">
    <a href="{{ $ad->url_to }}" target="_blank">
        <img src="{{ $ad->img }}">
    </a>
</div>