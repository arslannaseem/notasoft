<?php

class contractController extends BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response 
     */
//    Return All contract Types
    public function contract_types() {

        $contractTypes = DB::table('contract_types')->get();
        return $contractTypes;
    }

    public function load_buyer_data() {
        $idNumber = Input::get('idnumber');
        $buyerData = DB::table('clients')->where('idnumber', '=', $idNumber)->get();
        if ($buyerData) {
            $data['buyerDetail'] = 1;
            $data['buyer'] = $buyerData;
        } else {
            $data['buyerDetail'] = 0;
            $data['buyer'] = DB::table('citizens')->where('Número_de_Cédula', '=', $idNumber)->get();
        }
        return $data;
    }

    public function load_seller_data() {
        $idNumber = Input::get('idnumber');
        $sellerData = DB::table('clients')->where('idnumber', '=', $idNumber)->get();
        if ($sellerData) {
            $data['sellerDetail'] = 1;
            $data['seller'] = $sellerData;
        } else {
            $data['sellerDetail'] = 0;
            $data['seller'] = DB::table('citizens')->where('Número_de_Cédula', '=', $idNumber)->get();
        }
        return $data;
    }

    public function add_contract() {
        $data = Input::get();
        $sellerId = $data['data']['seller_idnumber'];
        $buyerId = $data['data']['buyer_idnumber'];
        $oldBuyer = $data['data']['buyerDetail'];
        $oldseller = $data['data']['sellerDetail'];
        $contractType = $data['data']['contract_type'];
        
        $buyerData = array(
            'usertype' =>  $data['data']['buyer_usertype'],
            'idnumber' => $data['data']['buyer_idnumber'],
            'passport' => $data['data']['buyer_passport'],
            'firstname' => $data['data']['buyer_firstname'],
            'Lastname1' => $data['data']['buyer_Lastname1'],
            'Lastname2' => $data['data']['buyer_Lastname2'],
            'nationality' => $data['data']['buyer_nationality'],
            'gender' => $data['data']['buyer_gender'],
            'province' => $data['data']['buyer_province'],
            'county' => $data['data']['buyer_county'],
            'district' => $data['data']['buyer_district'],
            'country' => $data['data']['buyer_country'],
            'fprovince' => $data['data']['buyer_fprovince'],
            'state' => $data['data']['buyer_state'],
            'city' => $data['data']['buyer_city'],
            'zip' => $data['data']['buyer_zip'],
            'address1' => $data['data']['buyer_address1'],
            'address2' => $data['data']['buyer_address2'],
            'postcode' => $data['data']['buyer_postcode'],
            'dob' => $data['data']['buyer_dob'],
            'death' => $data['data']['buyer_death'],
            'phone1' => $data['data']['buyer_phone1'],
            'email1' => $data['data']['buyer_email1'],
            'phone2' => $data['data']['buyer_phone2'],
            'email2' => $data['data']['buyer_email2'],
            'cellphone' => $data['data']['buyer_cellphone'],
            'homephone' => $data['data']['buyer_homephone'],
            'cellphone2' => $data['data']['buyer_cellphone2'],
            'fax' => $data['data']['buyer_fax'],
            'facebook' => $data['data']['buyer_facebook'],
            'twitter' => $data['data']['buyer_twitter'],
            'linkedin' => $data['data']['buyer_linkedin'],
            'google' => $data['data']['buyer_google']
        );
        $sellerData = array(
            'usertype' =>  $data['data']['seller_usertype'],
            'idnumber' => $data['data']['seller_idnumber'],
            'passport' => $data['data']['seller_passport'],
            'firstname' => $data['data']['seller_firstname'],
            'Lastname1' => $data['data']['seller_Lastname1'],
            'Lastname2' => $data['data']['seller_Lastname2'],
            'nationality' => $data['data']['seller_nationality'],
            'gender' => $data['data']['seller_gender'],
            'province' => $data['data']['seller_province'],
            'county' => $data['data']['seller_county'],
            'district' => $data['data']['seller_district'],
            'country' => $data['data']['seller_country'],
            'fprovince' => $data['data']['seller_fprovince'],
            'state' => $data['data']['seller_state'],
            'city' => $data['data']['seller_city'],
            'zip' => $data['data']['seller_zip'],
            'address1' => $data['data']['seller_address1'],
            'address2' => $data['data']['seller_address2'],
            'postcode' => $data['data']['seller_postcode'],
            'dob' => $data['data']['seller_dob'],
            'death' => $data['data']['seller_death'],
            'phone1' => $data['data']['seller_phone1'],
            'email1' => $data['data']['seller_email1'],
            'phone2' => $data['data']['seller_phone2'],
            'email2' => $data['data']['seller_email2'],
            'cellphone' => $data['data']['seller_cellphone'],
            'homephone' => $data['data']['seller_homephone'],
            'cellphone2' => $data['data']['seller_cellphone2'],
            'fax' => $data['data']['seller_fax'],
            'facebook' => $data['data']['seller_facebook'],
            'twitter' => $data['data']['seller_twitter'],
            'linkedin' => $data['data']['seller_linkedin'],
            'google' => $data['data']['seller_google']
        );
        if($oldBuyer == 0){
            DB::table('clients')->insert($buyerData);
        }
        if($oldseller == 0){
            DB::table('clients')->insert($sellerData);
        }
            DB::table('contract')->insert(array('seller' => $sellerId,'buyer' => $buyerId,'type' => $contractType));
    }

}

//        $saler = contract::where('saler_id', '=', $idNumber)->first();
//        if ($saler === null) {
//            $data['saler'] = 1;
//        } else {
//            $data['saler'] = 0;
//        }
//        $buyer = contract::where('buyer_id', '=', $idNumber)->first();
//        if ($buyer === null) {
//            $data['buyer'] = 1;
//        } else {
//            $data['buyer'] = 0;
//        }
//        $data['salerBuyer'] = Citizens::where('Número_de_Cédula', '=', $idNumber);
//
//        print_r($data['salerBuyer']);
//        exit;