<?php
Route::get('', 'Index@index')->name('home');
Route::get('news', 'Index@index')->name('news');
Route::get('column', 'Index@index')->name('column');
Route::get('question', 'Index@index')->name('question');
Route::get('resource', 'Index@index')->name('resource');

Route::get('detail', 'Index@detail')->name('detail');

Route::get('question/{id}', 'Index@questionDetail')->name('question.detail');
Route::get('user/{name}', 'Index@user')->name('user');

Route::middleware(['auth'])->group(function () {
    Route::get('article/write', 'Index@write')->name('article.write');
});

Auth::routes();
