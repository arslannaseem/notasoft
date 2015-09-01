<?php

class RegisterNewUserController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		
	}

	/**
	 * Email verification.
	 *
	 * @return mix
	 */
	public function getActivate($code) {
		return $code;

	}

	/**
	 * Get the user ip address.
	 *
	 * @return mix
	 */
	public function getClientIP() {
		$the_ip = "";

	    //Just get the headers if we can or else use the SERVER global
		if ( function_exists( 'apache_request_headers' ) ) {
			$headers = apache_request_headers();
		} else {
			$headers = $_SERVER;
		}

		//Get the forwarded IP if it exists
		if ( array_key_exists( 'X-Forwarded-For', $headers ) 
			&& filter_var( $headers['X-Forwarded-For'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {

			$the_ip = $headers['X-Forwarded-For'];

		} elseif ( array_key_exists( 'HTTP_X_FORWARDED_FOR', $headers ) 
			&& filter_var( $headers['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 )) {

			$the_ip = $headers['HTTP_X_FORWARDED_FOR'];

		} else {
			$the_ip = filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
		}

		return $the_ip;
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
        
            $input['email'] = Input::get('email');

            $rules = array('email' => 'unique:users,email');

            $validator = Validator::make($input, $rules);

            if ($validator->fails()) {
                echo 1;
            }
            else {
               
                
                $user = new User;
                $confirmation_code = str_random(30);
                $code = str_random(15);

                $user->fristname = Input::get( 'firstName' );
                $user->lastname = Input::get( 'lastName' );
                $user->email = Input::get( 'email' );
                $user->password = Hash::make(Input::get( 'password' ));
                $user->remember_token = false;
                $user->lastIPAddress = $this->getClientIP();
                $user->vcode  = $code;
                $user->save();
                
                $userId  = $user->id;

                Session::put('userId', $userId);
                Session::put('email', Input::get( 'email' ));
                Session::put('password', Input::get( 'password' ));
                // save new user
                $lng =1;

                $jobInfo =  Session::get('jobinfo');

                 $data = array(
                    'receiver_name' => Input::get( 'email' ),
                    'code' => $code
                    );
		   // print_r($data);exit;
		       $user = array(
			 'email'=> Input::get( 'email' ),
			 'name'=>'Notasoft'
			);
	
		   Mail::send('emails.user_verification', $data, function($message) use($user){
				$message->from('noreply@notasoft.com', 'Notasoft');
				$message->to($user['email'])->subject('Welcome to Notasoft!');
			});

                echo 2;
                
                
        }
        
        	
        
          
        
            

        	
        
	}

	public function successEmail() {
		return 'Your acccount has been created! We have sent you an email.';
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show()
	{
        
       
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}