<div class="sidebar">
    <i class="fa fa-qrcode" id="show-qr"></i>
    <i class="fa fa-arrow-up" id="to-top"></i>

    <a href="{{ route('article.write') }}" class="global-write">
        <i class="fa fa-commenting-o"></i>
    </a>

    <div class="fl-qr" id="fl-qr" hidden>
        <img src="data:image/png;base64,{!! base64_encode(QrCode::format('png')
                ->merge('/public/images/logo.jpg', .2)->margin(0)
                ->size(140)->generate(URL::full())) !!}">
        <div class="arrow"></div>
    </div>
</div>

<script>
    document.getElementById('to-top').addEventListener('click', () => {
        scrollTo(0, 0)
    })

    document.getElementById('show-qr').onmouseover = () => {
        document.getElementById('fl-qr').hidden = false
    }

    document.getElementById('show-qr').onmouseleave = () => {
        document.getElementById('fl-qr').hidden = true
    }
</script>