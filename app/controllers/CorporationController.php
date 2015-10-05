<?php

class CorporationController extends BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response 
     */
    public function add_corporation() {
        $data = Input::all();
        $idNumber = $data['data']['idnumber'];

        $corporationData = Corporations::where('idnumber', '=', $idNumber)->first();
        if ($corporationData === null) {
            $corporation = Corporations::create($data['data']);  //calling client model statically
        } else {
            Corporations::where('idnumber', '=', $idNumber)->update($data['data']);
        }
    }

    // list of all corporaions
    public function load_corporation() {
        $data['Corporations'] = Corporations::get();      // loads all clients from clients database
        return $data['Corporations'];
    }

    public function corporation_data() {

        $idNumber = Input::get('idnumber');
//        $data['Corporations'] = Corporations::where('idnumber','=',$idnumber)->get();
        $data['Corporations'] = DB::table('available_corporations')->where('idnumber', '=', $idNumber)->get();
        return $data['Corporations'];
    }

}
