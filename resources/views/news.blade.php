@extends('layouts.app')
@section('title', '资讯')

@php
    $orderby = ['全部', '最新', '最热'];
@endphp

@section('content')
    <div class="ctn1170 row pbt16">

        <div class="ctn-main">
            <div class="row category pbt8 plr16 mt16">
                @foreach($orderby as $k => $v)
                    <span>
                        <a href="{{ route(Route::currentRouteName(), ['cate_id' => Request::get('cate_id'), 'orderby' => $k]) }}"
                           @if($k == Request::get('orderby')) class="action" @endif>{{ $v }}</a>
                    </span>
                @endforeach
            </div>

            <div class="ctn bg-white mtb16 ptb16">
                @foreach($articles as $k => $v)
                    @includeIf('item.list_item', ['item' => $v])
                @endforeach
            </div>
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