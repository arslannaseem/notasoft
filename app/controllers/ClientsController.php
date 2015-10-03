<?php

class ClientsController extends BaseController {

    /**
     * Display a listing of the resource.
     *
     * @return Response 
     */
    public function index() {
        return View::make('clients/index');
    }
    
    /**
     * Creates a new Clients .
     *
     * @return Response 
     */
    public function create_new_client() {
        $idnumber = Input::get('idnumber');
        
        
        
                $clientData = Clients::where('idnumber', '=', $idnumber)->first();
                
        if($clientData === null){
               $client = Clients::create(Input::all());  //calling client model statically
        }else{
          $client =  Clients::where('idnumber', '=' ,$idnumber)->update(Input::all());
        }
        
        
        
        /* creates new client for both cedula and other */
//        $client = Clients::create(Input::all());  //calling client model statically
        if($client) echo 1;
        else echo 0;
    }
    
     /**
     * Returns client data.
     *
     * @return Response 
     */
    public function load_client_data() {
        
            $idnumber = Input::get('idnumber');
            $data['Client'] = Citizens::where('Número_de_Cédula', '=', $idnumber)->get(); // calling citizen model statically to fetch data against given id
//            $data['Client'] = Clients::where('idnumber', '=', $idnumber)->get();
            return $data['Client'];
    }
    
     /**
     * Returns client data.
     *
     * @return Response 
     */
    public function edit_client_data() {
        
          $idnumber = Input::get('idnumber');
          $data['Clients'] = Clients::where('idnumber','=',$idnumber)   //loads the client data to be edited
                    ->get();
            return $data['Clients'];
    }

      /**
     * Returns clients.
     *
     * @return Response 
     */
    public function load_clients() {
        
            
            $data['Clients'] = Clients::get();      // loads all clients from clients database
            return $data['Clients'];
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
     public function image_categories(){
          $data['image_categories'] = ImageCategories::get();      // loads all Image Categories from clients database
          return $data['image_categories'];
     }

}
