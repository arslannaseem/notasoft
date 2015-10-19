'use strict';

(function() {

    angular.module("JobbaApp")
            .controller('contractController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', '$timeout', function($scope, $http, newClientFormDataService, $location, $routeParams, $timeout, $translate) {
     

  
   
     
//                Quick Seacrh End
                    $http.post(path + '/get_citizens').success(function(response) {
                        $scope.states = response;
                    });


                    $scope.title = "Add Contract";
                    $scope.newform = {};
                    $http.post(path + '/contract_item_types').success(function(response) {
                        $scope.contractItemTypes = response;
                    });
                    $http.post(path + '/contract_types').success(function(response) {
//                             console.log('conract ' + response[0].id);
                        $scope.contractTypes = response;
//                        $scope.newform.contract_id = $routeParams.contract_id;
                                if($routeParams.contract_id){
                                      $scope.newform.contract_id = $routeParams.contract_id;
                                }else{
                                     $scope.newform.contract_id = 0;
                                }
                        $scope.resetSellerData();
                        $scope.resetBuyerData();
                      
                    });
//                    alert($routeParams.contract_id);
                    if ($routeParams.contract_id) {
                        $scope.title = "Edit Contract";
                        $http.post(path + '/load_contract_data', {id: $routeParams.contract_id}).success(function(response) {
//                            alert(response[0].contract_type);
$scope.newform.contract_type = response[0].contract_type;
                            if (response == '') {
                            } else {
                                $http.post(path + '/load_buyer_data', {idnumber: response[0].buyer}).success(function(response) {
                                    $scope.newform.buyerDetail = 1;
                                    $scope.newform.buyer_usertype = response.buyer[0].usertype;
                                    $scope.newform.buyer_idnumber = response.buyer[0].idnumber;
                                    $scope.newform.buyer_passport = response.buyer[0].passport;
                                    $scope.newform.buyer_firstname = response.buyer[0].firstname;
                                    $scope.newform.buyer_Lastname1 = response.buyer[0].Lastname1;
                                    $scope.newform.buyer_Lastname2 = response.buyer[0].Lastname2;
                                    $scope.newform.buyer_nationality = response.buyer[0].nationality;
                                    $scope.newform.buyer_gender = response.buyer[0].gender;
                                    $scope.newform.buyer_province = response.buyer[0].province;
                                    $scope.newform.buyer_county = response.buyer[0].county;
                                    $scope.newform.buyer_district = response.buyer[0].district;
                                    $scope.newform.buyer_country = response.buyer[0].country;
                                    $scope.newform.buyer_fprovince = response.buyer[0].fprovince;
                                    $scope.newform.buyer_state = response.buyer[0].state;
                                    $scope.newform.buyer_city = response.buyer[0].city;
                                    $scope.newform.buyer_zip = response.buyer[0].zip;
                                    $scope.newform.buyer_address1 = response.buyer[0].address1;
                                    $scope.newform.buyer_address2 = response.buyer[0].address2;
                                    $scope.newform.buyer_postcode = response.buyer[0].postcode;
                                    $scope.newform.buyer_dob = response.buyer[0].dob;
                                    $scope.newform.buyer_death = response.buyer[0].death;
                                    $scope.newform.buyer_phone1 = response.buyer[0].phone1;
                                    $scope.newform.buyer_email1 = response.buyer[0].email1;
                                    $scope.newform.buyer_phone2 = response.buyer[0].phone2;
                                    $scope.newform.buyer_email2 = response.buyer[0].email2;
                                    $scope.newform.buyer_cellphone = response.buyer[0].cellphone;
                                    $scope.newform.buyer_homephone = response.buyer[0].homephone;
                                    $scope.newform.buyer_cellphone2 = response.buyer[0].cellphone2;
                                    $scope.newform.buyer_fax = response.buyer[0].fax;
                                    $scope.newform.buyer_facebook = response.buyer[0].facebook;
                                    $scope.newform.buyer_twitter = response.buyer[0].twitter;
                                    $scope.newform.buyer_linkedin = response.buyer[0].linkedin;
                                    $scope.newform.buyer_google = response.buyer[0].google;
                                });
                                $http.post(path + '/load_seller_data', {idnumber: response[0].seller}).success(function(response) { 
                                    $scope.newform.sellerDetail = 1;
                                    $scope.newform.seller_usertype = response.seller[0].usertype;
                                    $scope.newform.seller_idnumber = response.seller[0].idnumber;
                                    $scope.newform.seller_passport = response.seller[0].passport;
                                    $scope.newform.seller_firstname = response.seller[0].firstname;
                                    $scope.newform.seller_Lastname1 = response.seller[0].Lastname1;
                                    $scope.newform.seller_Lastname2 = response.seller[0].Lastname2;
                                    $scope.newform.seller_nationality = response.seller[0].nationality;
                                    $scope.newform.seller_gender = response.seller[0].gender;
                                    $scope.newform.seller_province = response.seller[0].province;
                                    $scope.newform.seller_county = response.seller[0].county;
                                    $scope.newform.seller_district = response.seller[0].district;
                                    $scope.newform.seller_country = response.seller[0].country;
                                    $scope.newform.seller_fprovince = response.seller[0].fprovince;
                                    $scope.newform.seller_state = response.seller[0].state;
                                    $scope.newform.seller_city = response.seller[0].city;
                                    $scope.newform.seller_zip = response.seller[0].zip;
                                    $scope.newform.seller_address1 = response.seller[0].address1;
                                    $scope.newform.seller_address2 = response.seller[0].address2;
                                    $scope.newform.seller_postcode = response.seller[0].postcode;
                                    $scope.newform.seller_dob = response.seller[0].dob;
                                    $scope.newform.seller_death = response.seller[0].death;
                                    $scope.newform.seller_phone1 = response.seller[0].phone1;
                                    $scope.newform.seller_email1 = response.seller[0].email1;
                                    $scope.newform.seller_phone2 = response.seller[0].phone2;
                                    $scope.newform.seller_email2 = response.seller[0].email2;
                                    $scope.newform.seller_cellphone = response.seller[0].cellphone;
                                    $scope.newform.seller_homephone = response.seller[0].homephone;
                                    $scope.newform.seller_cellphone2 = response.seller[0].cellphone2;
                                    $scope.newform.seller_fax = response.seller[0].fax;
                                    $scope.newform.seller_facebook = response.seller[0].facebook;
                                    $scope.newform.seller_twitter = response.seller[0].twitter;
                                    $scope.newform.seller_linkedin = response.seller[0].linkedin;
                                    $scope.newform.seller_google = response.seller[0].google;
                                });
                                if($routeParams.contract_id){
                                      $scope.newform.contract_id = $routeParams.contract_id;
                                }else{
                                     $scope.newform.contract_id = 0;
                                }
                              
//                                $scope.newform.contract_item_type_name = response[0].contract_item_type_name;
                                $scope.newform.contract_item_type = response[0].contract_item_type;
                                $scope.newform.vehicle_no = response[0].vehicle_no;
                                $scope.newform.vehicle_price = response[0].vehicle_price;
                                $scope.newform.engine_no = response[0].engine_no;
                                $scope.newform.vehicle_model = response[0].vehicle_model;
                                $scope.newform.property_no = response[0].property_no;
                                $scope.newform.property_price = response[0].property_price;
                                $scope.newform.property_area = response[0].property_area;
                                $scope.newform.propert_location = response[0].propert_location;
                                $scope.newform.other_name = response[0].other_name;
                                $scope.newform.other_amount = response[0].other_amount;
                                $scope.newform.contract_item_type_name = response[0].contract_item_type_name;
                            }
                        });
                    }


                    $scope.loadBuyerData = function() {
                         var buyerIdnumber = $('#buyer_idnumber').val();
                          if ((buyerIdnumber).length >= 8 && (buyerIdnumber).length <= 10){
                        $http.post(path + '/load_buyer_data', {idnumber: $('#buyer_idnumber').val()}).success(function(response) {
//                            alert($scope.buyerDetailData);
                            if (response.buyer == '') {
                                $scope.resetBuyerData();
                            } else {
                                if (response.buyerDetail == 1) {
                                    // Alreday Client
                                    $scope.newform.buyerDetail = 1;
                                    $scope.newform.buyer_usertype = response.buyer[0].usertype;
//                                    $scope.newform.buyer_idnumber = response.buyer[0].idnumber;
                                    $scope.newform.buyer_passport = response.buyer[0].passport;
                                    $scope.newform.buyer_firstname = response.buyer[0].firstname;
                                    $scope.newform.buyer_Lastname1 = response.buyer[0].Lastname1;
                                    $scope.newform.buyer_Lastname2 = response.buyer[0].Lastname2;
                                    $scope.newform.buyer_nationality = response.buyer[0].nationality;
                                    $scope.newform.buyer_gender = response.buyer[0].gender;
                                    $scope.newform.buyer_province = response.buyer[0].province;
                                    $scope.newform.buyer_county = response.buyer[0].county;
                                    $scope.newform.buyer_district = response.buyer[0].district;
                                    $scope.newform.buyer_country = response.buyer[0].country;
                                    $scope.newform.buyer_fprovince = response.buyer[0].fprovince;
                                    $scope.newform.buyer_state = response.buyer[0].state;
                                    $scope.newform.buyer_city = response.buyer[0].city;
                                    $scope.newform.buyer_zip = response.buyer[0].zip;
                                    $scope.newform.buyer_address1 = response.buyer[0].address1;
                                    $scope.newform.buyer_address2 = response.buyer[0].address2;
                                    $scope.newform.buyer_postcode = response.buyer[0].postcode;
                                    $scope.newform.buyer_dob = response.buyer[0].dob;
                                    $scope.newform.buyer_death = response.buyer[0].death;
                                    $scope.newform.buyer_phone1 = response.buyer[0].phone1;
                                    $scope.newform.buyer_email1 = response.buyer[0].email1;
                                    $scope.newform.buyer_phone2 = response.buyer[0].phone2;
                                    $scope.newform.buyer_email2 = response.buyer[0].email2;
                                    $scope.newform.buyer_cellphone = response.buyer[0].cellphone;
                                    $scope.newform.buyer_homephone = response.buyer[0].homephone;
                                    $scope.newform.buyer_cellphone2 = response.buyer[0].cellphone2;
                                    $scope.newform.buyer_fax = response.buyer[0].fax;
                                    $scope.newform.buyer_facebook = response.buyer[0].facebook;
                                    $scope.newform.buyer_twitter = response.buyer[0].twitter;
                                    $scope.newform.buyer_linkedin = response.buyer[0].linkedin;
                                    $scope.newform.buyer_google = response.buyer[0].google;
                                } else {
                                    // No Client
                                    $scope.newform.buyerDetail = 0;
                                    $scope.newform.buyer_usertype = '';
//                                $scope.newform.buyer_idnumber = '';
                                    $scope.newform.buyer_passport = '';
                                    $scope.newform.buyer_firstname = response.buyer[0].Nombre;
                                    $scope.newform.buyer_Lastname1 = response.buyer[0].Primer_Apellido;
                                    $scope.newform.buyer_Lastname2 = response.buyer[0].Segundo_Apellido;
                                    $scope.newform.buyer_nationality = response.buyer[0].Nacionalidad_del_Inscrito;
                                    $scope.newform.buyer_gender = response.buyer[0].Sexo;
                                    $scope.newform.buyer_province = '';
                                    $scope.newform.buyer_county = '';
                                    $scope.newform.buyer_district = '';
                                    $scope.newform.buyer_country = '';
                                    $scope.newform.buyer_fprovince = '';
                                    $scope.newform.buyer_state = '';
                                    $scope.newform.buyer_city = '';
                                    $scope.newform.buyer_zip = '';
                                    $scope.newform.buyer_address1 = '';
                                    $scope.newform.buyer_address2 = '';
                                    $scope.newform.buyer_postcode = '';
                                    $scope.newform.buyer_dob = response.buyer[0].Fecha_del_Suceso;
                                    $scope.newform.buyer_death = response.buyer[0].Indicador_de_Defunción;
                                    $scope.newform.buyer_phone1 = '';
                                    $scope.newform.buyer_email1 = '';
                                    $scope.newform.buyer_phone2 = '';
                                    $scope.newform.buyer_email2 = '';
                                    $scope.newform.buyer_cellphone = '';
                                    $scope.newform.buyer_homephone = '';
                                    $scope.newform.buyer_cellphone2 = '';
                                    $scope.newform.buyer_fax = '';
                                    $scope.newform.buyer_facebook = '';
                                    $scope.newform.buyer_twitter = '';
                                    $scope.newform.buyer_linkedin = '';
                                    $scope.newform.buyer_google = '';
                                }
                            }

                        });
                    }else{
                        $scope.resetBuyerData();
                    }
                }
                    
                    //                            loadSellererData
                    $scope.loadSellererData = function() {
                            var sellerIdnumber = $('#seller_idnumber').val();
                          if ((sellerIdnumber).length >= 8 && (sellerIdnumber).length <= 10){
                        $http.post(path + '/load_seller_data', {idnumber: $('#seller_idnumber').val()}).success(function(response) {
//                            alert($scope.buyerDetailData);
                            if (response.seller == '') {
                                   $scope.resetSellerData();
                            } else {
                                 

                                if (response.sellerDetail == 1) {
                                    // Alreday Client
                                    $scope.newform.sellerDetail = 1;
                                    $scope.newform.seller_usertype = response.seller[0].usertype;
//                                    $scope.newform.seller_idnumber = response.seller[0].idnumber;
                                    $scope.newform.seller_passport = response.seller[0].passport;
                                    $scope.newform.seller_firstname = response.seller[0].firstname;
                                    $scope.newform.seller_Lastname1 = response.seller[0].Lastname1;
                                    $scope.newform.seller_Lastname2 = response.seller[0].Lastname2;
                                    $scope.newform.seller_nationality = response.seller[0].nationality;
                                    $scope.newform.seller_gender = response.seller[0].gender;
                                    $scope.newform.seller_province = response.seller[0].province;
                                    $scope.newform.seller_county = response.seller[0].county;
                                    $scope.newform.seller_district = response.seller[0].district;
                                    $scope.newform.seller_country = response.seller[0].country;
                                    $scope.newform.seller_fprovince = response.seller[0].fprovince;
                                    $scope.newform.seller_state = response.seller[0].state;
                                    $scope.newform.seller_city = response.seller[0].city;
                                    $scope.newform.seller_zip = response.seller[0].zip;
                                    $scope.newform.seller_address1 = response.seller[0].address1;
                                    $scope.newform.seller_address2 = response.seller[0].address2;
                                    $scope.newform.seller_postcode = response.seller[0].postcode;
                                    $scope.newform.seller_dob = response.seller[0].dob;
                                    $scope.newform.seller_death = response.seller[0].death;
                                    $scope.newform.seller_phone1 = response.seller[0].phone1;
                                    $scope.newform.seller_email1 = response.seller[0].email1;
                                    $scope.newform.seller_phone2 = response.seller[0].phone2;
                                    $scope.newform.seller_email2 = response.seller[0].email2;
                                    $scope.newform.seller_cellphone = response.seller[0].cellphone;
                                    $scope.newform.seller_homephone = response.seller[0].homephone;
                                    $scope.newform.seller_cellphone2 = response.seller[0].cellphone2;
                                    $scope.newform.seller_fax = response.seller[0].fax;
                                    $scope.newform.seller_facebook = response.seller[0].facebook;
                                    $scope.newform.seller_twitter = response.seller[0].twitter;
                                    $scope.newform.seller_linkedin = response.seller[0].linkedin;
                                    $scope.newform.seller_google = response.seller[0].google;
                                } else {
                                    // No Client
                                    $scope.newform.sellerDetail = 0;
                                    $scope.newform.seller_usertype = '';
//                                    $scope.newform.seller_idnumber = '';
                                    $scope.newform.seller_passport = '';
                                    $scope.newform.seller_firstname = response.seller[0].Nombre;
                                    $scope.newform.seller_Lastname1 = response.seller[0].Primer_Apellido;
                                    $scope.newform.seller_Lastname2 = response.seller[0].Segundo_Apellido;
                                    $scope.newform.seller_nationality = response.seller[0].Nacionalidad_del_Inscrito;
                                    $scope.newform.seller_gender = response.seller[0].Sexo;
                                    $scope.newform.seller_province = '';
                                    $scope.newform.seller_county = '';
                                    $scope.newform.seller_district = '';
                                    $scope.newform.seller_country = '';
                                    $scope.newform.seller_fprovince = '';
                                    $scope.newform.seller_state = '';
                                    $scope.newform.seller_city = '';
                                    $scope.newform.seller_zip = '';
                                    $scope.newform.seller_address1 = '';
                                    $scope.newform.seller_address2 = '';
                                    $scope.newform.seller_postcode = '';
                                    $scope.newform.seller_dob = response.seller[0].Fecha_del_Suceso;
                                    $scope.newform.seller_death = response.seller[0].Indicador_de_Defunción;
                                    $scope.newform.seller_phone1 = '';
                                    $scope.newform.seller_email1 = '';
                                    $scope.newform.seller_phone2 = '';
                                    $scope.newform.seller_email2 = '';
                                    $scope.newform.seller_cellphone = '';
                                    $scope.newform.seller_homephone = '';
                                    $scope.newform.seller_cellphone2 = '';
                                    $scope.newform.seller_fax = '';
                                    $scope.newform.seller_facebook = '';
                                    $scope.newform.seller_twitter = '';
                                    $scope.newform.seller_linkedin = '';
                                    $scope.newform.seller_google = '';
                                }
                            }
                        });
                    }else{
                      
                         $scope.resetSellerData();
                    }
                }
                     $scope.resetSellerData = function (){
                         $scope.newform.sellerDetail = 0;
                                $scope.newform.seller_usertype = '';
//                                $scope.newform.seller_idnumber = '';
                                $scope.newform.seller_passport = '';
                                $scope.newform.seller_firstname = '';
                                $scope.newform.seller_Lastname1 = '';
                                $scope.newform.seller_Lastname2 = '';
                                $scope.newform.seller_nationality = '';
                                $scope.newform.seller_gender = '';
                                $scope.newform.seller_province = '';
                                $scope.newform.seller_county = '';
                                $scope.newform.seller_district = '';
                                $scope.newform.seller_country = '';
                                $scope.newform.seller_fprovince = '';
                                $scope.newform.seller_state = '';
                                $scope.newform.seller_city = '';
                                $scope.newform.seller_zip = '';
                                $scope.newform.seller_address1 = '';
                                $scope.newform.seller_address2 = '';
                                $scope.newform.seller_postcode = '';
                                $scope.newform.seller_dob = '';
                                $scope.newform.seller_death = '';
                                $scope.newform.seller_phone1 = '';
                                $scope.newform.seller_email1 = '';
                                $scope.newform.seller_phone2 = '';
                                $scope.newform.seller_email2 = '';
                                $scope.newform.seller_cellphone = '';
                                $scope.newform.seller_homephone = '';
                                $scope.newform.seller_cellphone2 = '';
                                $scope.newform.seller_fax = '';
                                $scope.newform.seller_facebook = '';
                                $scope.newform.seller_twitter = '';
                                $scope.newform.seller_linkedin = '';
                                $scope.newform.seller_google = '';
                     }
                     $scope.resetBuyerData = function (){
                      $scope.newform.buyerDetail = 0;
                                $scope.newform.buyer_usertype = '';
//                                $scope.newform.buyer_idnumber = '';
                                $scope.newform.buyer_passport = '';
                                $scope.newform.buyer_firstname = '';
                                $scope.newform.buyer_Lastname1 = '';
                                $scope.newform.buyer_Lastname2 = '';
                                $scope.newform.buyer_nationality = '';
                                $scope.newform.buyer_gender = '';
                                $scope.newform.buyer_province = '';
                                $scope.newform.buyer_county = '';
                                $scope.newform.buyer_district = '';
                                $scope.newform.buyer_country = '';
                                $scope.newform.buyer_fprovince = '';
                                $scope.newform.buyer_state = '';
                                $scope.newform.buyer_city = '';
                                $scope.newform.buyer_zip = '';
                                $scope.newform.buyer_address1 = '';
                                $scope.newform.buyer_address2 = '';
                                $scope.newform.buyer_postcode = '';
                                $scope.newform.buyer_dob = '';
                                $scope.newform.buyer_death = '';
                                $scope.newform.buyer_phone1 = '';
                                $scope.newform.buyer_email1 = '';
                                $scope.newform.buyer_phone2 = '';
                                $scope.newform.buyer_email2 = '';
                                $scope.newform.buyer_cellphone = '';
                                $scope.newform.buyer_homephone = '';
                                $scope.newform.buyer_cellphone2 = '';
                                $scope.newform.buyer_fax = '';
                                $scope.newform.buyer_facebook = '';
                                $scope.newform.buyer_twitter = '';
                                $scope.newform.buyer_linkedin = '';
                                $scope.newform.buyer_google = '';
                }
                    $scope.addcontract = function(newcontract, validity) {
                        if (validity) {
                            $http.post(path + '/add_contract', {data: newcontract}).success(function(response) {
//                             // Redirect to the corporation dashboard page
                                $location.path('/contracts');
                            });
                        }
                    }



                }]

                    );
}());


