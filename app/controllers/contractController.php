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
//        print_r();exit;
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
        $contractItemType = $data['data']['contract_item_type'];
        $contractId = $data['data']['contract_id'];
        $sellerId = $data['data']['seller_idnumber'];
        $buyerId = $data['data']['buyer_idnumber'];
        $oldBuyer = $data['data']['buyerDetail'];
        $oldseller = $data['data']['sellerDetail'];
        $contractType = $data['data']['contract_type'];
        $userId = Session::get('userId');

        $contractData = DB::table('contract')->where('id', '=', $contractId)
                ->select('id')
                ->first();
        if ($contractData) {
            DB::table('contract')->update(array('user_id' => $userId, 'seller' => $sellerId, 'buyer' => $buyerId, 'contract_type' => $contractType, 'contract_item_type' => $contractItemType));
            $contractId = $contractData->id;
        } else {
            $contractId = DB::table('contract')->insertGetId(array('user_id' => $userId, 'seller' => $sellerId, 'buyer' => $buyerId, 'contract_type' => $contractType, 'contract_item_type' => $contractItemType));
        }

        $buyerData = array(
            'usertype' => $data['data']['buyer_usertype'],
            'user_id' => $userId,
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
            'google' => $data['data']['buyer_google'],
            'active' => 0,
        );
        
        $sellerData = array(
            'usertype' => $data['data']['seller_usertype'],
            'user_id' => $userId,
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
            'google' => $data['data']['seller_google'],
            'active' => 0,
        );
        $contractItem = array(
            'contract_id' => $contractId,
            'contract_item_type' => @$data['data']['contract_item_type'],
            'vehicle_no' => @$data['data']['vehicle_no'],
            'vehicle_price' => @$data['data']['vehicle_price'],
            'engine_no' => @$data['data']['engine_no'],
            'vehicle_model' => @$data['data']['vehicle_model'],
            'property_no' => @$data['data']['property_no'],
            'property_price' => @$data['data']['property_price'],
            'property_area' => @$data['data']['property_area'],
            'propert_location' => @$data['data']['propert_location'],
            'other_name' => @$data['data']['other_name'],
            'other_amount' => @$data['data']['other_amount'],
            'user_id' => $userId,
        );
        if ($contractData) {
            DB::table('contract_detail')->where('contract_id', $contractId)->update($contractItem);
        } else {
            DB::table('contract_detail')->insert($contractItem);
        }
        if ($oldBuyer == 0) {
            DB::table('clients')->insert($buyerData);
        } else {
            DB::table('clients')
                    ->where('idnumber', $buyerId)
                    ->update($buyerData);
        }
        if ($oldseller == 0) {
            DB::table('clients')->insert($sellerData);
        } else {
            DB::table('clients')
                    ->where('idnumber', $sellerId)
                    ->update($sellerData);
        }
    }

    public function contract_item_types() {
        $contractItemTypes = DB::table('contract_item_types')->get();
        return $contractItemTypes;
    }

    public function load_contracts() {
        $userId = Session::get('userId');
        $contracts = DB::table('contract_detail')->where('user_id', '=', $userId)
                ->join('contract_item_types', 'contract_detail.contract_item_type', '=', 'contract_item_types.id')
                ->select('contract_detail.*', 'contract_item_types.contract_item_type_name')
                ->get();
        return $contracts;
    }

    public function load_contract_data() {

        $userId = Session::get('userId');
        $contractId = Input::get('id');
        $contractDetail = DB::table('contract_detail')->where('contract_id', '=', $contractId)
                ->join('contract', 'contract_detail.contract_id', '=', 'contract.id')
                ->join('contract_item_types', 'contract_detail.contract_item_type', '=', 'contract_item_types.id')
                ->select('contract_detail.*', 'contract_item_types.contract_item_type_name', 'contract.seller', 'contract.buyer', 'contract.contract_type')
                ->get();

        return $contractDetail;
    }

    public function get_citizens() {
        $citizens = DB::table('citizens')
                ->select('Número_de_Cédula')
                ->get();
        $data = NULL;
        foreach ($citizens as $allCitizens) {
            $data .= $allCitizens->Número_de_Cédula;
            $data .= ',';
        }

        $result = substr($data, 0, -1);
        $finalReault = "[" . $result . "]";
        return $finalReault;
    }

//    function to load vehicle data
    public function load_vehicle_data() {
        $vehicleId = Input::get('vehicleId');
    }

    // function to load property data
    public function load_property_data() {
        $propertyId = Input::get('propertyId');
    }

}
