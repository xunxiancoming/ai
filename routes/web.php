<?php

Route::get('/', 'Index@home')->name('home');
Route::get('news', 'Index@news')->name('news');
Route::get('column', 'Index@column')->name('column');
Route::get('question', 'Index@question')->name('question');

Route::get('detail', 'Index@detail')->name('detail');

Route::get('user/{name}', 'Index@user')->name('user');

Route::get('article/write', 'Index@write')->name('article.write');

Auth::routes();
