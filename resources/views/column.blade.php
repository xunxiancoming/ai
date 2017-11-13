@extends('layouts.app')

@section('title', '专栏 - IntelliTour')

@section('content')
    <div class="ctn1170 row">

        <div class="ctn-main">
            {{--<div class="ctn ctn-home-top">--}}
                {{--<img src="http://image.tupian114.com/20130504/09332546.jpg" style="width:100%;height:400px;">--}}
            {{--</div>--}}

            <div class="home-title">>> 最新动态</div>

            <div class="ctn">
                @foreach(['', '', '', '', '', '', '', '', '', '', '', ''] as $k => $v)
                    @includeIf('component.list_item')
                @endforeach
            </div>
        </div>

        <div class="ctn-side">
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
@endsection