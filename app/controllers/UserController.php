<?php

class UserController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return View::make('clients/index');
	}
    
    public function displayjobs()
	{
        
        if (Auth::check()){
            $id =  Auth::user()->id;
            
              $data['message_count'] = DB::table('messages')
                    ->where('receiver_id', $id)
                    ->where('is_read', 0)
                    ->groupBy('receiver_id')
                    ->count();
              
              // check if rating is required //
              
               $ids = DB::table('users')
                    ->join('jobs', 'users.id', '=', 'jobs.userid')
                    ->join('jobs_applied', 'jobs.jobs_id', '=', 'jobs_applied.jobs_id')
                    ->select('jobs_applied.userid', 'jobs_applied.jobs_id')
                    ->where('users.id', Session::get('userId'))
                    ->where('jobs_applied.status', 'completed')
                    ->get();
            
            if(count($ids) >0){
              foreach ($ids as $value) {
                          $count = DB::table('user_rating')
                          ->select('*')
                          ->where('user_rating.rated_id', $value->userid)
                          ->where('user_rating.job_rid', $value->jobs_id)
                          ->where('user_rating.rater_id', Session::get('userId'))
                          ->count();
                          if($count == 0){
                              return 1;
                          }
                   }
            }
            //End rating check//
            
//              $data['rating_count'] = DB::table('users')
//                    ->join('jobs', 'users.id', '=', 'jobs.userid')
//                    ->join('jobs_applied', 'jobs.jobs_id', '=', 'jobs_applied.jobs_id')
//                    ->leftjoin('user_rating', 'user_rating.job_rid', '=', 'jobs_applied.jobs_id')
//                    ->select('*')
//                    ->where('users.id', Session::get('userId'))
//                    ->whereNotNull('user_rating.job_rid')
//                    ->whereNotNull('user_rating.rated_id')
//                    ->where('user_rating.rated_id', '!=', Session::get('userId'))
//                    ->where('jobs_applied.status', 'completed')
//                    ->groupBy('users.id')
//                    ->count();
//              if($data['rating_count'] > 0)
//                  return 1;

//            $data['jobs'] = Job::where('userid', '=', $id)->get();
            $data['jobs'] = DB::select(DB::raw("SELECT j.* from jobs j left join jobs_applied aj on j.jobs_id = aj.jobs_id where j.userid = '".$id."' and (aj.status != 'completed' || aj.status is NULL)  group by j.jobs_id "));
//            $data['jobs'] = DB::table('jobs')
//                    ->select('*')
//                    ->leftjoin('jobs_applied', 'jobs.jobs_id', '=', 'jobs_applied.jobs_id')
//                    ->where('jobs_applied.status', '!=' , 'completed')
//                    ->where('jobs.userid', '=' , $id)
//                    ->get();
            return View::make('login/jobs' , $data);
        }
		  

	}
        
        public function displayArchivedjobs()
	{
        
        if (Auth::check()){
            $id =  Auth::user()->id;
            
              $data['message_count'] = DB::table('messages')
                    ->where('receiver_id', $id)
                    ->where('is_read', 0)
                    ->groupBy('receiver_id')
                    ->count();
              
            $data['jobs'] = DB::select(DB::raw("SELECT * from jobs j join jobs_applied aj on j.jobs_id = aj.jobs_id where j.userid = '".$id."' and aj.status = 'completed' group by j.jobs_id "));
            return View::make('login/archived_jobs' , $data);
        }
		  

	}
   
        
     
    public function displayjobsItems($jobId)
	{
        
        if (Auth::check()){
            
            $data['job']  = Job::find($jobId);
            $data['jobs'] = ApplyJobs::where('jobs_id', '=', $jobId)->get();
            
            $data = DB::table('users')
                    ->join('jobs_applied', 'users.id', '=', 'jobs_applied.userid') 
                    ->leftJoin('user_rating', 'users.id', '=', 'user_rating.rated_id')
                    ->leftJoin('shortlist', function($join)
                        {
                            $join->on('users.id', '=', 'shortlist.shorlisted_userid')
                            ->on('jobs_applied.jobs_id', '=', 'shortlist.shortlist_jobs_id');
                        })
                    ->select('*', DB::raw('ROUND(avg(user_rating.rating), 2) AS average'))
                    ->where('jobs_applied.jobs_id', $jobId)
                    ->where('jobs_applied.status', '!=',  'invited')
                    ->groupBy('users.id')
                    //->take(1)
                    ->get();
            
           
            
//            foreach ($data as $value) {
//                
//                 $data['avg'] = DB::table('user_rating')
//                    ->select(DB::raw('avg(user_rating.rating) AS average'))
//                    ->where('user_rating.user_id', $value->id)
//                    ->get();
//                
//            }
            
            
//                   $data = DB::table('users')
//                    ->join('jobs_applied', 'users.id', '=', 'jobs_applied.userid')
//                    ->join('user_rating', 'users.id', '=', 'user_rating.user_id')
//                    ->select('*' , DB::raw('avg(user_rating.rating) AS average'))
//                    ->where('jobs_applied.jobs_id', $jobId)
//                    ->get();



            return $data;
            //return View::make('login/job-itms' , $data);
        }
		  

	}
        
        public function activate_user(){
            $vcode = Input::get('vcode') ;
            
             $updateJobs = DB::table('users')
                    ->where('vcode', $vcode)
                    ->update(
                    array(
                        'active' => 1,
                    )
            );
             return $updateJobs;
            
        }
    public function getUserData()
	{
        $user_id = Input::get('user_id') ;
        $data = DB::table('users')
                ->leftJoin('user_rating', 'users.id', '=', 'user_rating.rated_id')
                ->select('*',DB::raw( 'AVG( user_rating.rating ) as average' ))
                ->where('users.id', $user_id)
                ->get();
        
         $other_reruirement = $data[0]->license_type;
        if($other_reruirement != '' || $other_reruirement != NULL){ 
        $require_data = DB::select(DB::raw("SELECT  `name` FROM  `otherrequirements`WHERE  `otherrequirements`.`id` IN (" . $other_reruirement . ")"));
        foreach ($require_data as $value) {
            $other_req[] = $value->name;
        }
        $data['other'] = $other_req;
        }

        return $data;

	}
        
    public function messages() {

        $input = Request::all();
        
        return $input;

//        DB::table('users')->insert(
//                array('email' => 'john@example.com', 'votes' => 0)
//        );
        //return $input;
//        if (Auth::check()){
//            
//            $data['job']  = Job::find($jobId);
//            $data['jobs'] = ApplyJobs::where('jobs_id', '=', $jobId)->get();
//            return View::make('login/job-itms' , $data);
//        }
//		  
    }
    
     public function forgotpassword() {
        
        $pass = str_random(8);
        $new_pass = Hash::make($pass);
        $email = Input::get( 'email' );
        $userUpdate = DB::table('users')
            ->where('users.email', '=', $email)
            ->update(array('password' => $new_pass));
        
        if($userUpdate == 1){
        $data = array(
           'new_pass' => $pass,
           'sender_name' => 'Notasoft'
           );
		   // print_r($data);exit;
		       $user = array(
			 'email'=> $email,
			 'name'=>'Notasoft'
			);
	
		   Mail::send('emails.forgot', $data, function($message) use($user){
				$message->from('noreply@Notasoft.info', 'Notasoft');
				$message->to($user['email'])->subject('New Password Generated!!');
			});
        }

         return $userUpdate;
    }
    
    

}