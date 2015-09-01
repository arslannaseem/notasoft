"use strict";

(function () { 
    
 
	/*----------------------------------------------------------------------------
	|	Handles the user actions in Landing page
	|
	-----------------------------------------------------------------------------*/
	var jobbaLandingApplication = angular.module("JobbaLandingApp", ['ngSanitize']);

	var jobbaApplication = angular.module("JobbaApp", ['ngRoute', 'ngSanitize' ,'angular-loading-bar','ngAnimate' ,'ui.date','ngAutocomplete','ngCookies']);
        jobbaApplication.filter('nospace', function () {
            return function (value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        });
        jobbaApplication.config(['$routeProvider', function ($routeProvider) {

	$routeProvider
		.when('/home',
		{
			templateUrl: 'public/templates/home.html',
			controller: 'jobbaHomeController'
		})
		.when('/login',
		{
			templateUrl: 'public/templates/login.html',
			controller: 'loginController'
		})
		.when('/register',
		{
			templateUrl: 'public/templates/register.html',
			controller: 'registerController'
		})
		.when('/successReg',
		{
			templateUrl: 'public/templates/successRegistration.html',
			controller: 'registersuccessController'
		})
		.when('/registerseeker',
		{
			templateUrl: 'public/templates/registerSeeker.html',
			controller: 'jobbaRegSeekerController'
		})
		.when('/postnewjob',
		{
			templateUrl: 'public/templates/postNewJob.html',
			controller: 'jobbaPostNewJobController'
		})
                .when('/clients',
		{
			templateUrl: 'public/templates/clients.html',
			controller: 'clientController'
		})
                .when('/addclients/:type/:value',
		{
			templateUrl: 'public/templates/addclient.html',
			controller: 'addclientController'
		})
		.when('/newclient',
		{
			templateUrl: 'public/templates/addclient.html',
			controller: 'addclientController'
		})
		 .otherwise(
                            {
                                templateUrl: 'public/templates/login.html',
                                controller: 'loginController'
                            });
	}]);
  
}());