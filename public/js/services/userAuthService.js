(function () {
    angular.module("JobbaApp")
      .factory("userAuthService", function($http, $sanitize) {

        var sanitizeCredentials = function(formData) {
          return {
            email: $sanitize(formData.email),
            password: $sanitize(formData.password)
          };
        };

        return {
          login: function(newUser) {
            return $http.post(path + "/auth/login", sanitizeCredentials(newUser));
          },
          logout: function() {
            return $http.get("/auth/logout");
          },

          isLoggedIn: function() {
            
          }
        };
    });

}());