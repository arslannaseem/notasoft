//angular js controller for add corporation

'use strict';

(function() {


    angular.module("JobbaApp")
            .controller('corporationsController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', '$timeout', function($scope, $http, newClientFormDataService, $location, $routeParams, $timeout, $translate) {

                    $scope.tab=1;
                    $scope.title = "Add Coporations";
//            Quick Search Request To Get all Citizens
                    $http.post(path + '/get_corporation_ids').success(function(response) {
                        $scope.states = response;
                    });

                    $scope.newform = {};
                    
//                    Function to add corporation

                    $scope.addcorporation = function(newcorporation, validity) {
                        if (validity) {
                            $http.post(path + '/add_corporation', {data: newcorporation}).success(function(response) {
                                // Redirect to the corporation dashboard page
                                $location.path('/corporations');
                            });
                        }
                    }
                    if ($routeParams.idnumber) {
//                        Function to add TO load corporation data for edit

                        $http.post(path + '/load_corporation_data', {idnumber: $routeParams.idnumber}).success(function(response) {
                            if (response == '') {

                            } else {
                                $scope.title = "Edit Corporation";
//                                  $scope.newform.edit = true;
                                $scope.newform.tomo = response[0].tomo;
                                $scope.newform.asiento = response[0].asiento;
                                $scope.newform.page = response[0].page;
                                $scope.newform.record = response[0].record;
                                $scope.newform.no_of_shares = response[0].no_of_shares;
                                $scope.newform.shareholder = response[0].shareholder;
                                $scope.newform.vice_president_2 = response[0].vice_president_2;
                                $scope.newform.corporation_type = response[0].corporation_type;
                                $scope.newform.corporation_name = response[0].corporation_name;
                                $scope.newform.idnumber = response[0].idnumber;
                                $scope.newform.registration_book = response[0].registration_book;
                                $scope.newform.province = response[0].province;
                                $scope.newform.country = response[0].country;
                                $scope.newform.district = response[0].district;
                                $scope.newform.capital = response[0].capital;
                                $scope.newform.address1 = response[0].address1;
                                $scope.newform.address2 = response[0].address2;
                                $scope.newform.share_value = response[0].share_value;
                                $scope.newform.president = response[0].president;
                                $scope.newform.vice_president = response[0].vice_president;
                                $scope.newform.secretary = response[0].secretary;
                                $scope.newform.treasurer = response[0].treasurer;
                                $scope.newform.comptroller = response[0].comptroller;
                                $scope.newform.manager1 = response[0].manager1;
                                $scope.newform.manager2 = response[0].manager2;
                            }
                        });

                    }
//                   Function Load data of corporation and fill in the input fields
                    $scope.loaddata = function() {
                        var idnumber = $('#idnumber').val();
//                        if ((idnumber).length >= 8 && (idnumber).length <= 10){
                            
                            $http.post(path + '/load_corporation_data', {idnumber: $('#idnumber').val()}).success(function(response) {
                                if (response == '') {
                                    $scope.reset();
                                } else {
                                    $scope.newform.tomo = response[0].tomo;
                                    $scope.newform.asiento = response[0].asiento;
                                    $scope.newform.page = response[0].page;
                                    $scope.newform.record = response[0].record;
                                    $scope.newform.no_of_shares = response[0].no_of_shares;
                                    $scope.newform.shareholder = response[0].shareholder;
                                    $scope.newform.vice_president_2 = response[0].vice_president_2;

                                    $scope.newform.corporation_type = response[0].corporation_type;
                                    $scope.newform.corporation_name = response[0].corporation_name;
                                    $scope.newform.idnumber = response[0].idnumber;
                                    $scope.newform.registration_book = response[0].registration_book;
                                    $scope.newform.province = response[0].province;
                                    $scope.newform.country = response[0].country;
                                    $scope.newform.district = response[0].district;
                                    $scope.newform.capital = response[0].capital;
                                    $scope.newform.address1 = response[0].address1;
                                    $scope.newform.address2 = response[0].address2;
                                    $scope.newform.share_value = response[0].share_value;
                                    $scope.newform.president = response[0].president;
                                    $scope.newform.vice_president = response[0].vice_president;
                                    $scope.newform.secretary = response[0].secretary;
                                    $scope.newform.treasurer = response[0].treasurer;
                                    $scope.newform.comptroller = response[0].comptroller;
                                    $scope.newform.manager1 = response[0].manager1;
                                    $scope.newform.manager2 = response[0].manager2;
                                }
                            });
//                    }else{
//                        $scope.reset();
//                    }
                }
//                Function to Reset Form data
                $scope.reset = function(){
                      $scope.newform.tomo = '';
                                    $scope.newform.asiento = '';
                                    $scope.newform.page = '';
                                    $scope.newform.record = '';
                                    $scope.newform.no_of_shares = '';
                                    $scope.newform.shareholder = '';
                                    $scope.newform.vice_president_2 = '';
                                    $scope.newform.corporation_type = '';
                                    $scope.newform.corporation_name = '';
//                                    $scope.newform.idnumber = '';
                                    $scope.newform.registration_book = '';
                                    $scope.newform.province = '';
                                    $scope.newform.country = '';
                                    $scope.newform.district = '';
                                    $scope.newform.capital = '';
                                    $scope.newform.address1 = '';
                                    $scope.newform.address2 = '';
                                    $scope.newform.share_value = '';
                                    $scope.newform.president = '';
                                    $scope.newform.vice_president = '';
                                    $scope.newform.secretary = '';
                                    $scope.newform.treasurer = '';
                                    $scope.newform.comptroller = '';
                                    $scope.newform.manager1 = '';
                                    $scope.newform.manager2 = '';
                }
                // presedent quick search
                    $scope.presidentquicksearch = function(){
                        var idnumber = $('#president').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
                    //  president quick search
                    $scope.presidentquicksearch = function(){
                        var idnumber = $('#president').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
                    // vice president quick search
                    $scope.vicepresidentquicksearch = function(){
                        var idnumber = $('#vice_president').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
                    // vice president 2 quick search
                    $scope.vicepresident2quicksearch = function(){
                        var idnumber = $('#vice_president_2').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
                    
//                   treasurer quick search
                    $scope.treasurerquicksearch = function(){
                        var idnumber = $('#treasurer').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
//                   comptroller quick search
                    $scope.comptrollerquicksearch = function(){
                        var idnumber = $('#comptroller').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
//                   comptroller quick search
                    $scope.secretaryquicksearch = function(){
                        var idnumber = $('#secretary').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
//                   manager1 quick search
                    $scope.manager1quicksearch = function(){
                        var idnumber = $('#manager1').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }
//                   manager2 quick search
                    $scope.manager2quicksearch = function(){
                        var idnumber = $('#manager2').val();
                         $http.post(path + '/get_citizens',{number: idnumber}).success(function(response) {
                        $scope.states = response;
                        
                    });
                    }


                }]

                    );

        }());

