<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Support\Facades\DB;
use Qiniu\Auth;
use stdClass;

class Util extends Controller
{
    /**
     * getArticles.
     *
     * @param int $category_id
     * @param int $limit
     * @param null $user_id
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function getArticles($category_id = 0, $limit = 15, $user_id = null)
    {
        $conditions = $category_id ? ['category_id' => $category_id] : [];
        if ($user_id) $conditions['user_id'] = $user_id;
        $articles = DB::table('article')->where($conditions)
            ->leftJoin('user', 'article.user_id', '=', 'user.id')
            ->select(['article.*', 'user.name as user_name', 'user.avatar as user_avatar'])
            ->paginate($limit);
        return $articles;
    }

    /**
     * getArticle.
     *
     * @return \Illuminate\Http\Response
     */
    public function getArticle()
    {
        $articles = Article::paginate(5);
        return $articles;
    }

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