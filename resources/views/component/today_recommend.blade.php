<div class="recommend-today">
    <div>
        今日推荐
    </div>

    <ul>
        @foreach(app('util')->getTodayRecommend() as $article)
            <li>
                <a href="{{ route('detail', ['article_id' => $article->id]) }}">
                    {{ $article->title }}
                </a>
            </li>
        @endforeach
    </ul>
</div>