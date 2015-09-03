<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

//clients complete calls routing
Route::get('/', 'ClientsController@index'); 
Route::post('/create_new_client', 'ClientsController@create_new_client');
Route::post('/load_client_data', 'ClientsController@load_client_data');
Route::post('/edit_client_data', 'ClientsController@edit_client_data');
Route::post('/load_clients', 'ClientsController@load_clients');

//login
Route::post('/auth/login', 'AuthenticationController@login');

//register new user
Route::post('/registernewuser', 'RegisterController@store');

//forgot password call
Route::post('/forgotpassword', 'UserController@forgotpassword');


