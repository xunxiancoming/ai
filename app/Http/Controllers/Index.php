<?php

namespace App\Http\Controllers;

use App\Article;
use App\Http\Requests\ArticlePublishPost;

class Index extends Controller
{
    /**
     * Homepage.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        return view('home');
    }

    /**
     * News page.
     *
     * @return \Illuminate\Http\Response
     */
    public function news()
    {
        return view('news');
    }

    /**
     * Column page.
     *
     * @return \Illuminate\Http\Response
     */
    public function column()
    {
        return view('column');
    }

    /**
     * Question page.
     *
     * @return \Illuminate\Http\Response
     */
    public function question()
    {
        return view('question');
    }

    /**
     * Article detail page.
     *
     * @return \Illuminate\Http\Response
     */
    public function detail()
    {
        return view('detail');
    }

    /**
     * Resource page.
     *
     * @return \Illuminate\Http\Response
     */
    public function resource()
    {
        return view('resource');
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
        return view('user', ['name' => $name]);
    }
}
