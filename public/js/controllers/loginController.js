"use strict";
(function () {
    angular.module("JobbaApp")
            .controller("loginController", ['$scope', '$location', 'userAuthService','$cookies','$window',
                function ($scope, $location, userAuthService, $cookies, $window) {

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

//                                            $cookies.user_login = 1;
                                           $window.location.href = '#/newclient';
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