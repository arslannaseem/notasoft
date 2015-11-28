//Controller for listing all clients

'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('clientController', ['$scope', '$http', 'newClientFormDataService', '$location', function ($scope, $http, newClientFormDataService, $location) {

                $scope.title = "Clients";   //loads existing data from clients database
        
//                Function to load all clients

                        $http.post(path + '/load_clients').success(function (response) {
                                $scope.clients = response;
                                $scope.path = path;
                        });
                        $scope.album = true;
                        
                }]

                    );

}());
