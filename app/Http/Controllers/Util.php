<?php

namespace App\Http\Controllers;

use App\Article;
use Qiniu\Auth;
use stdClass;

class Util extends Controller
{
    /**
     * getTodayRecommend.
     *
     * @return \Illuminate\Http\Response
     */
    public function getTodayRecommend()
    {
        $articles = Article::paginate(5);
        return $articles;
    }

    /**
     * getRelatedRecommend.
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
     * getAd.
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

    /**
     * getUploadToken.
     *
     * @return string
     */
    public function getUploadToken()
    {
        $bucket = 'ziiai';
        $accessKey = 'DgbPqgGPftFvoIZeOzSpfUwq6gRSLEJMuGTMypqD';
        $secretKey = '0nBUDa76_57smz9ZYAY-8anV3WcGknHMsINSCVr6';
        $auth = new Auth($accessKey, $secretKey);
        $upToken = $auth->uploadToken($bucket);
        return $upToken;
    }

}