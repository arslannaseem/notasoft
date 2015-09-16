'use strict';

(function() {
    angular.module("JobbaApp")
            .controller("verifyController", ['$scope', '$location', '$routeParams', '$http',
                function($scope, $location, $routeParams, $http) {
                 
                 $scope.activated = false;
                 $scope.code = $location.url().split('/')[2];
                        $http.post(path + '/activateUser', {vcode: $scope.code}).success(function(res) {
                            if(res == 1)
                            $scope.activated = true;
                        });
                        
                        
                }


            ]);
}());