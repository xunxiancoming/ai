<?php

namespace App\Http\Controllers;

use App\Article;
use App\User;
use Illuminate\Support\Facades\Request;
use function PHPSTORM_META\elementType;

class Index extends Controller
{
    /**
     * Homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        $articles = Article::paginate(15);
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return view('home', ['articles' => $articles]);
    }

    /**
     * News page.
     *
     * @return \Illuminate\Http\Response
     */
    public function news()
    {
        $articles = Article::where(['category_id' => 1])->get();
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return view('news', ['articles' => $articles]);
    }

    /**
     * Column page.
     *
     * @return \Illuminate\Http\Response
     */
    public function column()
    {
        $articles = Article::where(['category_id' => 2])->get();
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return view('column', ['articles' => $articles]);
    }

    /**
     * Question page.
     *
     * @return \Illuminate\Http\Response
     */
    public function question()
    {
        $articles = Article::where(['category_id' => 3])->get();
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return view('question', ['articles' => $articles]);
    }

    /**
     * Resource page.
     *
     * @return \Illuminate\Http\Response
     */
    public function resource()
    {
        $articles = Article::where(['category_id' => 4])->get();
        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }
        return view('resource', ['articles' => $articles]);
    }

    /**
     * Article detail page.
     *
     * @return \Illuminate\Http\Response
     */
    public function detail()
    {
        $article_id = Request::get('article_id');
        $detail = Article::where(['id' => $article_id])->first();
        Article::where(['id' => $article_id])->increment('clicks', 1);
        return view('detail', ['detail' => $detail]);
    }

    /**
     * Write article page.
     *
     * @return \Illuminate\Http\Response
     */
    public function write()
    {
        return view('write');
    }

    /**
     * Show the application dashboard.
     *
     * @param $name
     * @return \Illuminate\Http\Response
     */
    public function user($name)
    {
//        if (\Auth::check() && $name == \Auth::user()->name) {} // todo check if is self...
        $user = User::where(['name' => $name])->first();
        $articles = Article::where(['user_id' => $user->id])->get();

        foreach ($articles as $article) {
            $user = $article->find($article->id)->user;
            $article->user_name = $user->name;
            $article->user_avatar = $user->avatar;
        }

        return view('user', ['articles' => $articles, 'user' => $user]);
    }
}
