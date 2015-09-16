'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('addclientController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', 'FileUploader', function ($scope, $http, newClientFormDataService, $location, $routeParams, FileUploader) {


                    $scope.result2 = '';
                    $scope.newform = {};
                    if ($routeParams.type) {            //if the page is opened for editing perform editing functions
                        $scope.newform.usertype = $routeParams.type;
                        $http.post(path + '/edit_client_data', {idnumber: $routeParams.value, type: $routeParams.type}).success(function (response) {
                            if (response == '') {
                                $scope.newform.Lastname1 = '';
                                $scope.newform.Lastname2 = '';
                                $scope.newform.death = '';
                                $scope.newform.dob = '';
                                $scope.newform.firstname = '';
                                $scope.newform.gender = '';
                                $scope.newform.nationality = '';
                            } else {
                                if ($routeParams.type == 'cedula') {
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
                                    $scope.newform.photoids = response[0].photoids;
                                    
                                    //code to auto upload files to uploader
                                    var url = path + '/public/upload_images/id_images/Desert.jpg';
                                    $http.get(url,{responseType: "blob"}).success(function(data, status, headers, config) {
                                        var mimetype = data.type;
                                        var file = new File([data], "Desert.jpg",{type:mimetype});
                                        console.log(file);
                                        var dummy = new FileUploader.FileItem(uploader, {});
                                        dummy._file = file;
                                        dummy.progress = 50;
                                        dummy.isUploaded = true;
                                        dummy.isSuccess = true;
                                        uploader.queue.push(dummy);
                                        console.log(uploader.queue);
                                        
                                    }).error(function(data, status, headers, config) {
                                        alert("The url could not be loaded...\n (network error? non-valid url? server offline? etc?)");
                                    });
                            }
                        });
                    }

                    $scope.title = "Add Client";

                    $scope.loaddata = function () {         //load selected client data
                        $http.post(path + '/load_client_data', {idnumber: $('#idnumber').val()}).success(function (response) {
                            if (response == '') {
                                $scope.newform.Lastname1 = '';
                                $scope.newform.Lastname2 = '';
                                $scope.newform.death = '';
                                $scope.newform.dob = '';
                                $scope.newform.firstname = '';
                                $scope.newform.gender = '';
                                $scope.newform.nationality = '';
                            } else {
                                if(response[0].Indicador_de_Defunción == 1 ){
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
                                }else {
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
                    $scope.reset = function () {    //reset complete form
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

                    $scope.addclient = function (newclient, validity) {     // sends the data from form object to backend using service

                    $scope.fileslist();
                        console.log(newclient);
                        if (validity) {
                            console.log(newclient);
                            newClientFormDataService.registerNewJob(newclient)
                                    .success(function (data, status, headers, config) {
                                        alert('Client Added Successfully!');
                                        console.log("success>" + data);
                                    }).
                                    error(function (data, status, headers, config) {
                                        alert('Client Already Exists!');
                                        console.log(data);
                                    });





                        }

                    };
        //function to remove spaces from string    
        $scope.removespaces = function(string) {
            if (!angular.isString(string)) {
                return string;
            }
            return string.replace(/[\s|.]/g, '');
        };
        
        //function to update comma separated selected file names
        $scope.fileslist = function(){
            angular.forEach(uploader.queue, function(value, key) {
                   if(key == 0)
                       $scope.newform.photoids = value.file.name;
                   else
                       $scope.newform.photoids += ',' + value.file.name;
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
            console.info('onCompleteItem', fileItem, response, status, headers);
            
            //loading image after upload completion
            $('<img src="'+ path + '/public/upload_images/id_images/' + fileItem.file.name +'">').load(function() {
                    $(this).width('133px').height('100px').appendTo('#'+$scope.removespaces(fileItem.file.name));
                    $('#'+$scope.removespaces(fileItem.file.name)).append(fileItem.file.name);
            }).error(function(){
                    $('#'+$scope.removespaces(fileItem.file.name)).append(fileItem.file.name);
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


