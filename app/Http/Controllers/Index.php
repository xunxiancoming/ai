<?php

namespace App\Http\Controllers;

use App\Article;
use App\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Route;

class Index extends Controller
{
    /**
     * Home, News, Column, Question, Resource
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view(Route::currentRouteName());
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
        if ($detail->category_id == 3) return redirect()->route('question.detail', ['id' => $detail->id]);
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

    /**
     * Show the question detail.
     *
     * @param $id
     * @return \Illuminate\Http\Response
     */
    public function questionDetail($id)
    {
        $detail = Article::where(['category_id' => 3, 'id' => $id])->first();
        if (!$detail) return redirect()->route('question');
        Article::where(['id' => $id])->increment('clicks', 1);
        return view('detail_question', ['detail' => $detail]);
    }
}
