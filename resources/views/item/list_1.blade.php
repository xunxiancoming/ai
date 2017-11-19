<div class="item">
    <div class="left">
        <a href="{{ route('detail', ['article_id' => $item->id]) }}">
            <img src="{{ asset('images/logo.jpg') }}">
        </a>
    </div>
    <div class="right">
        <div class="title">{{ $item->title }}</div>
        <p class="content">素材中国_免费素材共享平台.图片素材图库提供海量素材,图片下载,设计素材,PSD源文件,矢量图,AI,CDR,EPS等高清图片下载</p>
        <div class="foot">
            <a href="{{ route('user', ['name' => $item->user_name]) }}"
               class="gray">{{ $item->user_name }}</a>

            <span class="ml16">
                标签：
                <a href="#" class="gray">机器学习</a>
                <a href="#" class="gray">深度学习</a>
            </span>

            <span class="right">
                <span href="#" class="gray"><i class="fa fa-eye"></i> {{ $item->clicks }}  </span>
                <span href="#" class="gray"><i class="fa fa-thumbs-o-up"></i>55</span>
            </span>
        </div>
    </div>
</div>
<hr class="plr16">
