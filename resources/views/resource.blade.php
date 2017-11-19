@extends('layouts.app')
@section('title', '资源')

@php
    $category = ['全部', '工具', '书籍', '文档', 'CDN'];
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

            @component('component.list_2', ['articles' => $articles]) @endcomponent
        </div>

        <div class="ctn-side">
            @component('component.ad') @endcomponent
            @component('component.today_recommend') @endcomponent
            @component('component.ad') @endcomponent
            @component('component.today_recommend') @endcomponent
        </div>
    </div>
@endsection