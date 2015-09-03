'use strict';

(function() {
    angular.module("JobbaApp")
            .controller("forgotController", ['$scope', '$location', '$routeParams', '$http',
                function($scope, $location, $routeParams, $http) {
                    
                    $scope.fail = false;
                    $scope.success = false;

                $scope.forgot = function(email)
                    {
                        $scope.email = email;
                        $http.post(path + '/forgotpassword', {email: $scope.email}).success(function(response) {
                            if(response == 1){
                                $scope.fail = false;
                                $scope.success = true;
                            } else{
                                $scope.fail = true;
                                $scope.success = false;
                            }
                                
                        });
                    }
                   
                }


            ]);
}());

