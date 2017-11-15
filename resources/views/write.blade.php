@extends('layouts.app')

@section('title', '详情 - IntelliTour')

@section('content')
    <div class="ctn bg-gray ptb16">
        <div class="ctn1170 row">

            <div class="ctn-main">

                <div class="bg-white mb16">

                    <div class="p16">

                        <h2 class="plr16 detail-title">中国“神威”获超算排行榜四连冠，却遭外媒质疑</h2>

                        <div class="relative gray plr16">
                            <button>原创</button>
                            <span> 2017年11月14日 00:00:00 </span>

                            <span class="right">
                            <i class="fa fa-eye"></i> 123
                        </span>
                        </div>

                    </div>

                    <hr class="bg-gray">

                    <div class="plr32 pbt16">
                        <div id="editor"></div>

                        <script type="text/javascript" src="{{ asset('js/wangEditor.min.js') }}"></script>
                        <script type="text/javascript">
                            let E = window.wangEditor
                            let editor = new E('#editor')
                            editor.customConfig.debug = true
                            editor.create()
                            // 禁用编辑功能
                            // editor.$textElem.attr('contenteditable', false)
                        </script>
                    </div>
                </div>

                {{--Comment--}}
                {{--<div class="bg-white mb16">--}}

                    {{--<div class="p16">--}}

                        {{--<div class="relative gray plr16">--}}
                            {{--<span>评论（12）</span>--}}

                            {{--<span class="right">--}}
                                {{--@auth--}}
                                {{--@else--}}
                                    {{--您还未<a href="{{ route('login') }}">登录</a>，登录后可进行评论！--}}
                                {{--@endauth--}}
                            {{--</span>--}}

                        {{--</div>--}}

                    {{--</div>--}}

                    {{--Comment Bar--}}
                    {{--<div class="plr32">--}}
                    {{--</div>--}}


                    {{--<div class="pbt16 plr32">--}}

                        {{--@foreach(['','','','',''] as $k => $v)--}}
                            {{--@includeIf('component.comment_item')--}}
                        {{--@endforeach--}}

                    {{--</div>--}}
                {{--</div>--}}

                {{--Recommendation--}}
                {{--<div class="bg-white mb16">--}}

                    {{--<div class="p16">--}}

                        {{--<div class="relative gray center">--}}
                            {{--—— 相关推荐 ——--}}
                        {{--</div>--}}

                    {{--</div>--}}

                    {{--<div class="p16">--}}

                        {{--@foreach(['','','','',''] as $k => $v)--}}
                            {{--@includeIf('component.list_item')--}}
                        {{--@endforeach--}}

                    {{--</div>--}}
                {{--</div>--}}

            </div>

            {{--<div class="ctn-side">--}}
                {{--<div class=" bg-white">--}}
                    {{--<div class="ctn-home-top">--}}
                        {{--<img src="{{ asset('images/logo.jpg') }}" style="width:100%">--}}
                    {{--</div>--}}
                    {{--<div class="ctn">--}}
                        {{--<span>今日推荐</span>--}}
                        {{--<ul>--}}
                            {{--<li>--}}
                                {{--<a>--}}
                                    {{--XXX公司获5000万B轮融资--}}
                                {{--</a>--}}
                            {{--</li>--}}
                            {{--<li>--}}
                                {{--<a>--}}
                                    {{--无人汽车今面世--}}
                                {{--</a>--}}
                            {{--</li>--}}
                            {{--<li>--}}
                                {{--<a>--}}
                                    {{--ASD--}}
                                {{--</a>--}}
                            {{--</li>--}}
                            {{--<li>--}}
                                {{--<a>--}}
                                    {{--ASD--}}
                                {{--</a>--}}
                            {{--</li>--}}
                        {{--</ul>--}}
                    {{--</div>--}}
                    {{--<div class="ctn-home-top">--}}
                        {{--<img src="{{ asset('images/logo.jpg') }}" style="width:100%">--}}
                    {{--</div>--}}
                    {{--<div class="ctn-home-top">--}}
                        {{--<img src="{{ asset('images/logo.jpg') }}" style="width:100%">--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        </div>
    </div>
@endsection