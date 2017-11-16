@extends('layouts.app')

@section('title', $detail->title . ' - IntelliTour')

@section('content')
    <div class="ctn bg-gray ptb16">
        <div class="ctn1170 row">

            <div class="ctn-main">

                <div class="bg-white mb16">

                    <div class="p16">

                        <h2 class="plr16 detail-title">{{ $detail->title }}</h2>

                        <div class="relative gray plr16">
                            <button>原创</button>
                            <span> {{ $detail->created_at }} </span>

                            <span class="right">
                            <i class="fa fa-eye"></i> 123
                        </span>
                        </div>

                    </div>

                    <hr class="bg-gray">

                    <div class="plr32 pbt16">
                        {!! $detail->content !!}
                    </div>
                </div>

                {{--Comment--}}
                <div class="bg-white mb16">

                    <div class="p16">

                        <div class="relative gray plr16">
                            <span>评论（12）</span>

                            <span class="right">
                                @auth
                                @else
                                    您还未<a href="{{ route('login') }}">登录</a>，登录后可进行评论！
                                @endauth
                            </span>

                        </div>

                    </div>

                    {{--Comment Bar--}}
                    <div class="plr32">
                        <textarea id="comment-editor" title="" rows="6"></textarea>
                    </div>


                    <div class="pbt16 plr32">

                        @foreach(['','','','',''] as $k => $v)
                            @includeIf('component.comment_item')
                        @endforeach

                    </div>
                </div>

                {{--Recommendation--}}
                <div class="bg-white mb16">

                    <div class="p16">

                        <div class="relative gray center">
                            —— 相关推荐 ——
                        </div>

                    </div>

                    <div class="p16">

                        {{--@foreach(['','','','',''] as $k => $v)--}}
                            {{--@includeIf('component.list_item')--}}
                        {{--@endforeach--}}

                    </div>
                </div>

            </div>

            <div class="ctn-side">
                <div class=" bg-white">
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
    </div>
@endsection