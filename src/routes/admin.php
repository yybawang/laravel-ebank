<?php

use \Illuminate\Support\Facades\Route;

Route::get('/'.config('ebank.path'), 'ddController@test');
