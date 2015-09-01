<?php

class AuthenticationController extends BaseController {

    const userTypeGuest = "Guest";

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function login() {

        if (Auth::attempt(array('email' => Input::get('email'), 'password' => Input::get('password')))) {

            if (Auth::attempt(array('email' => Input::get('email'), 'password' => Input::get('password'), 'is_deleted' => 0, 'active' => 1))) {
                $pieces = explode(" ", Auth::user()->fristname . ' ' . Auth::user()->lastname);
                $str = "";
                foreach ($pieces as $piece) {
                    $str.=strtoupper($piece[0]);
                }

                $user_id = Auth::user()->id;
                $loggedInUser = array('firstName' => Auth::user()->fristname,
                    'lastName' => Auth::user()->lastname,
                    'email' => Auth::user()->email,
                    'str' => $str);
                Session::set('userId', $user_id);

               
                //completing jobs end //
                return Response::json($loggedInUser);
                //return Response::json(array('login' => '1'), 500);
            } else
                return Response::json(array('login' => '2'), 500);
        } else
                return Response::json(array('login' => '3'), 500);
    }

    public function checkLogin() {


        $email = Session::get('email');
        $password = Session::get('password');

        if (Auth::attempt(array('email' => $email, 'password' => $password))) {


            $pieces = explode(" ", Auth::user()->fristname . ' ' . Auth::user()->lastname);
            $str = "";
            foreach ($pieces as $piece) {
                $str.=strtoupper($piece[0]);
            }

            $loggedInUser = array('firstName' => Auth::user()->fristname,
                'lastName' => Auth::user()->lastname,
                'email' => Auth::user()->email,
                'str' => $str); 
            Session::set('userId', Auth::user()->id); 
            return Response::json($loggedInUser);
            //return Response::json(array('login' => '1'), 500);
        } else {
            
            return Response::json(array('login' => '2'), 500);
        } 
    }

    public function checkSeekerlogin() {
            

        $jobInfo = Session::get('seekerinfo'); 
        $password = $jobInfo['password'];
        $email = $jobInfo['email']; 
        if (Auth::attempt(array('email' => $email, 'password' => $password))) {
            

            $pieces = explode(" ", Auth::user()->fristname . ' ' . Auth::user()->lastname);
            $str = ""; 
            foreach ($pieces as $piece) {
                $str.=strtoupper($piece[0]); 
            }

            $loggedInUser = array('firstName' => Auth::user()->fristname,
                'lastName' => Auth::user()->lastname,
                'email' => Auth::user()->email,
                'str' => $str,
                'usertype' => Auth::user()->usertype);
            Session::set('userId', Auth::user()->id);
            return Response::json($loggedInUser);
            //return Response::json(array('login' => '1'), 500);
        } else {

            return Response::json(array('login' => '2'), 500);
        }
    }

  

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function logout() {
        Auth::logout();
        return Redirect::to('login');
        //return Response::json(array('flash' => 'Logged out!'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @return Response
     */
    public function store() {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id) {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function update($id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id) {
        //
    }

}
