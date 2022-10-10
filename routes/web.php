<?php

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;


Route::get('/{any}', function(){
    return view('layouts.app');
})->where('any', '.*');
Route::get('/', function(){
    return view('layouts.app');
})->where('any', '.*');
