<nav class="ctn ctn-nav">
    <div class="ctn1200 row">
        <!-- Left Side Of Navbar -->
        <ul class="nav">
            <li>
                <a href="{{ route('home') }}">
                    <img class="nav-logo" src="{{ 'images/logo.jpg' }}">
                </a>
            </li>
            <li><a href="{{ route('home') }}">首页</a></li>
            <li><a href="{{ route('home') }}">资讯</a></li>
            <li><a href="{{ route('home') }}">专栏</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="nav navbar-nav navbar-right">
            <!-- Authentication Links -->
            @guest
                <li><a href="{{ route('login') }}">Login</a></li>
                <li><a href="{{ route('register') }}">Register</a></li>
            @else
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"
                       aria-haspopup="true">
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                <li>
                    <a href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        Logout
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST"
                          style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </li>
                </li>
            @endguest
        </ul>
        {{--</div>--}}
    </div>
</nav>