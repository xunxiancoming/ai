<?php

namespace App\Http\Controllers;

use App\Article;

class Index extends Controller
{
    /**
     * Homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        $articles = Article::get();
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
        return view('resource', ['articles' => $articles]);
    }

    /**
     * Article detail page.
     *
     * @return \Illuminate\Http\Response
     */
    public function detail()
    {
        $detail = Article::where(['id' => \Request::get('article_id')])->first();
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
        if ($name == \Auth::user()->name)
            $articles = Article::where(['user_id' => \Auth::id()])->get();
        return view('user', ['articles' => $articles]);
    }
}
