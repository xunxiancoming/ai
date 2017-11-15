@php
    $nav_items = [route('home')];
@endphp
<nav class="ctn ctn-nav">
    <div class="ctn1170 row">
        <!-- Left Side Of Navbar -->
        <ul class="nav">
            <li>
                <a href="{{ route('home') }}">
                </a>
            </li>
            <li><a href="{{ route('home') }}">首页</a></li>
            <li><a href="{{ route('news') }}">资讯</a></li>
            <li><a href="{{ route('column') }}">专栏</a></li>
            <li><a href="{{ route('question') }}">问答</a></li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="nav nav-right">
            <!-- Authentication Links -->
            @guest
                <li><a href="{{ route('login') }}">登录</a></li>
                <li><a href="{{ route('register') }}">注册</a></li>
            @else
                <li class="dropdown">
                    <a href="{{ route('user', ['name' => Auth::user()->name]) }}" class="row">
                        <img src="{{ asset('images/logo.jpg') }}"
                             style="width: 32px;height: 32px;border-radius: 16px">
                        <span class="ml8">{{ Auth::user()->name }}</span>
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