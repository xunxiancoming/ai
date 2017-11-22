<?php

use Illuminate\Http\Request;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('publishArticle', 'API\API@publishArticle')->name('api.publishArticle');

Route::post('comment', 'API\API@comment')->name('api.comment');
Route::post('upload', 'API\API@upload')->name('api.upload');