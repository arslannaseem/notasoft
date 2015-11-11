"use strict";
        (function() {


            /*----------------------------------------------------------------------------
             |	Handles the user actions in Landing page
             |
             -----------------------------------------------------------------------------*/
            var jobbaLandingApplication = angular.module("JobbaLandingApp", ['ngSanitize']);

            var jobbaApplication = angular.module("JobbaApp", ['ngRoute', 'ngSanitize', 'angular-loading-bar', 'ngAnimate','ui.bootstrap', 'ui.date', 'ngAutocomplete', 'ngCookies', 'angularFileUpload', 'pascalprecht.translate', 'ngCookies']);
            jobbaApplication.filter('nospace', function() {
                return function(value) {
                    return (!value) ? '' : value.replace(/ /g, '');
                };
            });


            jobbaApplication.config(['$routeProvider', function($routeProvider) {

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
                            .when('/verify/:code',
                                    {
                                        templateUrl: 'public/templates/verify.html',
                                        controller: 'verifyController'
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
                            .when('/addcorporations',
                                    {
                                        templateUrl: 'public/templates/addcorporations.html',
                                        controller: 'corporationsController'
                                    })
                            .when('/corporations',
                                    {
                                        templateUrl: 'public/templates/corporations.html',
                                        controller: 'allCorporationsController'
                                    })
                            .when('/loadcorporation',
                                    {
                                        templateUrl: 'public/templates/corporationDetail.html',
                                        controller: 'allCorporationsController'
                                    })
                            .when('/addcontract',
                                    {
                                        templateUrl: 'public/templates/addContract.html',
                                        controller: 'contractController'
                                    })
                            .when('/contracts',
                                    {
                                        templateUrl: 'public/templates/contracts.html',
                                        controller: 'allContractsController'
                                    })
                            .when('/addcontract/:contract_id',
                                    {
                                        templateUrl: 'public/templates/addContract.html',
                                        controller: 'contractController'
                                    })
                            .when('/forgot',
                                    {
                                        templateUrl: 'public/templates/forgot.html',
                                        controller: 'forgotController'
                                    })
                            .when('/addcorporations/:idnumber',
                                    {
                                        templateUrl: 'public/templates/addcorporations.html',
                                        controller: 'corporationsController'
                                    })
                            .otherwise(
                                    {
                                        templateUrl: 'public/templates/login.html',
                                        controller: 'loginController'
                                    });
                }]);



            //translation variables with languages

            jobbaApplication.config(function($translateProvider) {
                $translateProvider.translations('en', {
                    // Login Page Variables

                    EMAIL: 'Email',
                    PASSWORD: 'Password',
                    FORGET_PASSWORD: 'Forgot Password?',
                    NEW_TO_CASE: 'New to case?',
                    SIGN_IN: 'SIGN IN',
                    LOGIN_ERROR: 'Your account is not verified! Please verify your account and try again!',
                    Not_VERIFIED_EMAIL: 'Your account is not verified! Please verify your account and try again!',
                    // // Register page Variables
                    UPDATE_DEATILS: 'Update Details',
                    FIRST_NAME: 'First Name',
                    LAST_NAME: 'Last Name',
                    EMAIL: 'Email',
                            CONFIRM_PASSWORD: 'Confirm Password',
                    SINGINGUP_AGREEMENT: 'By signing up, you agree to our',
                    TERMS_AND_CONDITION: 'Terms & Conditions',
                    AND: 'and',
                    PRIVACY_POLICY: 'Privacy Policy.',
                    SING_UP: 'SING UP',
                    HELP_BLOCK: 'In order to use our services, you must agree to Jobba s Terms &amp; Conditions.',
                    PLEASE_ENTER: 'Please enter your',
                    VALID_EMAIL: 'valid email address',
                    PASSWORD_LIMIT: 'Password should contain 6 characters or more',
                    PASSWORD_DONT_MATCH: 'Passwords don t match',
                    // Register Page validation
                    FIRST_NAME_VALIDATION: 'Please enter your first name',
                    LAST_NAME_VALIDATION: 'Please enter your Last name',
                    EMAIL_VALIDATION: 'Please enter valid email address',
                    PASSWORD_LENGTH: 'Password should contain 6 characters or more',
                    //  Add/ Edit Clients 
                    USER_TYPE: 'User Type',
                    USER_TYPE_PLC: 'Select Your Type',
                    ADD_CLIENT_TITLE: 'Add Client',
                    EDIT_CLIENT_TITLE: 'Edit Client',
                    CEDULA: 'Cedula',
                    FOREIGN: 'foreign',
                    ID_NUMBER: 'ID Number',
                    LOAD: 'Load',
                    RESIDENCE: 'Residence',
                    SELECT_RESIDENCE: 'Select your Residence',
                    COST_RICA: 'Cost Rica',
                    OTHER: 'Other',
                    PASSPORT_NUMBER: 'Passport Number',
                    FIRST_NAME: 'First Name',
                    LAST_NAME_1: 'Lastname1 (optional)',
                    LAST_NAME_2: 'Lastname2 (optional)',
                    NATIONALITY: 'Nationality',
                    SELECT_NATIONALITY: 'Select your Nationality',
                    GENDER: 'Gender',
                    SELET_GENDER: 'Select your gender',
                    MALE: 'Male',
                    FEMALE: 'Female',
                    STATE: 'State',
                    SELECT_STATE: 'Select Your State',
                    PROVINCE: 'Province',
                    SELECT_PROVINCE: 'Select Your Province',
                    COUNTRY: 'County',
                    SELECT_COUNTRY: 'Select Your County',
                    DISTRICT: 'District',
                    SELECT_DISTRICT: 'Select Your District',
                    CITY: 'city',
                    SELECT_CITY: 'Select Your City',
                    ZIP: 'Zip',
                    ADRESS1: 'Address1',
                    ADRESS2: 'Address2 (optional)',
                    POSTAL_CODE: 'Postcode',
                    DATE_OF_BIRTH: 'Date Of Birth',
                    DEAD: 'Dead',
                    UPLOAD_PROFILE_PIC: 'Upload Profile Picture',
                    SELECT_IMAGE: 'Select Image',
                    CONTACT_INFO: 'Contact Info',
                    PHONE1: 'Phone1 (optional)',
                    PHONE2: 'Phone2 (optional)',
                    EMAIL1: 'Email1 (optional)',
                    EMAIL2: 'Email2 (optional)',
                    CELLPHONE1: 'Cellphone1 (optional)',
                    CELLPHONE2: 'Cellphone2 (optional)',
                    HOMEPHONE: 'Homephone (optional)',
                    FAX: 'fax (optional)',
                    SOCIAL_INFO: 'Social Info',
                    FACEBOOK: 'Facebook (optional)',
                    TWITTER: 'Twitter (optional)',
                    LINKEDIN: 'Linked in (optional)',
                    GOOGLE: 'Google (optional)',
                    PHOTO_ID: 'Photo IDs',
                    DRAP_DROP_IMAGE: 'Drag/Drop Files Here',
                    ADD_IMAGE: 'Add Image',
                    ALL_ITEMS_PROGRESS: 'All Items Progress',
                    UPLOAD: 'Upload',
                    CANCEL: 'Cancel',
                    REMOVE: 'Remove',
                    CANCEL: 'Cancel',
                    UPLOAD_ALL: 'Upload All',
                    CANCELL_ALL: 'Cancel All',
                    REMOVE_ALL: 'Remove All',
                    SAVE: 'Save',
                    // Add Client Validation

                    IS_REQUIRED: 'Is Required !',
                    ID_DIGIT: 'Please Enter valid 9 digit ID!',
                    PASSPORT_VALIDATION: 'Please Enter valid Passport Number',
                    FIRST_NMAE_VALIDATION: 'First Name Is Required',
                    LAST_NAME1_VALIDATION: 'Last Name1  Is Required',
                    LAST_NAME2_VALIDATION: 'Last Name2  Is Required',
                    NATONALITY_VALIDATION: 'Nationality Is Required',
                    USER_TYPE_REQUIRED: 'User Type Is Required',
                    GENDER_VALIDATION: 'Gender Is Required',
                    PROVINCE_VALIDATION: 'Province Is Required',
                    COUNTRY_VALIDATION: 'Country Is Required',
                    DISTRICT_VALIDATION: 'District Is Required',
                    STATE_VALIDATION: 'State Is Required',
                    CITY_VALIDATION: 'City Is Required',
                    ZIP_VALIDATION: 'Zip Is Required',
                    ADRESS1_VALIDATION: 'Adress 1 Is Required',
                    ADRESS2_VALIDATION: 'Adress 2 Is Required',
                    POSTAL_CODE_VALIDATION: 'Postal Code Is Required',
                    DATE_OF_BIRTH_VALIDATION: 'Please Enter Valid Date OF Birth',
                    
                    // Add Corporation Validation
                    
                     TOMO:'Tomo (Book Number)',    
                     ASIENTO:'Asiento (Record Number)',
                     REGISTRATION_BOOK:'Registration book',
                     PAGE:'Page',    
                     RECORD:'Record',    
                     STOCK_INFORMATION:'Stock Information',    
                     CORPORATION_TYPE:'Corporation Type',    
                     SELECT_NAME:'Select your Name',    
                     COMMERCIAL:'commercial',    
                     NON_COMMERCIAL:'Non Commercial',    
                     NO_OF_SHARES:'No Of Shares',    
                     SHAREHOLDERS:'ShareHolders',    
                     SHARE_VALUES:'Share Value',    
                     CAPITAL:'Capital',    
                     SELECT_CAPITAL:'Select your Capital',    
                     PRESIDENT:'President',    
                     VICE_PRESIDENT:'Vice President',    
                     VICE_PRESIDENT_2:'Vice President 2',    
                     TREASURER:'Treasurer',    
                     Comptroller:'Comptroller',    
                     SECRETARY:'Secretary',    
                     MANAGERS:'Managers',    
                     MANAGERS1:'Managers 1',    
                     MANAGERS2:'Managers 2',  
                     CORPORATIONS:'Corporations',  
                     
                     // Add contract 
                     
                     CONTRACTS:'Contracts',    
                     CONTRACT_TYPE:'Contract Type',    
                     SELECT_CONTRACT:'Select Contract Type',    
                     BUYER_ID:'Buyer ID Number ',    
                     BUYER_INFORMATION:'Buyer Information ',    
                     SELLER_INFORMATION:'Seller Information',    
                     SELLER_ID:'Seller ID Number',
                     
                     CONTRACT_ITEM_TYPE:'Contract Item Type',    
                     SELECT_CONTRACT_ITEM_TYPE:'Select Contract',    
                     VEHICLE_NO:'Vehicle No',    
                     VEHICLE_PRICE:'Vehicle Price ',    
                     ENGINE_NO:'Engine No',    
                     VEHICLE_MODEL:'Vehicle Model',    
                     PROPERTY_NO:'Property No',    
                     PROPERTY_PRICE:'Property Price',    
                     PROPERTY_AREA:'Property Area',    
                     LOCATION:'Location',    
                     OTHER_NMAE:'Other Name',    
                     AMOUNT:'Amount',    
                     SELLER_ID:'Seller ID Number',    
                     



                    // Clients Lists
                    CLIENT_TITLE: 'Clients',
                    ALBUM: 'Album',
                    LIST_DISPLAY: 'List Display',
                    BUTTON_LANG_EN: 'english',
                    BUTTON_LANG_DE: 'german'
                });
                $translateProvider.translations('de', {
                    TITLE: 'Hallo',
                    FOO: 'Dies ist ein Paragraph.',
                    BUTTON_LANG_EN: 'englisch',
                    BUTTON_LANG_DE: 'deutsch'
                });
                $translateProvider.preferredLanguage('en');
            });




        }());