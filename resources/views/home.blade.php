@extends('layouts.app')
@section('title', '首页')

@php
    $orderby = ['最新', '最热'];
@endphp

@section('content')
    <div class="ctn1170 row pbt16">
        <div class="ctn-main">
            <div class="ctn ctn-home-top bg-white mt16">
                <img src="http://seopic.699pic.com/photo/50034/5000.jpg_wh1200.jpg" class="home-top-img">
            </div>

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