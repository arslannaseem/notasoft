"use strict";

(function () {
    angular.module("JobbaApp")
            .controller("loginController", ['$scope', '$location', 'userAuthService','$cookies',
                function ($scope, $location, userAuthService, $cookies) {

                    $scope.login = function (newuser, validity) {
                        if (validity) {
                                        $('#verifyerr').addClass('hidden');
                                        $('#errorme').addClass('hidden');
                            userAuthService.login(newuser)
                                    .success(function (data, status, headers, config) {
                                        $('#verifyerr').addClass('hidden');
                                        $('#errorme').addClass('hidden');
                                        $('#navicon').removeClass('hidden');
                                        $('#nameme').html(data.firstName + ' ' + data.lastName);
                                        $('#uname').html(data.str);

                                            $cookies.user_login = 0;
                                            $location.path('/newclient');

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