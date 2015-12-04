//Angular controller to load all contract

'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('allVehiclesController', ['$scope', '$http', 'newClientFormDataService', '$location', function ($scope, $http, newClientFormDataService, $location) {

                $scope.title = "Contracts";  
        //loads existing data from clients database
                        $http.post(path + '/load_vehicles').success(function (response) {
                                $scope.vehicles = response;
                                $scope.path = path;
                        });
                      
                        $scope.album = true;
                        
                }]

                    );

}());
