<?php

namespace App\Http\Controllers\API;

use App\Article;
use App\Comment;
use App\Http\Controllers\Controller;
use App\Http\Requests\ArticlePublishPost;
use App\Http\Requests\CommentPost;
use App\Http\Requests\UploadPost;
use App\User;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\Storage;

class API extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @param ArticlePublishPost $request
     * @return void
     */
    public function publishArticle(ArticlePublishPost $request)
    {
        $user = User::where(['api_token' => $request->api_token])->first();
        $article = new Article();
        $article->user_id = $user->id;
        $article->category_id = random_int(1, 4);
        $article->title = $request->title;
        $article->img = $request->img;
        $article->content = $request->content;
        $article->save();
//        return;
    }

    /**
     * Comment.
     *
     * @param CommentPost $request
     * @return array
     */
    public function comment(CommentPost $request)
    {
        $user = User::where(['api_token' => $request->api_token])->first();
        $comment = new Comment();
        $comment->user_id = $user->id;
        $comment->article_id = $request->article_id;
        $comment->content = $request->content;
        return ['errno' => 0, 'data' => $request->all()];
    }

    /**
     * Upload pictures.
     *
     * @param UploadPost $request
     * @return array
     */
    public function upload(UploadPost $request)
    {
        $file = Request::file('upload_file');
        if ($file->isValid()) {
            $ext = $file->getClientOriginalExtension();
            $realPath = $file->getRealPath();
//            $type = $file->getClientMimeType();     // image/jpeg

            $filename = date('Ymd') . '/' . uniqid() . '.' . $ext;
            $bool = Storage::disk('public')->put($filename, file_get_contents($realPath));

            if ($bool) return ['errno' => 0, 'data' => [Storage::url($filename)]];
        }
        return ['errno' => 0, 'data' => $request->all()];
    }
}
