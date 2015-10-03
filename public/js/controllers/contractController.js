'use strict';

(function() {

    angular.module("JobbaApp")
            .controller('contractController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', '$timeout', function($scope, $http, newClientFormDataService, $location, $routeParams, $timeout, $translate) {

                    $scope.title = "Add Contract";
                    $scope.newform = {};
                    $http.post(path + '/contract_types').success(function(response) {
//                             console.log('conract ' + response[0].id);
                        $scope.contractTypes = response;
                    });
                    $scope.loadBuyerData = function() {
                        $http.post(path + '/load_buyer_data', {idnumber: $('#buyer_idnumber').val()}).success(function(response) {
//                            alert($scope.buyerDetailData);
                            if (response.buyerDetail == 1) {
                                // Alreday Client
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
                            } else {
                                // No Client
                                $scope.newform.buyerDetail = 0;

//                                  $scope.newform.buyer_usertype = response.buyer[0].;
//                                       $scope.newform.buyer_idnumber = response.buyer[0].;
//                                       $scope.newform.buyer_passport = response.buyer[0].;
                                $scope.newform.buyer_firstname = response.buyer[0].Nombre;
                                $scope.newform.buyer_Lastname1 = response.buyer[0].Primer_Apellido;
                                $scope.newform.buyer_Lastname2 = response.buyer[0].Segundo_Apellido;
                                $scope.newform.buyer_nationality = response.buyer[0].Nacionalidad_del_Inscrito;
                                $scope.newform.buyer_gender = response.buyer[0].Sexo;
//                                       $scope.newform.buyer_province = response.buyer[0].;
//                                       $scope.newform.buyer_county = response.buyer[0].;
//                                       $scope.newform.buyer_district = response.buyer[0].;
//                                       $scope.newform.buyer_country = response.buyer[0].;
//                                       $scope.newform.buyer_fprovince = response.buyer[0].;
//                                       $scope.newform.buyer_state = response.buyer[0].;
//                                       $scope.newform.buyer_city = response.buyer[0].;
//                                       $scope.newform.buyer_zip = response.buyer[0].;
//                                       $scope.newform.buyer_address1 = response.buyer[0].;
//                                       $scope.newform.buyer_address2 = response.buyer[0].;
//                                       $scope.newform.buyer_postcode = response.buyer[0].;
                                $scope.newform.buyer_dob = response.buyer[0].Fecha_del_Suceso;
                                $scope.newform.buyer_death = response.buyer[0].Indicador_de_Defunción;
//                                       $scope.newform.buyer_phone1 = response.buyer[0].;
//                                       $scope.newform.buyer_email1 = response.buyer[0].;
//                                       $scope.newform.buyer_phone2 = response.buyer[0].;
//                                       $scope.newform.buyer_email2 = response.buyer[0].;
//                                       $scope.newform.buyer_cellphone = response.buyer[0].;
//                                       $scope.newform.buyer_homephone = response.buyer[0].;
//                                       $scope.newform.buyer_cellphone2 = response.buyer[0].;
//                                       $scope.newform.buyer_fax = response.buyer[0].;
//                                       $scope.newform.buyer_facebook = response.buyer[0].;
//                                       $scope.newform.buyer_twitter = response.buyer[0].;
//                                       $scope.newform.buyer_linkedin = response.buyer[0].;
//                                       $scope.newform.buyer_google = response.buyer[0].;

                            }


                        });
                    }
                    //                            loadSellererData
                    $scope.loadSellererData = function() {
                        $http.post(path + '/load_seller_data', {idnumber: $('#seller_idnumber').val()}).success(function(response) {
//                            alert($scope.buyerDetailData);
                            if (response.sellerDetail == 1) {
                                // Alreday Client
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
                            } else {
                                // No Client
                                $scope.newform.sellerDetail = 0;

                                //  $scope.newform.buyer_usertype = response.seller[0].;
//                                       $scope.newform.buyer_idnumber = response.seller[0].;
//                                       $scope.newform.buyer_passport = response.seller[0].;
                                $scope.newform.buyer_firstname = response.seller[0].Nombre;
                                $scope.newform.buyer_Lastname1 = response.seller[0].Primer_Apellido;
                                $scope.newform.buyer_Lastname2 = response.seller[0].Segundo_Apellido;
                                $scope.newform.buyer_nationality = response.seller[0].Nacionalidad_del_Inscrito;
                                $scope.newform.buyer_gender = response.seller[0].Sexo;
//                                       $scope.newform.buyer_province = response.seller[0].;
//                                       $scope.newform.buyer_county = response.seller[0].;
//                                       $scope.newform.buyer_district = response.seller[0].;
//                                       $scope.newform.buyer_country = response.seller[0].;
//                                       $scope.newform.buyer_fprovince = response.seller[0].;
//                                       $scope.newform.buyer_state = response.seller[0].;
//                                       $scope.newform.buyer_city = response.seller[0].;
//                                       $scope.newform.buyer_zip = response.seller[0].;
//                                       $scope.newform.buyer_address1 = response.seller[0].;
//                                       $scope.newform.buyer_address2 = response.seller[0].;
//                                       $scope.newform.buyer_postcode = response.seller[0].;
                                $scope.newform.buyer_dob = response.seller[0].Fecha_del_Suceso;
                                $scope.newform.buyer_death = response.seller[0].Indicador_de_Defunción;
//                                       $scope.newform.buyer_phone1 = response.seller[0].;
//                                       $scope.newform.buyer_email1 = response.seller[0].;
//                                       $scope.newform.buyer_phone2 = response.seller[0].;
//                                       $scope.newform.buyer_email2 = response.seller[0].;
//                                       $scope.newform.buyer_cellphone = response.seller[0].;
//                                       $scope.newform.buyer_homephone = response.seller[0].;
//                                       $scope.newform.buyer_cellphone2 = response.seller[0].;
//                                       $scope.newform.buyer_fax = response.seller[0].;
//                                       $scope.newform.buyer_facebook = response.seller[0].;
//                                       $scope.newform.buyer_twitter = response.seller[0].;
//                                       $scope.newform.buyer_linkedin = response.seller[0].;
//                                       $scope.newform.buyer_google = response.seller[0].;

                            }
                        });
                    }
                    $scope.addcontract = function(newcontract, validity) {
                        if (validity) {
                            $http.post(path + '/add_contract', {data: newcontract}).success(function(response) {
//                             // Redirect to the corporation dashboard page
//                          $location.path('/corporations');
                            });
                        }
                    }

//                    $scope.addcorporation = function(newcorporation, validity) {
//                       if (validity) {
//                         $http.post(path + '/add_corporation', {data: newcorporation}).success(function (response) {
//                             // Redirect to the corporation dashboard page
//                          $location.path('/corporations');
//                         });
//                     }
//                    }
//                      if ($routeParams.idnumber) {
//                          $http.post(path + '/load_corporation_data', {idnumber: $routeParams.idnumber}).success(function (response) {
//                              if (response == '') {
//                                  
//                              }else{
//                                  $scope.title = "Edit Corporation";
////                                  $scope.newform.edit = true;
//                                   $scope.newform.corporation_type = response[0].corporation_type;
//                                   $scope.newform.corporation_name = response[0].corporation_name;
//                                   $scope.newform.idnumber = response[0].idnumber;
//                                   $scope.newform.registration_book = response[0].registration_book;
//                                   $scope.newform.province = response[0].province;
//                                   $scope.newform.country = response[0].country;
//                                   $scope.newform.district = response[0].district;
//                                   $scope.newform.capital = response[0].capital;
//                                   $scope.newform.address1 = response[0].address1;
//                                   $scope.newform.address2 = response[0].address2;
//                                   $scope.newform.share_value = response[0].share_value;
//                                   $scope.newform.president = response[0].president;
//                                   $scope.newform.vice_president = response[0].vice_president;
//                                   $scope.newform.secretary = response[0].secretary;
//                                   $scope.newform.treasurer = response[0].treasurer;
//                                   $scope.newform.comptroller = response[0].comptroller;
//                                   $scope.newform.manager1 = response[0].manager1;
//                                   $scope.newform.manager2 = response[0].manager2;
//                              }
//                          });
//                           
//                      }











                }]

                    );

}());


