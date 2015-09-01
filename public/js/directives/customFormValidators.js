"use strict";

(function() {
    
    
    
    
    angular.module('JobbaApp').directive('eatClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
            $(element).toggleClass('selected');
             var requ = null;
            $('.requirement').each(function() {
               
                if($(this).hasClass('selected')){
                    
                    if(requ == null){
                         requ =  $(this).attr('id');
                        
                        
                    }else{
                        
                        requ = requ + ',' + $(this).attr('id');
                    }
                    
                   
                }
                
                
            });
            $('#requ').val(requ);
            
             
            
            
            
        });
    }
    });
    
angular.module('JobbaApp').directive('kmEdit', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
            $('.radius-requirement').removeClass('selected');
            $(element).addClass('selected');
             var requ = null;
            $('#km').val($(element).attr('id'));
            
        });
    }
    });
     
    angular.module('JobbaApp').directive('kmClick', function() {
    return function(scope, element, attrs) {
        $(element).click(function(event) {
            event.preventDefault();
            $('.requirement').removeClass('selected');
            $(element).addClass('selected');
             var requ = null;
            $('.requirement').each(function() {
               
                if($(this).hasClass('selected')){
                    
                    requ =  $(this).attr('id');
                    console.log(scope.map);
                    
                    gmap.setMap(null);
                    var lat = $('#lat').val();
                     var long =    $('#lng').val()



                        var cities = [
                            {
                                lat: lat,
                                long: long
                            }
                        ];


                        var mapOptions = {
                            zoom: 10,
                            center: new google.maps.LatLng(lat, long),
                            mapTypeId: google.maps.MapTypeId.TERRAIN
                        }



                        scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

                        pointA = new google.maps.LatLng(lat, long);
                        var radius = requ;                                      // 10km



                        var map = scope.map;

                        // Draw the circle




                        scope.markers = [];

                        var infoWindow = new google.maps.InfoWindow();

                        var createMarker = function (info) {



                            gmap = new google.maps.Circle({
                                center: pointA,
                                radius: radius * 1000, // Convert to meters
                                fillColor: '#333',
                                fillOpacity: 0.35,
                                map: scope.map
                            });

                            var marker = new google.maps.Marker({
                                map: scope.map,
                                position: new google.maps.LatLng(info.lat, info.long),
                            });


                            google.maps.event.addListener(marker, 'click', function () {
                                infoWindow.setContent('<h2>You are here</h2>');
                                infoWindow.open(scope.map, marker);
                            });

                            scope.markers.push(marker);

                        }

                        for (var i = 0; i < cities.length; i++) {
                            createMarker(cities[i]);
                        }

                    
                    
//                    gmap.setMap(null);
                    
//                gmap = new google.maps.Circle({
//                     center: pointA,
//                     radius: requ * 1000,       // Convert to meters
//                     fillColor: '#333',
//                     fillOpacity: 0.2,
//                     map: scope.map
//                  });
//                console.log(scope.map);
                
                    
                    
                     
                }
                
                
            });
            $('#km').val(requ);
            
             
            
            
            
        });
    }
    });
    
    
    angular.module("JobbaApp")
        .directive("firstnameValidator", function() {
        	return {
        		restrict:'AE',
        		require: "ngModel",
        		link: function($scope, elem, attrs, model) {
        			model.$validators.firstName = function (modelValue, viewValue) {
        				var value = modelValue || viewValue;
                        var regex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/; //allows only  letters, and spaces
        				return regex.test(value);
        			}
        		}
        	} 		
    	});

    angular.module("JobbaApp")
        .directive("middlenameValidator", function() {
            return {
                restrict:'AE',
                require: "ngModel",
                link: function($scope, elem, attrs, model) {
                    model.$validators.middleName = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^[a-zA-Z]*$/; //allows only  empty or letters, and spaces
                        return regex.test(value);
                    }
                }
            }       
        });

    angular.module("JobbaApp")
        .directive("lastnameValidator", function() {
            return {
                restrict:'AE',
                require: "ngModel",
                link: function($scope, elem, attrs, model) {
                    model.$validators.lastName = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^([a-zA-Z]+\s)*[a-zA-Z]+$/; //allows only  letters, and spaces
                        return regex.test(value);
                    }
                }
            }       
        });

    angular.module("JobbaApp")
        .directive("emailValidator", function() {
            return {
                restrict:'AE',
                require: "ngModel",
                link: function($scope, elem, attrs, model) {
                    model.$validators.email = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/; //should be an email address
                        return regex.test(value);
                    }
                }
            }       
        });

    angular.module("JobbaApp")
        .directive("passwordValidator", function() {
            return {
                restrict:'AE',
                require: "ngModel",
                link: function($scope, elem, attrs, model) {
                    model.$validators.password = function (modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        var regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]+$/; //should contain 8 charactes and at least one letter and one number
                        return regex.test(value);
                    }
                }
            }       
        });

    angular.module("JobbaApp")
        .directive("compareValidator", function() {
            return {
                restrict:'AE',
                require: 'ngModel',
                link: function ($scope, elem, attrs, model) {
                    var originalPassword = '#' + attrs.compareTo;
                    elem.add(originalPassword).on('keyup', function () {
                        $scope.$apply(function () {
                            var v = elem.val()===$(originalPassword).val();
                            model.$setValidity('pwmatch', v);
                        });
                    });
                }
            }       
        });
        
    angular.module('JobbaApp').directive('backButton', function(){
    return {
      restrict: 'A',

      link: function(scope, element, attrs) {
        element.bind('click', goBack);

        function goBack() {
          history.back();
          scope.$apply();
        }
      }
    }
});

}());