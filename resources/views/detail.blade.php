@extends('layouts.app')
@section('title', $detail->title)

@section('content')
    <div class="ctn1170 row ptb16">

        {{--Main Container--}}
        <div class="ctn-main">
            <div class="bg-white mb16">
                <div class="p16">
                    <h2 class="plr16 detail-title">{{ $detail->title }}</h2>

                    <div class="relative gray plr16">
                        <button>原创</button>
                        <span> {{ $detail->created_at }} </span>

                        <span class="right">
                            <i class="fa fa-eye"></i> {{ $detail->clicks | 0 }}
                        </span>
                    </div>
                </div>

                <hr>

                <div class="plr32 pbt16">
                    {!! $detail->content !!}
                </div>
            </div>

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