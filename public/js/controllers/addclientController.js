'use strict';

(function() {

    angular.module("JobbaApp")
            .controller('addclientController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', 'FileUploader', '$timeout', function($scope, $http, newClientFormDataService, $location, $routeParams, FileUploader, $timeout, $translate) {


// function on change the province
                    $scope.changeDistrict = function() {
                        $scope.districts = [
                            {
                                "code": "1",
                                "name": "Cangrejal"
                            },
                            {
                                "code": "2",
                                "name": "Guaitil"
                            },
                            {
                                "code": "3",
                                "name": "Palmichal"
                            },
                            {
                                "code": "4",
                                "name": "Sabanillas"
                            },
                            {
                                "code": "5",
                                "name": "Cangrejal 2"
                            },
                            {
                                "code": "6",
                                "name": "Guaitil 2"
                            },
                            {
                                "code": "7",
                                "name": "Palmichal 2"
                            }
                        ];
                    };
                    $scope.changeCounty = function() {
                        $scope.countries = [
                            {
                                "code": "1",
                                "name": "Desamparados"
                            },
                            {
                                "code": "2",
                                "name": "Dota"
                            },
                            {
                                "code": "3",
                                "name": "Escazú"
                            },
                            {
                                "code": "4",
                                "name": "Goicoechea"
                            },
                            {
                                "code": "5",
                                "name": "Goicoechea2"
                            },
                            {
                                "code": "6",
                                "name": "Goicoechea3"
                            },
                            {
                                "code": "7",
                                "name": "Goicoechea4",
                                "value": '12'
                            }
                        ];
                    };


//            Quick Search Request To Get all Citizens
                    $http.post(path + '/get_citizens').success(function(response) {
                        $scope.states = response;
                    });
                    $http.post(path + '/category_list').success(function(response) {
                        $scope.image_cat = response;
                    });

                    $scope.result2 = '';
                    $scope.newform = {};
                    $scope.title = "Add Client";
                    $scope.path = path;
                    if ($routeParams.type) {            //if the page is opened for editing perform editing functions
                        $scope.newform.usertype = $routeParams.type;
                        $http.post(path + '/edit_client_data', {idnumber: $routeParams.value, type: $routeParams.type}).success(function(response) {
                            if (response == '') {

                                $scope.newform.Lastname1 = '';
                                $scope.newform.Lastname2 = '';
                                $scope.newform.death = '';
                                $scope.newform.dob = '';
                                $scope.newform.firstname = '';
                                $scope.newform.gender = '';
                                $scope.newform.nationality = '';
                            } else {
                                $scope.title = "Edit Client";
                                $scope.newform.edit = true;
                                // console.log($scope.newform.edit);
                                if ($routeParams.type == 'cedula') {
                                    $scope.newform.idnumber = parseFloat(response[0].idnumber, 10);
                                    $scope.newform.postcode = parseFloat(response[0].postcode, 10);
                                    $scope.newform.county = response[0].county;
                                    $scope.newform.Lastname1 = response[0].Lastname1;
                                    $scope.newform.Lastname2 = response[0].Lastname2;
                                    $scope.newform.death = response[0].death;
                                    $scope.newform.dob = response[0].dob;
                                    $scope.newform.firstname = response[0].firstname;
                                    $scope.newform.nationality = response[0].nationality
                                    $scope.newform.gender = response[0].gender;
                                    $scope.newform.address1 = response[0].address1;
                                    $scope.newform.address2 = response[0].address2;
                                    $scope.newform.postcode = response[0].postcode;
                                    $scope.newform.province = response[0].province;
                                    $scope.newform.district = response[0].district;
                                    $scope.newform.idnumber = response[0].idnumber;
                                } else if ($routeParams.type == 'foreign') {
                                    $scope.newform.idnumber = parseFloat(response[0].idnumber, 10);
                                    $scope.newform.postcode = parseFloat(response[0].postcode, 10);
                                    $scope.newform.county = response[0].county;
                                    $scope.newform.address1 = response[0].address1;
                                    $scope.newform.address2 = response[0].address2;
                                    $scope.newform.city = response[0].city;
                                    $scope.newform.country = response[0].country;
                                    $scope.newform.county = response[0].county;
                                    $scope.newform.fprovince = response[0].fprovince;
                                    $scope.newform.idnumber = response[0].idnumber;
                                    $scope.newform.firstname = response[0].firstname;
                                    $scope.newform.postcode = response[0].postcode;
                                    $scope.newform.province = response[0].province;
                                    $scope.newform.state = response[0].state;
                                    $scope.newform.usertype = response[0].usertype;
                                    $scope.newform.district = response[0].district;

                                }
                                $scope.newform.phone1 = response[0].phone1;
                                $scope.newform.email1 = response[0].email1;
                                $scope.newform.phone2 = response[0].phone2;
                                $scope.newform.email2 = response[0].email2;
                                $scope.newform.cellphone = response[0].cellphone;
                                $scope.newform.homephone = response[0].homephone;
                                $scope.newform.cellphone2 = response[0].cellphone2;
                                $scope.newform.fax = response[0].fax;
                                $scope.newform.facebook = response[0].facebook;
                                $scope.newform.twitter = response[0].twitter;
                                $scope.newform.linkedin = response[0].linkedin;
                                $scope.newform.google = response[0].google;
                                $scope.newform.photoids = response[0].photoids;  //comma separated string of images attached to client
                                $scope.newform.profile_image = response[0].profile_image;


                                var profile_url = path + '/public/upload_images/id_images/' + $scope.newform.profile_image;
                                $http.get(profile_url, {responseType: "blob"}).success(function(data, status, headers, config) {
                                    var mimetype = data.type;
                                    var file = new File([data], $scope.newform.profile_image, {type: mimetype});
                                    var dummy = new FileUploader.FileItem(profile_uploader, {});
                                    dummy._file = file;
                                    dummy.file = dummy._file;
                                    dummy.progress = 100;
                                    dummy.isUploaded = true;
                                    dummy.isSuccess = true;
                                    profile_uploader.queue.push(dummy);

                                }).error(function(data, status, headers, config) {
                                    alert("The url could not be loaded...\n (network error? non-valid url? server offline? etc?)");
                                });

                                //display already uploaded image in edit 
                                $timeout(function() {
                                    $('#pr_image').html('<img width="133px" heigh="100px" src="' + profile_url + '">');
                                }, 100);





                                // var existing_images = $scope.newform.photoids.split(',');

                                //converting string to array
                                $scope.existing_images = new Array();
                                $scope.existing_images = $scope.newform.photoids.split(',');
                                // console.log('exploded images ' + existing_images[1]);

                                //loop to convert each image in file object and push it to uploader queue so user can see the 
                                //uploaded images for editing
                                angular.forEach($scope.existing_images, function(value, key) {
                                    //code to auto upload files to uploader
                                    var url = path + '/public/upload_images/id_images/' + value;
                                    $http.get(url, {responseType: "blob"}).success(function(data, status, headers, config) {
                                        var mimetype = data.type;
                                        var file = new File([data], value, {type: mimetype});
                                        var dummy = new FileUploader.FileItem(uploader, {});
                                        dummy._file = file;
                                        dummy.file = dummy._file;
                                        dummy.progress = 100;
                                        dummy.isUploaded = true;
                                        dummy.isSuccess = true;
                                        dummy.cat_name = 1;
                                        uploader.queue.push(dummy);

                                    }).error(function(data, status, headers, config) {
                                        alert("The url could not be loaded...\n (network error? non-valid url? server offline? etc?)");
                                    });
                                });
                                //display already uploaded images in edit 
                                $timeout(function() {
                                    angular.forEach($scope.existing_images, function(val, key) {
                                        console.log('ssss' + '<img src="' + path + '/public/upload_images/id_images/' + val + '">');
                                        $('#' + $scope.removespaces(val)).html('<img width="133px" heigh="100px" src="' + path + '/public/upload_images/id_images/' + val + '">');
                                    });

                                }, 500);

                            }
                        });
                    }

                    // $scope.title = "Add Client";

                    $scope.loaddata = function() {         //load selected client data
                        $http.post(path + '/load_client_data', {idnumber: $('#idnumber').val()}).success(function(response) {
                            if (response == '') {
                                $scope.newform.Lastname1 = '';
                                $scope.newform.Lastname2 = '';
                                $scope.newform.death = '';
                                $scope.newform.dob = '';
                                $scope.newform.firstname = '';
                                $scope.newform.gender = '';
                                $scope.newform.nationality = '';
                            } else {
                                if (response[0].Indicador_de_Defunción == 1) {
                                    if (confirm("THIS PERSON IS DEAD. DO YOU WANT TO PROCEED???")) {
                                        $scope.newform.Lastname1 = response[0].Primer_Apellido;
                                        $scope.newform.Lastname2 = response[0].Segundo_Apellido;
                                        $scope.newform.death = response[0].Indicador_de_Defunción;
                                        $scope.newform.dob = response[0].Fecha_del_Suceso;
                                        $scope.newform.firstname = response[0].Nombre;
                                        $scope.newform.nationality = response[0].Nacionalidad_del_Inscrito
                                        $scope.newform.gender = response[0].Sexo;
                                        //                                   $scope.newform.address1 = response[0].address1;
                                        //                                   $scope.newform.address2 = response[0].address2;
                                        //                                   $scope.newform.city = response[0].city;
                                        //                                   $scope.newform.country = response[0].country;
                                        //                                   $scope.newform.county = response[0].county;
                                        //                                   $scope.newform.fprovince = response[0].fprovince;
                                        //                                   $scope.newform.idnumber = response[0].idnumber;
                                        //                                   $scope.newform.firstname = response[0].firstname;
                                        //                                   $scope.newform.postcode = response[0].postcode;
                                        //                                   $scope.newform.province = response[0].province;
                                        //                                   $scope.newform.state = response[0].state;
                                        //                                   $scope.newform.usertype = response[0].usertype;
                                        //                                   $scope.newform.district = response[0].district;
                                    }
                                } else {
                                    $scope.newform.Lastname1 = response[0].Primer_Apellido;
                                    $scope.newform.Lastname2 = response[0].Segundo_Apellido;
                                    $scope.newform.death = response[0].Indicador_de_Defunción;
                                    $scope.newform.dob = response[0].Fecha_del_Suceso;
                                    $scope.newform.firstname = response[0].Nombre;
                                    $scope.newform.nationality = response[0].Nacionalidad_del_Inscrito
                                    $scope.newform.gender = response[0].Sexo;
                                }
                            }
                        });
                    }
                    $scope.reset = function() {    //reset complete form
                        $scope.newform.idnumber = '';
                        $scope.newform.passport = '';
                        $scope.newform.Lastname1 = '';
                        $scope.newform.Lastname2 = '';
                        $scope.newform.death = '';
                        $scope.newform.dob = '';
                        $scope.newform.firstname = '';
                        $scope.newform.gender = '';
                        $scope.newform.nationality = '';
                        $scope.newform.address1 = '';
                        $scope.newform.address2 = '';
                        $scope.newform.city = '';
                        $scope.newform.country = '';
                        $scope.newform.county = '';
                        $scope.newform.postcode = '';
                        $scope.newform.province = '';
                        $scope.newform.state = '';
                        $scope.newform.district = '';
                        $scope.newform.residence = '';
                    };

                    $scope.addclient = function(newclient, validity) {     // sends the data from form object to backend using service
                        $scope.fileslist();
                        console.log(newclient);
                        if (validity) {
                            console.log(newclient);
                            newClientFormDataService.registerNewJob(newclient)
                                    .success(function(data, status, headers, config) {
                                        alert('Client Added Successfully!');
                                        $location.path('/clients');
                                        console.log("success>" + data);
                                    }).
                                    error(function(data, status, headers, config) {
                                        alert('Client Already Exists!');
                                        console.log(data);
                                    });

                        }

                    };

                    //profile image uploader
                    var profile_uploader = $scope.profile_uploader = new FileUploader({
                        url: path + '/public/php_libraries/upload.php'
                    });


                    profile_uploader.onCompleteItem = function(fileItem, response, status, headers) {
                        console.info('onCompleteItem', fileItem, response, status, headers);

                        //loading image after upload completion
                        $('<img src="' + path + '/public/upload_images/id_images/' + fileItem.file.name + '">').load(function() {
                            $(this).width('133px').height('100px').appendTo('#pr_image');
                            $('#pr_image').append(fileItem.file.name);
                            $scope.newform.profile_image = fileItem.file.name;
                        }).error(function() {
                            alert("error occured while displaying uploaded image");
                        });
                    };


                    //function to remove spaces from string    
                    $scope.removespaces = function(string) {
                        if (!angular.isString(string)) {
                            return string;
                        }
                        return string.replace(/[\s|.]/g, '');
                    };

                    //function to update comma separated selected file names
                    $scope.fileslist = function() {

                        angular.forEach(uploader.queue, function(value, key) {
                            $scope.category = value.file.name + '_category';
                            // console.log('Test ' + document.getElementById($scope.category));
                            console.log('Category Value ' + $("#" + $scope.category).val());


                            // $scope.newform.photoids =   array.push(value.file.name +'');

                            // if(key == 0)
                            //     $scope.newform.photoids = value.file.name;
                            // else
                            // $scope.newform.photoids += ',' + value.file.name;
                        });
                        console.log($scope.newform.photoids);
                    }

                    var uploader = $scope.uploader = new FileUploader({
                        url: path + '/public/php_libraries/upload.php'
                    });

                    // FILTERS
                    $scope.image_url = path + '/public/upload_images/id_images/Desert.jpg';
                    uploader.filters.push({
                        name: 'customFilter',
                        fn: function(item /*{File|FileLikeObject}*/, options) {
                            return this.queue.length < 10;
                        }
                    });

                    // CALLBACKS

                    uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
                        console.info('onWhenAddingFileFailed', item, filter, options);
                    };
                    uploader.onAfterAddingFile = function(fileItem) {
                        console.info('onAfterAddingFile', fileItem);
                        fileItem.upload();
                    };
                    uploader.onAfterAddingAll = function(addedFileItems) {
                        console.info('onAfterAddingAll', addedFileItems);
                    };
                    uploader.onBeforeUploadItem = function(item) {
                        console.info('onBeforeUploadItem', item);
                    };
                    uploader.onProgressItem = function(fileItem, progress) {
                        console.info('onProgressItem', fileItem, progress);
                    };
                    uploader.onProgressAll = function(progress) {
                        console.info('onProgressAll', progress);
                    };
                    uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        console.info('onSuccessItem', fileItem, response, status, headers);
                    };
                    uploader.onErrorItem = function(fileItem, response, status, headers) {
                        console.info('onErrorItem', fileItem, response, status, headers);
                    };
                    uploader.onCancelItem = function(fileItem, response, status, headers) {
                        console.info('onCancelItem', fileItem, response, status, headers);
                    };
                    uploader.onCompleteItem = function(fileItem, response, status, headers) {


                        //loading image after upload completion
                        $('<img src="' + path + '/public/upload_images/id_images/' + fileItem.file.name + '">').load(function() {

                            $(this).width('133px').height('100px').appendTo('#' + $scope.removespaces(fileItem.file.name));
                            $('#' + $scope.removespaces(fileItem.file.name)).append(fileItem.file.name);
                            //   $('#'+$scope.removespaces(fileItem.file.name)).append(fileItem.file.name);


                        }).error(function() {
                            $('#' + $scope.removespaces(fileItem.file.name)).append(fileItem.file.name);
                        });
                        $scope.fileslist();
                    };
                    uploader.onCompleteAll = function() {
                        console.info('onCompleteAll');
                    };

                    //get uploaded image from db
//    $scope.uploadimage = $cookies.profile_image;
//    userdata_service.post('ang_login/image/', {
//    }).then(function(uploadimage) {
//        $scope.uploadimage = $cookies.profile_image;
//    });




                    //Image Upload Code start
//    $scope.uploader = new FileUploader({
//        url: '../app/php_libraries/upload.php'
//    });
//    // FILTERS
//
//    $scope.uploader.filters.push({
//        name: 'customFilter',
//        fn: function(item /*{File|FileLikeObject}*/, options) {
//            return this.queue.length < 10;
//        }
//    });
//        // CALLBACKS
//        $scope.remove_image = function(){
//            $scope.image_selected = false;
//            $scope.show_choose = true;
//            $scope.uploader.clearQueue();
//            $scope.image_url = '../app/images/upload.png';
//            jQuery('#file').val("");    //empty the input file value so next time if same file selects then it works
//        }
//        $scope.uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
////            console.info('onWhenAddingFileFailed', item, filter, options);
//        };
//        $scope.uploader.onAfterAddingFile = function(fileItem) {
////            console.info('onAfterAddingFile', fileItem);
//            $scope.show_choose = false;
//            if(!fileItem.file.name.match(/\.(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/)){
//                alert("Selected file is not a valid image");
//                $scope.invalid_image = true;
//            }else{
//                $scope.invalid_image = false;
//            }
//        };
//        $scope.uploader.onAfterAddingAll = function(addedFileItems) {
////            console.info('onAfterAddingAll', addedFileItems);
//        };
//        $scope.uploader.onBeforeUploadItem = function(item) {
////            console.info('onBeforeUploadItem', item);
//        };
//        $scope.uploader.onProgressItem = function(fileItem, progress) {
////            console.info('onProgressItem', fileItem, progress);
//        };
//        $scope.uploader.onProgressAll = function(progress) {
////            console.info('onProgressAll', progress);
//        };
//        $scope.uploader.onSuccessItem = function(fileItem, response, status, headers) {
////            console.info('onSuccessItem', fileItem, response, status, headers);
//        };
//        $scope.uploader.onErrorItem = function(fileItem, response, status, headers) {
////            console.info('onErrorItem', fileItem, response, status, headers);
//        };
//        $scope.uploader.onCancelItem = function(fileItem, response, status, headers) {
////            console.info('onCancelItem', fileItem, response, status, headers);
//        };
//        $scope.uploader.onCompleteItem = function(fileItem, response, status, headers) {
//            $scope.image_selected = true;
////            console.info('onCompleteItem', fileItem, response, status, headers);
//            $scope.image_url = '../app/upload_images/profile/'+fileItem.file.name;
//            $scope.signup.profile_image = fileItem.file.name;
//            
//        };
//        $scope.uploader.onCompleteAll = function() {
////            console.info('onCompleteAll');
//        };

                }]

                    );

}());


