<?php

namespace App\Http\Controllers\API;

use App\Article;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticlePublishPost;
use App\User;

class API extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @param ArticlePublishPost $request
     * @return void
     */
    public function publishArticle(ArticlePublishPost $request)
    {
        $user = User::where(['api_token' => $request->api_token])->first();
        $article = new Article();
        $article->user_id = $user->id;
        $article->category_id = random_int(1, 4);
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
