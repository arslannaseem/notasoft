'use strict';

(function () {
    angular.module("JobbaApp")
      .factory("registrationService", function($http, $sanitize) {

        var sanitizeFormData = function(formData) {
          return {
            firstName: $sanitize(formData.firstName),
            lastName: $sanitize(formData.lastName),
            email: $sanitize(formData.email),
            password: $sanitize(formData.password),
            confirmpassword: $sanitize(formData.confirmpassword),
          };
        };
        
                    
        
       


        return {
          registernewuser: function(newUser) {
            return $http.post( path +"/registernewuser", sanitizeFormData(newUser));
          }
        };
        
    });

}());