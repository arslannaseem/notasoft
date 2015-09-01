
angular.module('JobbaApp').filter('range', function() {
  return function(input, total) {
    total = parseInt(total);
    for (var i=1; i<=total; i++)
      input.push(i);
    return input;
  };    
})

angular.module('JobbaApp').directive('hmratings', function($http){
  return {
        restrict: 'EA',
        scope: { 
            //@ reads the attribute value, = provides two-way binding, & works with functions
            hmupto:"@",
            hmid:"@",
            hmcolor:'@',
            rate:'=',
            setrating : '&', 
            mouseover : '&',
            mouseleave : '&'
        },
        templateUrl: 'public/templates/ratings.html',
        link : function(scope,element,attr){
            scope.setrating(0);
            
        },       
        controller: function($scope){
            $scope.ratingEffect = function(r){
                var decimal = r - Math.floor(r);
                var i;
                r = Math.floor(r);;
                for(i=0;i<=r;i++)
                    angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star-o"); 

                for(i=0;i<=r;i++)
                    angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star");
                
                if(decimal >= 0.5){
                      angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star-half-empty");
                      
                  }

                for(i=r+1;i<=$scope.hmupto;i++){
                    angular.element(document.querySelector("#"+$scope.hmid+i)).removeClass("fa-star"); 
                    angular.element(document.querySelector("#"+$scope.hmid+i)).addClass("fa-star-o"); 
                }
                
            }
        }
   };
});
