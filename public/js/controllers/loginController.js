"use strict";
(function () {
    angular.module("JobbaApp")
            .controller("loginController", ['$scope', '$location', 'userAuthService','$cookies','$window','$route',
                function ($scope, $location, userAuthService, $cookies, $window, $route) {
                    
                    if($cookies.user_login == 1){
                        $cookies.user_login = 0;
                        $window.location = 'http://37.60.236.222/~notasoft/#/newclient';
                    }
                        
                    $scope.login = function (newuser, validity) {
                        if (validity) {
                                        $('#verifyerr').addClass('hidden');
                                        $('#errorme').addClass('hidden');
                            userAuthService.login(newuser)
                                    .success(function (data, status, headers, config) {
//                                        alert(data);
                                        $('#verifyerr').addClass('hidden');
                                        $('#errorme').addClass('hidden');
                                        $('#navicon').removeClass('hidden');
                                        $('#nameme').html(data.firstName + ' ' + data.lastName);
                                        $('#uname').html(data.str);

                                            $cookies.user_login = 1;
                                            $route.reload();
//                                           $window.location = 'http://37.60.236.222/~notasoft/#/newclient';
//                                            $location.path('/newclient');

                                    }).
                                    error(function (data, status, headers, config) {
                                        if(data.login == 2)
                                            $('#verifyerr').removeClass('hidden');
                                        else 
                                            $('#errorme').removeClass('hidden');
                                    });


                        }

                    };
                }

            ]);
}());