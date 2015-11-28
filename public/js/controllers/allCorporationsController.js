//angular js controller for Coroporation listing

'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('allCorporationsController', ['$scope', '$http', 'newClientFormDataService', '$location', function ($scope, $http, newClientFormDataService, $location) {

                $scope.title = "Corporations";   
                    //loads existing data from clients database
                        $http.post(path + '/load_corporations').success(function (response) {
                                $scope.corporations = response;
                                $scope.path = path;
                        });
                        $scope.album = true;
                        
                }]

                    );

}());
