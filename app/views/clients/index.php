<!DOCTYPE html>
<html class="no-js" lang="en" ng-app="JobbaApp">

    <head>
        <meta charset="utf-8">
        <!--Include all Css and js in the project-->
        
        <?php echo HTML::style('public/bower_components/angular-loading-bar/build/loading-bar.min.css') ?>
        <?php echo HTML::style('public/bower_components/jquery-ui/themes/ui-lightness/jquery-ui.min.css') ?>
        <?php echo HTML::style('public/css/frontend.css') ?>
        <?php echo HTML::style('public/css/custom_css.css') ?>
        <?php echo HTML::script('public/js/lib/modernizr.custom.js') ?>
        <?php echo HTML::script('public/js/lib/angular-cookies.js') ?>


    </head>

    <body>
  <script>
            var path = '<?php echo URL::to('/') ?>';
        </script>
        <nav class="navbar">
            <div class="container-fluid">
                <div class="button-group text-center">
                    <?php if (Auth::check()) { ?>
                    
                    <!--List of Main menu-->
                    
                    <a href="#/newclient"><button class="btn btn-brand btn-md">Add Client</button></a>
                    <a href="#/clients"><button class="btn btn-brand btn-md">List Clients</button></a>
                    <a href="#/addcorporations"><button class="btn btn-brand btn-md">Add Corporation</button></a>
                    <a href="#/corporations"><button class="btn btn-brand btn-md">List Corporations</button></a>
                    <a href="#/addcontract"><button class="btn btn-brand btn-md">Add Contract</button></a>
                    <a href="#/contracts"><button class="btn btn-brand btn-md">List Contracts</button></a>
                    <a href="#/vehicles"><button class="btn btn-brand btn-md">Add Vehicle</button></a>
                    <a href="#/allvehicles"><button class="btn btn-brand btn-md">List Vehicles</button></a>
                    <?php }else{ ?>
                    <a href="#/login"> <button class="btn btn-brand btn-md">Login</button></a>
                    <a href="#/register"><button class="btn btn-brand btn-md">Register</button></a>
                    
                   <?php } ?>
                </div>
        </nav>
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


        <!--Load library of angular js-->
        
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
        <?php echo HTML::script('public/js/controllers/verifyController.js') ?>
        <?php echo HTML::script('public/js/controllers/corporationsController.js') ?>
        <?php echo HTML::script('public/js/controllers/allCorporationsController.js') ?>
        <?php echo HTML::script('public/js/controllers/contractController.js') ?>
        <?php echo HTML::script('public/js/controllers/allContractsController.js') ?>
        <?php echo HTML::script('public/js/controllers/vehiclesController.js') ?>
        <?php echo HTML::script('public/js/controllers/allVehiclesController.js') ?>



        <!-- Angularjs services -->	    
        <?php echo HTML::script('public/js/services/newClientFormDataService.js') ?>
        <?php echo HTML::script('public/js/services/userAuthService.js') ?>
        <?php echo HTML::script('public/js/services/registrationService.js') ?>

        <!-- Angularjs directives -->
        <?php echo HTML::script('public/js/directives/customFormValidators.js') ?>
        <?php echo HTML::script('public/js/directives/ngAutocomplete.js') ?>
        <?php echo HTML::script('public/js/directives/angular-file-upload.js') ?>

        <?php echo HTML::script('public/js/lib/angular-1.3.12/angular-touch.min.js') ?>       
        <?php echo HTML::script('public/js/lib/angular-1.3.12/angular-cookies.js') ?>       
        <?php echo HTML::script('public/js/lib/angular-1.3.12/angular-cookies.min.js') ?>       
        <?php echo HTML::script('public/js/lib/angular-1.3.12/angularjs-geolocation.min.js') ?>  

        <!--Library for localization -->
        <?php echo HTML::script('public/js/lib/angular-translate.js') ?>  

        <!--Quick Search Link-->
        <script src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.1.js"></script>
        
    </body>

</html>
