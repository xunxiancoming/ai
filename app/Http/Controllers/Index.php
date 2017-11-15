<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Request;

class Index extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function home()
    {
        return view('home');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function news()
    {
        return view('news');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function column()
    {
        return view('column');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function question()
    {
        return view('question');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function detail()
    {
        return view('detail');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function resource()
    {
        return view('resource');
    }

    /**
     * Show the application dashboard.
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
