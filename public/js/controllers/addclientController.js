'use strict';

(function () {

    angular.module("JobbaApp")
            .controller('addclientController', ['$scope', '$http', 'newClientFormDataService', '$location', '$routeParams', function ($scope, $http, newClientFormDataService, $location, $routeParams) {


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



                }]

                    );

}());


