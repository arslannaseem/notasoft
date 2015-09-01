"use strict";

(function() {
  angular.module("JobbaApp")
    .controller("registersuccessController",['$scope', '$location' , '$http', 
    	function($scope, $location , $http) {
      		$scope.title = "Successful Registration";
                
                
                    $http.post(path + '/getMatchedUsers', {job_id: 0 }).success(function(response) {
                        $scope.jobs_data = response;
                        console.log($scope.jobs_data);
                    });
                    
                    $scope.InviteUser = function(invited_user_id)
                    {
                        $http.post(path + '/insertInvitedUser', {invited_id: invited_user_id, job_id: 0 }).success(function(response) {
                                $http.post(path + '/getMatchedUsers', {job_id: 0 }).success(function(response) {
                                    $scope.jobs_data = response;
                                    console.log($scope.jobs_data);
                                });
                            
                        });
                    }
            
            
            $scope.checkLogin = function(){
                  $http.post(path + '/auth/newlogin').success(function (data, status, headers, config) {
                                        $('#errorme').addClass('hidden');
                                        $('#navicon').removeClass('hidden');
                                        $('#nameme').html(data.firstName + ' ' + data.lastName);
                                        $('#uname').html(data.str);
                                            

                                        if (data.usertype == 2) {
                                            window.location = path + '/login#/home';
                                        } else if (data.usertype == 1) {
                                            window.location = path + '/login#/jshome';
                                        }


                                    }).
                                    error(function (data, status, headers, config) {
                                        $('#errorme').removeClass('hidden');
                                    });
            
            }
            
		}
  ]);
}());