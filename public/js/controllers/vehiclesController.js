//Angular controller to load all contract

'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('vehiclesController', ['$scope', '$http', 'newClientFormDataService', '$location', function ($scope, $http, newClientFormDataService, $location) {

                $scope.title = "Vehicles";  
        //loads existing data from clients database
//                        $http.post(path + '/load_contracts').success(function (response) {
//                                $scope.contracts = response;
//                                $scope.path = path;
//                        });

                       $scope.loaddata = function(){
                            var vinId = $('#idnumber').val();
                             $http.post(path + '/vehicles_detail', {vinId: $('#idnumber').val()}).success(function(response) {
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
                                 }
                             });
                       }
                        
                }]

                    );

}());
