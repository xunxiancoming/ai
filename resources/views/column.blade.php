@extends('layouts.app')
@section('title', '专栏')

@php
    $category = ['全部', '深度学习', '机器学习', '自然语言处理', '计算机视觉', '机器人'];
    $orderby = ['全部', '最新', '最热'];
@endphp

@section('content')
    <div class="ctn1170 row pbt16">

        <div class="ctn-main">
            <div class="row category pbt8 plr16 mt16">
                @foreach($category as $k => $v)
                    <span>
                        <a href="{{ route(Route::currentRouteName(), ['cate_id' => $k]) }}"
                           @if($k == Request::get('cate_id')) class="action" @endif>{{ $v }}</a>
                    </span>
                @endforeach
            </div>

            <div class="row category pbt8 plr16">
                @foreach($orderby as $k => $v)
                    <span>
                        <a href="{{ route('column', ['cate_id' => Request::get('cate_id'), 'orderby' => $k]) }}"
                           @if($k == Request::get('orderby')) class="action" @endif>{{ $v }}</a>
                    </span>
                @endforeach
            </div>

            @component('component.list_1', ['articles' => $articles]) @endcomponent
        </div>

        <div class="ctn-side">
            @component('component.ad') @endcomponent
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