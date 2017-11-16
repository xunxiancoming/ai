@extends('layouts.app')
@section('title', '专栏 - IntelliTour')

@php
    $category = ['全部', '深度学习', '机器学习', '自然语言处理', '计算机视觉', '机器人'];
    $orderby = ['全部', '最新', '最热'];
@endphp

@section('content')
    <div class="ctn1170 row pbt16">

        <div class="ctn-main">
            <div class="bg-white">
                <div class="row category pbt8 plr16 mt16">
                    @foreach($category as $k => $v)
                        <span>
                        <a href="{{ route('column', ['cate_id' => $k]) }}"
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
            </div>

            <div class="ctn bg-white mtb16 ptb16">
                @foreach($articles as $k => $v)
                    @includeIf('component.list_item', ['item' => $v])
                @endforeach
            </div>
        </div>

        <div class="ctn-side">
            <div class="bg-white">
                <div class="ctn-home-top">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
                <div class="ctn">
                    <span>今日推荐</span>
                    <ul>
                        <li>
                            <a>
                                XXX公司获5000万B轮融资
                            </a>
                        </li>
                        <li>
                            <a>
                                无人汽车今面世
                            </a>
                        </li>
                        <li>
                            <a>
                                ASD
                            </a>
                        </li>
                        <li>
                            <a>
                                ASD
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="ctn-home-top">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
                <div class="ctn-home-top">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
            </div>
        </div>
    </div>
@endsection