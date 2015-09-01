'use strict';

(function(){
	angular.module("JobbaApp")
		.controller("registerController",['$scope', '$location','registrationService', '$http', '$route',
			function($scope, $location, registrationService , $http , $route) {

				$scope.title = "Update Details";
                     $scope.jobTypes = [
							        { typeId: 1, typeName: 'Wait Staff' },
							        { typeId: 2, typeName: 'Bartender ' },
							        { typeId: 4, typeName: 'Event Staff' },
                                    { typeId: 5, typeName: 'Food and Beverage Attendent' },
                                    { typeId: 6, typeName: 'Valet Parking' },
                                    { typeId: 7, typeName: 'Cook' },
                                    { typeId: 8, typeName: 'Barista' },
                                    { typeId: 9, typeName: 'Cleaner' },
                                    { typeId: 10, typeName: 'Kitchen Porter' },
                                    { typeId: 11, typeName: 'Front of House' },
                                    { typeId: 12, typeName: 'Customer Service' },
                                    { typeId: 13, typeName: 'Promo staff' },
                                    
						    	];
			
                    $http.post(path + '/userDataget').success(function(response) {
                        $scope.getUserData = response;
                       // console.log(response);
                    });
                    
	      		$scope.registeruser = function(newuser, validity) {
                    
                    
                    
                    
	      			if(validity) {
                        
                        registrationService.registernewuser(newuser)
						  .success(function(data, status, headers, config) {
                             if(data == 1){
                                 $('#errorme').removeClass('hidden');
                             }else{
                                 $location.path( "/successReg" );
                             }
						  	
						  }).
						  
						  error(function(data, status, headers, config) {
						      console.log(data);
						  });
                    
                       
	      				
	      			}
	      		}
                        $scope.updateRecruiter = function(newuser, validity) {
                    
                    
                    
                    
	      			if(validity) {
                                $scope.jobtype = newuser.jobType;
                                $scope.firstname = newuser.firstName;
                                $scope.lastname = newuser.lastName;
                                $scope.email = newuser.email;
                                $scope.gender = newuser.gender;
                                $scope.password = newuser.password;
                            $http.post(path + '/updateUserData',{job_type:$scope.jobtype, firstname: $scope.firstname , lastname: $scope.lastname , email:$scope.email ,gender:$scope.gender , password:$scope.password}).success(function(response) {
                               // $scope.getUserData = response;
                                //console.log(response);
                                $location.path( "/successReg" );
                            });
                        		
	      			}
	      		}
                     
                    //Function to delete user        
                    $scope.deleteUser = function() {

                        $http.post(path + '/deleteUser').success(function(response) {
                            //$scope.getUserData = response;
                             $location.path( "/login" ); 
                           //    $route.reload();
                            console.log(response);
                        });
                    }
                        
			}
		]);
}());