

(function () {
    angular.module("JobbaApp")
            .factory("newClientFormDataService", function ($http, $q, $sanitize) {


                var sanitizeFormData = function (formData) {
                    return {
                        usertype: $sanitize(formData.usertype),
                        idnumber: $sanitize(formData.idnumber),
                        passport: $sanitize(formData.passport),
                        firstname: $sanitize(formData.firstname),
                        Lastname1: $sanitize(formData.Lastname1),
                        Lastname2: $sanitize(formData.Lastname2),
                        nationality: $sanitize(formData.nationality),
                        gender: $sanitize(formData.gender),
                        province: $sanitize(formData.province),
                        county: $sanitize(formData.county),
                        district: $sanitize(formData.district),
                        country: $sanitize(formData.country),
                        fprovince: $sanitize(formData.fprovince),
                        state: $sanitize(formData.state),
                        city: $sanitize(formData.city),
                        zip: $sanitize(formData.zip),
                        address1: $sanitize(formData.address1),
                        address2: $sanitize(formData.address2),
                        postcode: $sanitize(formData.postcode),
                        dob: $sanitize(formData.dob),
                        death: $sanitize(formData.death),
                        phone1: $sanitize(formData.phone1),
                        email1: $sanitize(formData.email1),
                        phone2: $sanitize(formData.phone2),
                        email2: $sanitize(formData.email2),
                        cellphone: $sanitize(formData.cellphone),
                        homephone: $sanitize(formData.homephone),
                        cellphone2: $sanitize(formData.cellphone2),
                        fax: $sanitize(formData.fax),
                        facebook: $sanitize(formData.facebook),
                        twitter: $sanitize(formData.twitter),
                        linkedin: $sanitize(formData.linkedin),
                        google: $sanitize(formData.google),
                        photoids: $sanitize(formData.photoids),
                        profile_image: $sanitize(formData.profile_image),
                        photocat: $sanitize(formData.photocat)
                    };
                };




                return {
                    registerNewJob: function (newJob) {
                        sanitizeFormData(newJob);
                        return $http.post(path + "/create_new_client", sanitizeFormData(newJob));
                    },
//			getAllLicenceTypes: function() {
//
//				//Creating a deferred object
//				var deferredLT = $q.defer();
//
//				//Calling Web API to fetch shopping cart items
//				$http.get(path + '/newJobFormLiceneceTypes')
//					.success(function(data){
//			  		
//			  			//Passing data to deferred's resolve function on successful completion
//			  			deferredLT.resolve(data);
//					
//					}).error(function(){
//
//						//Sending a friendly error message in case of failure
//						deferredLT.reject("An error occured while fetching licenece types!");
//					});
//
//				//Returning the promise object
//				return deferredLT.promise;
//			},

//			getAllCertificatTypes: function() {
//				
//				//Creating a deferred object
//				var deferredCT = $q.defer();
//
//				//Calling Web API to fetch shopping cart items
//				$http.get(path + '/newJobFormCertificateTypes')
//					.success(function(data){
//			  		
//			  			//Passing data to deferred's resolve function on successful completion
//			  			deferredCT.resolve(data);
//					
//					}).error(function(){
//
//						//Sending a friendly error message in case of failure
//						deferredCT.reject("An error occured while fetching licenece types!");
//					});
//
//				//Returning the promise object
//				return deferredCT.promise;
//			}
                }
            });

}());