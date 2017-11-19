@extends('layouts.app')
@section('title', '首页')

@php
    $orderby = ['全部', '最新', '最热'];
@endphp

@section('content')
    <div class="ctn1170 row pbt16">

        <div class="ctn-main">
            <div class="ctn ctn-home-top bg-white mt16">
                <img src="http://image.tupian114.com/20130504/09332546.jpg" class="home-top-img">
            </div>

            <div class="row category mtb16 pbt8 plr16">
                @foreach($orderby as $k => $v)
                    <span>
                        <a href="{{ route(Route::currentRouteName(), ['orderby' => $k]) }}"
                           @if($k == Request::get('orderby')) class="action" @endif>{{ $v }}</a>
                    </span>
                @endforeach
            </div>

            <div class="ctn bg-white mtb16 ptb16">
                @foreach($articles as $k => $v)
                    @includeIf('component.list_item', ['item' => $v])
                @endforeach
            </div>
        </div>

        <div class="ctn-side">
            <div class="mtb16 p16 bg-white">
                <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
            </div>
            @component('component.today_recommend') @endcomponent
            <div class="mtb16 p16 bg-white">
                <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
            </div>
            <div class="mtb16 p16 bg-white">
                <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
            </div>
        </div>
    </div>
@endsection