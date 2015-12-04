//Angular controller to load all contract

'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('vehiclesController', ['$scope', '$http', 'newClientFormDataService','$routeParams', '$location', function ($scope, $http, newClientFormDataService, $routeParams, $location) {

                $scope.title = "Vehicles";  
        //loads existing data from clients database
//                        $http.post(path + '/load_contracts').success(function (response) {
//                                $scope.contracts = response;
//                                $scope.path = path;
//                        });
//        Load Vehicle Data
 $scope.newform = {};
                       $scope.loaddata = function(){
                            var vinId = $('#vin_number').val();
                             $http.post(path + '/vehicles_detail', {vinId: $('#vin_number').val()}).success(function(response) {
                                 if(response[0] != ''){
                                     $scope.newform.year = response[0].N_ANOFABRI;
                                     $scope.newform.style = response[0].D_ESTILO;
                                     $scope.newform.series_number = response[0].N_SERIE;
                                     $scope.newform.weight = response[0].N_PESOBRUTO;
                                     $scope.newform.color = response[0].C_COLOR;
                                     $scope.newform.tranction_code = response[0].C_TRACCION;
                                     $scope.newform.length = response[0].N_LONGITUD;
                                     $scope.newform.brand = response[0].C_MARCA;
                                     $scope.newform.fuel_type = response[0].C_COMBUSTIBLE;
                                     $scope.newform.model = response[0].D_MODELO;
                                     $scope.newform.tax_value = response[0].M_VALHACIENDA;
                                     $scope.newform.tax_class = response[0].N_CLASETRIB;
                                     $scope.newform.id= '';
                                 }
                             });
                       };
                       $scope.vehicles = function(vehiclesData, validity){
                            if (validity) {
                       $http.post(path + '/add_vehicles', {vehiclesDetail: vehiclesData}).success(function(response) {
                            $location.path('/allvehicles');
                       });
                   }
                   }
                   if ($routeParams.vin_number) {
                        $http.post(path + '/vehicle_data', {vin_number: $routeParams.vin_number}).success(function(response) {
                            if(response[0] == ''){
                                
                            }else{

                                 $scope.newform.id= response[0].id;
                                 $scope.newform.vin_number = response[0].vin_number;
                                 $scope.newform.year = response[0].year;
                                     $scope.newform.style = response[0].style;
                                     $scope.newform.series_number = response[0].series_number;
                                     $scope.newform.weight = response[0].weight;
                                     $scope.newform.color = response[0].color;
                                     $scope.newform.tranction_code = response[0].tranction_code;
                                     $scope.newform.length = response[0].length;
                                     $scope.newform.brand = response[0].brand;
                                     $scope.newform.fuel_type = response[0].fuel_type;
                                     $scope.newform.model = response[0].model;
                                     $scope.newform.tax_value = response[0].tax_value;
                                     $scope.newform.tax_class = response[0].tax_class;
                            }
                        });
                    }else{
                                     $scope.newform.id = 0;
                                }
                }]

                    );

}());
