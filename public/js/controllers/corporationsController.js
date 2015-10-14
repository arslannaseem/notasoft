'use strict';

(function() {

    angular.module("JobbaApp")
            .controller('corporationsController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', '$timeout', function($scope, $http, newClientFormDataService, $location, $routeParams, $timeout, $translate) {

                    $scope.title = "Add Coporations";
//            Quick Search Request To Get all Citizens
              $http.post(path + '/get_corporation_ids').success(function(response) {
                        $scope.states = response;
                    });
                    
                    $scope.newform = {};
                    $scope.addcorporation = function(newcorporation, validity) {
                        if (validity) {
                            $http.post(path + '/add_corporation', {data: newcorporation}).success(function(response) {
                                // Redirect to the corporation dashboard page
                                $location.path('/corporations');
                            });
                        }
                    }
                    if ($routeParams.idnumber) {
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

                    $scope.loaddata = function() {
                        $http.post(path + '/load_corporation_data', {idnumber: $('#idnumber').val()}).success(function(response) {
                            if (response == '') {
                                $scope.newform.tomo = '';
                                $scope.newform.asiento = '';
                                $scope.newform.page = '';
                                $scope.newform.record = '';
                                $scope.newform.no_of_shares = '';
                                $scope.newform.shareholder = '';
                                $scope.newform.vice_president_2 = '';
                                $scope.newform.corporation_type = '';
                                $scope.newform.corporation_name = '';
                                $scope.newform.idnumber = '';
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
                    }


                }]

                    );

}());


