<?php

namespace App\Http\Controllers\API;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticlePublishPost;

class API extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('guest');
    }

    /**
     * Show the application dashboard.
     *
     * @param ArticlePublishPost $request
     * @return void
     */
    public function publishArticle(ArticlePublishPost $request)
    {
        $article = new Article();
        $article->user_id = \Auth::id();
        $article->title = $request->title;
        $article->content = $request->content;
        $article->save();
    }

    /**
     * Upload pictures...
     *
     * @return array
     */
    public function upload()
    {
        return ['errno' => 0];
    }
}
