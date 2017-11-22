@extends('layouts.app')
@section('title', $detail->title)

@section('content')
    <div class="ctn bg-white">
        <div class="ctn1170 row ptb16">
            <div class="ctn-main">
                <div>
                    <button>AI</button>
                    <button>ML</button>
                </div>
                <div>
                    <h2>{{ $detail->title }}</h2>
                </div>
                <div>
                    <p>素材中国_免费素材共享平台.图片素材图库提供海量素材,图片下载,设计素材,PSD源文件,矢量图,AI,CDR,EPS等高清图片下载</p>
                </div>
                <div>
                    <button>关注问题</button>
                    <button>写回答</button>
                </div>
            </div>
            <div class="ctn-side">
                <div>
                    <button>Watch</button>
                    <button><i class="fa fa-eye"></i> {{ $detail->clicks | 0 }}</button>
                </div>
            </div>
        </div>
    </div>

    <div class="ctn1170 row ptb16">

        {{--Main Container--}}
        <div class="ctn-main">

            @component('component.comment') @endcomponent
            @component('component.related_recommend') @endcomponent

        </div>

        <div class="ctn-side">
            @component('component.user_info') @endcomponent
            @component('component.ad') @endcomponent
            @component('component.today_recommend') @endcomponent
        </div>
    </div>
@endsection