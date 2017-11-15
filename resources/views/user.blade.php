@extends('layouts.app')
@section('title', $name . ' - IntelliTour')

@php
    $category = ['动态', '文章', '专栏', '提问', '回答', '上传资源'];
@endphp

@section('content')

    <div class="ctn1170 pbt16">

        <div class="ctn ctn-home-top">
            <img src="http://image.tupian114.com/20130504/09332546.jpg"
                 style="width:100%;height:400px;border-radius:10px">
        </div>

        <div class="row">
            <div class="ctn-main bg-white">

                <div class="row category pbt8 plr16 mt16">
                    @foreach($category as $k => $v)
                        <span>
                        <a href="{{ route('column', ['cate_id' => $k]) }}"
                           @if($k == Request::get('cate_id')) class="action" @endif>{{ $v }}</a>
                    </span>
                    @endforeach
                </div>

                <div class="ctn mtb16">
                    @foreach(['', '', '', '', '', '', '', ''] as $k => $v)
                        @includeIf('component.list_item')
                    @endforeach
                </div>
            </div>

            <div class="ctn-side">
                <div class="p16 bg-white">
                    <span>个人成就</span>
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
                <div class="mtb16 p16 bg-white row">
                    <div class="ctn center">
                        <div>关注者</div>
                        <div>15</div>
                    </div>

                    <hr>

                    <div class="ctn center">
                        <div>关注了</div>
                        <div>51</div>
                    </div>
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