@php
    $nav_items = [
        route('home') => '首页',
        route('news') => '资讯',
        route('column') => '专栏',
        route('question') => '问答',
        route('resource') => '资源',
    ];
@endphp
<nav class="ctn ctn-nav">
    <div class="ctn1170 row">
        <!-- Left Side Of Navbar -->
        <ul class="nav row">

            <a href="{{ route('home') }}">
                <img src="{{ asset('images/nav_logo.png') }}" class="nav-logo">
            </a>

            @foreach($nav_items as $k => $v)
                <li>
                    <a href="{{ $k }}"
                       @if($k == URL::current()) class="action" @endif>{{ $v }}</a>
                </li>
            @endforeach
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="nav nav-right">

            <li>
                <a href="{{ route('article.write') }}" title="@lang('common.write')">
                    <i class="fa fa-pencil-square-o"></i>
                </a>
                <a href="{{ route('article.write') }}" title="@lang('common.ask')">
                    <i class="fa fa-question-circle-o"></i>
                </a>
            </li>

            <!-- Authentication Links -->
            @guest
                <li><a href="{{ route('login') }}">登录</a></li>
                <li><a href="{{ route('register') }}">注册</a></li>
            @else
                <li class="dropdown">
                    <a href="{{ route('user', ['name' => Auth::user()->name]) }}" class="row">
                        <img src="{{ Auth::user()->avatar }}"
                             style="width: 32px;height: 32px;border-radius: 16px">
                    </a>
                </li>

                <li>
                    <a href="{{ route('logout') }}"
                       onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                        退出
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                          style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
            @endguest
        </ul>
        {{--</div>--}}
    </div>
</nav>