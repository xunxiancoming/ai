<?php

namespace App\Http\Controllers;

use App\Article;
use stdClass;

class Util extends Controller
{
    /**
     * Homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTodayRecommend()
    {
        $articles = Article::paginate(5);
        return $articles;
    }

    /**
     * Homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRelatedRecommend()
    {
        $articles = Article::paginate(3);
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return $articles;
    }

    /**
     * Homepage.
     *
     * @return stdClass
     */
    public function getAd()
    {
        $ad = new stdClass();
        $ad->url_to = 'https://www.taobao.com';
        $ad->img = asset('images/activity.jpg');
        return $ad;
    }

}