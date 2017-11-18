@extends('layouts.app')

@section('content')
    <div class="ctn1170">
        <div class="ctn-register">
            <div class="pbt8">@lang('login.register.welcome')</div>

            <hr>

            <div class="ctn-center register">
                <form class="form-horizontal" method="POST" action="{{ route('register') }}">
                    {{ csrf_field() }}

                    <div class="row form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                        <input id="name" type="text" class="form-control" name="name" value="{{ old('name') }}"
                               placeholder="@lang('login.name')"
                               required autofocus>

                        @if ($errors->has('name'))
                            <span class="help-block">
                                <strong>{{ $errors->first('name') }}</strong>
                            </span>
                        @endif
                    </div>

                    <div class="row form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                        <input id="email" type="email" class="form-control" name="email"
                               placeholder="@lang('login.email')"
                               value="{{ old('email') }}"
                               required>

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
                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                               placeholder="@lang('login.password_confirm')" required>
                    </div>

                    <div class="row center">
                        <button type="submit" class="btn-register">
                            @lang('login.register')
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
