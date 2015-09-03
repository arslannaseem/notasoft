

<!DOCTYPE html>
<html class="no-js" lang="en" ng-app="JobbaApp">

<head>
    
    <meta charset="utf-8">
    <?php echo HTML::style('public/bower_components/angular-loading-bar/build/loading-bar.min.css') ?>
    <?php echo HTML::style('public/bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css') ?>
    <?php echo HTML::style('public/css/frontend.css') ?>
    <?php echo HTML::script('public/js/lib/modernizr.custom.js') ?>
</head>

<body>


            <script>
	        var path = '<?php echo URL::to('/')?>';
	    </script>
                
                 <section class="content-panel">
                    <!-- extra section for emulating position:fixed of the menu -->
                    <!-- Top Navigation -->
                    <!-- Page Content -->
                    <div id="page-content-wrapper">
                        <div class="container-fluid">
                            <div class="view" ng-view></div>
                        </div>
                    </div>
                </section>

    <!-- /st-container -->

    <!-- FOOTER -->
    <footer>
        <div class="container hidden">
            <p>
                &copy; 2015 Case
                <br> ABN 11 222 333 444</p>
        </div>
    </footer>



    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    
        <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?libraries=places&sensor=false"></script>

    


    <?php echo HTML::script('public/js/lib/frontend.js') ?>
    <?php echo HTML::script('public/js/lib/sidebarEffects.js') ?>
   <!-- Bootstrap core JavaScript -->
	   
	    
	    <!-- link to angularjs libraries 
	    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.28/angular.min.js"></script>-->
        <?php echo HTML::script('public/bower_components/angular/angular.min.js') ?>
        <?php echo HTML::script('public/bower_components/angular-sanitize/angular-sanitize.min.js') ?>
        <?php echo HTML::script('public/bower_components/angular-route/angular-route.min.js') ?>
        <?php echo HTML::script('public/bower_components/angular-loading-bar/build/loading-bar.min.js') ?>
        <?php echo HTML::script('public/bower_components/angular-animate/angular-animate.min.js') ?>
        <?php echo HTML::script('public/bower_components/jquery-ui/jquery-ui.min.js') ?>
        <?php echo HTML::script('public/bower_components/angular-ui-date/src/date.js') ?>
        
        
	

	    <!-- local angularjs file -->
         <?php echo HTML::script('public/js/app.js') ?>

	    <!-- Angularjs controllers -->
        <?php echo HTML::script('public/js/controllers/addclientController.js') ?>
        <?php echo HTML::script('public/js/controllers/clientController.js') ?>
        <?php echo HTML::script('public/js/controllers/loginController.js') ?>
        <?php echo HTML::script('public/js/controllers/registerController.js') ?>
        <?php echo HTML::script('public/js/controllers/registersuccessController.js') ?>
        <?php echo HTML::script('public/js/controllers/forgotController.js') ?>
        
        
            
	    <!-- Angularjs services -->	    
        <?php echo HTML::script('public/js/services/newClientFormDataService.js') ?>
        <?php echo HTML::script('public/js/services/userAuthService.js') ?>
        <?php echo HTML::script('public/js/services/registrationService.js') ?>

	    <!-- Angularjs directives -->
        <?php echo HTML::script('public/js/directives/customFormValidators.js') ?>
        <?php echo HTML::script('public/js/directives/ngAutocomplete.js') ?>

        <?php echo HTML::script('public/js/lib/angular-1.3.12/angular-touch.min.js') ?>       
        <?php echo HTML::script('public/js/lib/angular-1.3.12/angular-cookies.js') ?>       
        <?php echo HTML::script('public/js/lib/angular-1.3.12/angularjs-geolocation.min.js') ?>  
</body>

</html>
