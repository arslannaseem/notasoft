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
    
    public function corporation_data_edit() {
          

        $idNumber = Input::get('idnumber');
        $data['Corporations'] =  DB::table('corporations')->where('idnumber', '=', $idNumber)->get();
        return $data['Corporations'];
    }
    public function corporation_data() {
//        echo 'ok';exit;
        
//          $vinId = Input::get('vinId');
//        $data = DB::connection('mysql2')->table('bmfd016')->where('bmfd016.N_VIN', '=', $vinId)
//                ->join('bmfd017', 'bmfd017.N_BIEN', '=', 'bmfd016.N_BIEN')
//                ->join('bmfd085', 'bmfd085.N_BIEN', '=', 'bmfd016.N_BIEN')
////                  ->join('bmfd017', 'bmfd017.N_BIEN', '=', 'bmfd016.N_BIEN' AND 'bmfd017.C_TIPOBIEN', '=', 'bmfd016.C_TIPOBIEN' AND 'bmfd017.C_CLASEBIEN', '=', 'bmfd016.C_CLASEBIEN' AND 'bmfd017.C_CÓDIGOBIEN', '=', 'bmfd016.C_CÓDIGOBIEN' )
////                  ->join('bmfd085', 'bmfd085.N_BIEN', '=', 'bmfd016.N_BIEN' AND 'bmfd085.C_TIPOBIEN', '=', 'bmfd016.C_TIPOBIEN' AND 'bmfd085.C_CLASEBIEN', '=', 'bmfd016.C_CLASEBIEN' AND 'bmfd085.C_CÓDIGOBIEN', '=', 'bmfd016.C_CÓDIGOBIEN' )
////                  ->join('bmfd085', 'bmfd085.N_BIEN', '=', 'bmfd016.N_BIEN')
//                ->select('bmfd016.N_ANOFABRI', 'bmfd016.D_ESTILO', 'bmfd016.N_SERIE', 'bmfd016.N_PESOBRUTO', 'bmfd016.C_COLOR', 'bmfd016.C_TRACCION', 'bmfd016.N_LONGITUD', 'bmfd017.C_MARCA', 'bmfd017.C_COMBUSTIBLE', 'bmfd017.D_MODELO', 'bmfd085.M_VALHACIENDA', 'bmfd085.N_CLASETRIB')
//                ->get();
//        return $data;
        

        $idNumber = Input::get('idnumber');
        
        
        
        
        $result =  DB::table('corporations')->where('idnumber', '=', $idNumber)->get();
         
//        if($result){
//            $data['Corporations'] = $result;
//        }else{
//            
            
            $data['Corporations'] = DB::connection('mysql3')->table('mercantil_personasjuridicas')->where('mercantil_personasjuridicas.N_CONSEC_CEDULA', '=', $idNumber)
                ->join('mercantil_nombramientos', 'mercantil_nombramientos.N_CONSEC_CEDULA', '=', 'mercantil_personasjuridicas.N_CONSEC_CEDULA')
                ->select('mercantil_personasjuridicas.N_CONSEC_CEDULA','mercantil_personasjuridicas.A_RAZONSOCIAL','mercantil_personasjuridicas.TOMO','mercantil_personasjuridicas.ASIENTO','mercantil_nombramientos.N_TOMOINSPARTE','mercantil_nombramientos.N_ASIENTOINSPARTE')
                ->get();
            
//            $data['Corporations'] = DB::table('available_corporations')->where('idnumber', '=', $idNumber)->get();
           
//        }
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
