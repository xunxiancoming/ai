<?php

Route::get('/', function () {
    return view('welcome');
})->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
