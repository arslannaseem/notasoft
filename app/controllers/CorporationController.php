<?php

class CorporationController extends BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response 
     */
    
//    Function add corporation
    
    public function add_corporation() {
        $userId = Session::get('userId');
        $data = Input::all();
        $data['data'] += array('user_id' => $userId);
        $idNumber = $data['data']['idnumber'];
        $corporationData = Corporations::where('idnumber', '=', $idNumber)->first();
        if ($corporationData == null) {
            $corporation = Corporations::create($data['data']);  //calling client model statically
        } else {
            Corporations::where('idnumber','=', $idNumber)->update($data['data']);
            
        }
    }

    // list of all corporaions
    public function load_corporation() {
        
        $userId = Session::get('userId');
        $data['Corporations'] = Corporations::where('user_id','=',$userId)->get();      // loads all clients from clients database
        return $data['Corporations'];
    }

//    Function to oad data of single corporation
    
    public function corporation_data() {

        $idNumber = Input::get('idnumber');
//         $result = Corporations::where('idnumber','=',$idNumber)->get();
        $result =  DB::table('corporations')->where('idnumber', '=', $idNumber)->get();
         
        if($result){
            $data['Corporations'] = $result;
        }else{
            $data['Corporations'] = DB::table('available_corporations')->where('idnumber', '=', $idNumber)->get();
           
        }
        return $data['Corporations'];
    }
    
//    Get all ids of corporation for quick search
    
     public function get_corporation_ids() {
        $corporationsIds = DB::table('available_corporations')
                ->select('idnumber')
                ->get();
        $data = NULL;
        foreach ($corporationsIds as $allCorporationsIds) {
            $data .= $allCorporationsIds->idnumber;
            $data .= ',';
        }
        
        $result = substr($data, 0 , -1);
        $finalReault = "[".$result."]";
        return $finalReault;
    }
    

}
