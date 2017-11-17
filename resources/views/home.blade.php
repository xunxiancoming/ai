@extends('layouts.app')
@section('title', '首页 - IntelliTour')

@section('content')
    <div class="ctn1170 row pbt16">

        <div class="ctn-main bg-white">
            <div class="ctn ctn-home-top">
                <img src="http://image.tupian114.com/20130504/09332546.jpg"
                     style="width:calc(100% - 16px);height:400px;border-radius: 6px">
            </div>

            <div class="home-title">>> 最新动态</div>

            <div class="ctn">
                @foreach($articles as $k => $v)
                    @includeIf('component.list_item', ['item' => $v])
                @endforeach
            </div>
        </div>

        <div class="ctn-side">
            <div class="bg-white p16">
                <div class=" mb16">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
                <div class="ctn mb16">
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
                <div class=" mb16">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
                <div class="">
                    <img src="{{ asset('images/logo.jpg') }}" style="width:100%">
                </div>
            </div>
        </div>
    </div>
@endsection