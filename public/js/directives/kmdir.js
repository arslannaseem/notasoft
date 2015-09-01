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
                    
                    gmap.setMap(null);
                    
                gmap = new google.maps.Circle({
                     center: pointA,
                     radius: requ * 1000,       // Convert to meters
                     fillColor: '#333',
                     fillOpacity: 0.2,
                     map: scope.map
                  });
                
                
                    
                    
                     
                }
                
                
            });
            $('#km').val(requ);
            
             
            
            
            
        });
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


    