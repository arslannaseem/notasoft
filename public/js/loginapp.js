"use strict";

var jobbaApplication = null;

(function() {


    /*----------------------------------------------------------------------------
     |	Handles the user actions in Landing page
     |
     -----------------------------------------------------------------------------*/

    jobbaApplication = angular.module("JobbaApp", ['ngRoute', 'ngSanitize', 'angular-loading-bar', 'ngAnimate', 'ui.date','ngAutocomplete','geolocation','ngCookies' ]);
    jobbaApplication.filter('nospace', function () {
            return function (value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        });
    jobbaApplication.config(['$routeProvider', function($routeProvider) {

            $routeProvider
                    .when('/',
                            {
                                templateUrl: 'public/templates/login.html',
                                controller: 'jobbaLoginController'
                            })
                    .when('/forgot',
                            {
                                templateUrl: 'public/templates/forgot.html',
                                controller: 'jobbaForgotController'
                            })
                    .when('/verify/:code',
                            {
                                templateUrl: 'public/templates/verify.html',
                                controller: 'jobbaVerifyController'
                            })
                    .when('/home',
                            {
                                templateUrl: 'public/templates/recruiter-home.html',
                                controller: 'jobbaRecruitHomeController'
                            })
                    .when('/archived',
                            { 
                                templateUrl: 'public/templates/recruiter-home.html',
                                controller: 'jobbaRecruitArchivedController'
                            })
                    .when('/jshome',
                            {
                                templateUrl: 'public/templates/jobseeker-home.html',
                                controller: 'jobbaSeekerHomeController'
                            })
                    .when('/job-item/:jobId',
                            {
                                templateUrl: 'public/templates/recruiter-job-item.html',
                                controller: 'jobbaItemController'
                            })
                    .when('/chat/:userid/:jobs_id',
                            {
                                templateUrl: 'public/templates/chat.html',
                                controller: 'jobbaChatController'
                            })
                    .when('/messages',
                            {
                                templateUrl: 'public/templates/chat.html',
                                controller: 'jobbaChatController'
                            })
                    .when('/messages-list',
                            {
                                templateUrl: 'public/templates/jobseeker-messages.html',
                                controller: 'jobbaMessagetListController'
                            })
                    .when('/my-jobs',
                            {
                                templateUrl: 'public/templates/jobseeker-home.html',
                                controller: 'jobbaSeekerJobsController'
                            })
                    .when('/favourite-jobs',
                            {
                                templateUrl: 'public/templates/jobseeker-home.html',
                                controller: 'jobbaSeekerfavouriteController'
                            })
                    .when('/accepted-jobs',
                            {
                                templateUrl: 'public/templates/jobseeker-home.html',
                                controller: 'jobbaSeekerAcceptedController'
                            })
                    .when('/offer/:userid/:jobid',
                            {
                                templateUrl: 'public/templates/offer.html',
                                controller: 'jobbaMessagetListController'
                            })
                    .when('/listJob/:jobid',
                            {
                                templateUrl: 'public/templates/listJobData.html',
                                controller: 'jobbaListJobController'
                            })
                    .when('/postnewjob',
                            {
                                templateUrl: 'public/templates/recruiterNewJob.html',
                                controller: 'jobbaPostNewJobController'
                            })
                    .when('/successReg',
                            {
                                templateUrl: 'public/templates/recruiterPostsuccesfull.html',
                                //controller: 'jobbaSeekerRegSuccessController'
                            })        
                    .when('/rate',
                            {
                                templateUrl: 'public/templates/recruiter_rate.html',
                                controller: 'jobbaRecruiterRatingController'
                            })  
                    .when('/rate_employer',
                            {
                                templateUrl: 'public/templates/seeker_rate.html',
                                controller: 'jobbaSeekerRatingController'
                            })
                    .when('/registerrecruiter',
                            {
                                templateUrl: 'public/templates/editRegisterRecruiter.html',
                                controller: 'jobbaRegRecruiteController'
                            })
                    .when('/editLocation',  
                            {
                                templateUrl: 'public/templates/editJob.html', 
                                controller: 'jobbaEditjob'
                            }) 
                    .when('/selectlocation', 
                            {
                                templateUrl: 'public/templates/editLocation.html', 
                                controller: 'jobbaEditSeekerInfoController'
                            })
                    .when('/editSeeker', 
                            {
                                templateUrl: 'public/templates/editSeeker.html',
                                controller: 'jobbaEditSeekerController'
                            }) 
                    .when('/editOtherInfo', 
                            {
                                templateUrl: 'public/templates/editSeekerinfo.html',
                                controller: 'jobbaEditSeekerOtherInfo'
                            }) 
                    .when('/viewseeker',
                            {
                                templateUrl: 'public/templates/recuiter-invited-users.html',
                                controller: 'jobbaRecuitInviteController'
                            })  
                    .when('/successDel',
                            {
                                templateUrl: 'public/templates/successDelete.html',
                                controller: 'jobbaRegRecruiteController'
                            }) 
                    .otherwise(
                            {
                                templateUrl: 'public/templates/login.html',
                                controller: 'lController'
                            });

        }]);

}());