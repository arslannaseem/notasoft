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
//activating user$
Route::post('/activateUser', 'UserController@activate_user');
Route::get('/login', 'UserController@index');
// Categories For image
 Route::post('/category_list','ClientsController@image_categories');
// Add Corporation
 Route::post('/add_corporation','CorporationController@add_corporation');
 // list of all corporations
 Route::post('/load_corporations','CorporationController@load_corporation');
// load corporation Data
 Route::post('/load_corporation_data','CorporationController@corporation_data');
 // load all contract types
 Route::post('/contract_types','contractController@contract_types');
 // load data of buyer 
 Route::post('/load_buyer_data','contractController@load_buyer_data');
 // load data of seller
 Route::post('/load_seller_data','contractController@load_seller_data');
 // add new contract
 Route::post('/add_contract','contractController@add_contract');
// get all contract item types
 Route::post('/contract_item_types','contractController@contract_item_types');
// get all contracts
 Route::post('/load_contracts','contractController@load_contracts');
// Load Contract Data
 Route::post('/load_contract_data','contractController@load_contract_data');
 // Load All Citizens
 Route::post('/get_citizens','contractController@get_citizens');
 // Load All corporation Ids
 Route::post('/get_corporation_ids','CorporationController@get_corporation_ids');
 // load property data
 Route::post('/load_property_data','contractController@load_property_data');
 // load vehicle data
 Route::post('/load_vehicle_data','contractController@load_vehicle_data');
 
 Route::post('/vehicles_detail','contractController@vehicles_detail');
 // get counties list
 Route::post('/get_counties','ClientsController@get_counties');
 // get Districts list
 Route::post('/get_districts','ClientsController@get_districts');
 // Add vehicles data
 Route::post('/add_vehicles','contractController@add_vehicles');
 // Load vehicles data
 Route::post('/load_vehicles','contractController@load_vehicles');
 // Load vehicles data
 Route::post('/vehicle_data','contractController@vehicle_data');
 