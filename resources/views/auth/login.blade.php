@extends('layouts.app')
@section('title', '登录')

@section('content')
    <style>.bg-login{background: url("http://ai.dev/images/bg_login.jpg") no-repeat}</style>
    <div class="bg-login">
        <div class="ctn1170 pbt16">
            <div class="ctn-login">
                <div class="pbt8">登录 ZiiAI，让智能连接你我</div>

                <hr>

                <div class="ctn-center login">
                    <form class="" method="POST" action="{{ route('login') }}">
                        {{ csrf_field() }}

                        <div class="row form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <input id="email" type="email" class="form-control" name="email"
                                   placeholder="@lang('login.email')"
                                   value="{{ old('email') }}" required autofocus title="@lang('login.email')">

                            @if ($errors->has('email'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                            @endif
                        </div>

                        <div class="row form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <input id="password" type="password" class="form-control" name="password"
                                   placeholder="@lang('login.password')" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                            @endif
                        </div>

                        <div class="row form-group">
                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember" {{ old('remember') ? 'checked' : '' }}>
                                    @lang('login.remember')
                                </label>
                            </div>
                        </div>

                        <div class="row form-group">
                            <button type="submit" class="btn-login">
                                @lang('login.login')
                            </button>
                        </div>

                        <div class="row form-group">
                            <a class="btn btn-link" href="{{ route('password.request') }}">
                                @lang('login.forget')
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection