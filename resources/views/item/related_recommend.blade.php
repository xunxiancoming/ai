<div class="item">
    <a href="{{ route('detail', ['article_id' => $item->id]) }}">
        <img src="{{ $item->img ?: asset('images/logo.jpg') }}" style="width:252px;height:200px">
    </a>
    <div class="title">{{ $item->title }}</div>
    <div class="foot">
        <a href="#" class="gray">{{ $item->user_name }}</a>
        {{--<span>·</span>--}}
        {{--<span>{{ $item->created_at }}</span>--}}
        <span class="right">
            <span href="#" class="gray"><i class="fa fa-eye"></i> 155  </span>
            <span href="#" class="gray"><i class="fa fa-thumbs-o-up"></i>55</span>
        </span>
    </div>
</div>