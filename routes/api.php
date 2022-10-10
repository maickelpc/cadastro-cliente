<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;

Route::apiResource('customers', 'CustomerController');
Route::apiResource('states', 'StateController')->only(['index','show']);
Route::apiResource('cities', 'CityController')->only(['index','show']);