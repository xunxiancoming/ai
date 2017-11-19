<nav class="ctn footer">
    <div class="ctn1170 row relative">
        <ul class="ft-ls">
            <li>产品</li>
            <li><a href="{{ route('home') }}">资讯</a></li>
            <li><a href="{{ route('home') }}">专栏</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
        </ul>
        <ul class="ft-ls">
            <li>服务</li>
            <li><a href="{{ route('home') }}">资讯</a></li>
            <li><a href="{{ route('home') }}">专栏</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
        </ul>
        <ul class="ft-ls">
            <li>首页</li>
            <li><a href="{{ route('home') }}">资讯</a></li>
            <li><a href="{{ route('home') }}">专栏</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
        </ul>
        <ul class="ft-ls">
            <li>关于</li>
            <li><a href="{{ route('home') }}">资讯</a></li>
            <li><a href="{{ route('home') }}">专栏</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
            <li><a href="{{ route('home') }}">问答</a></li>
        </ul>
        <ul class="ft-ls right-mg">
            <li>
                <img src="data:image/png;base64,{!! base64_encode(QrCode::format('png')
                ->merge('/public/images/logo.jpg', .2)->margin(0)
                ->size(140)->generate(URL::full())) !!}">
            </li>
        </ul>

    </div>

    <hr class="ctn1170 ">

    <div class="ctn1170 copyright">
        &copy; 东莞XX科技有限公司 IntelliTour.com 版权所有
    </div>
</nav>