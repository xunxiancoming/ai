@extends('layouts.app')
@section('title', '首页')

@php
    $orderby = ['最新', '最热'];
    $carousels = app('util')->getCarousel();
    $articles = app('util')->getArticles();
@endphp

@section('content')
    <div class="ctn1170 row pbt16">
        <div class="ctn-main">
            <div class="ctn-carousel">
                @foreach($carousels as $i => $carousel)
                    <a class="carousel-item" href="{{ route('detail', ['article_id' => $carousel->id]) }}"
                       @if($i) hidden @endif>
                        <img src="{{ $carousel->img }}" class="home-top-img">
                        <span>{{ $carousel->title }}</span>
                    </a>
                @endforeach
            </div>

            <script>
                let carousels = document.getElementsByClassName('carousel-item')
                let current = 0
                console.log(carousels)
                setInterval(() => {
                    carousels[current].hidden = true
                    if ((current += 1) === carousels.length) current = 0
                    carousels[current].hidden = false
                }, 4000)
            </script>

            <div class="row category mtb16 pbt8 plr16">
                @foreach($orderby as $k => $v)
                    <span>
                        <a href="{{ route(Route::currentRouteName(), ['orderby' => $k]) }}"
                           @if($k == Request::get('orderby')) class="action" @endif>{{ $v }}</a>
                    </span>
                @endforeach
            </div>

            @component('component.list_1', ['articles' => $articles]) @endcomponent
        </div>

        <div class="ctn-side">
            @component('component.ad') @endcomponent
            @component('component.today_recommend') @endcomponent
            @component('component.ad') @endcomponent
            @component('component.today_recommend') @endcomponent
        </div>
    </div>
@endsection