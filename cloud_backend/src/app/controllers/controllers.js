/**
 * Created by leonardogcsoares on 1/14/2016.
 */

providersApp.controller('ProvidersController', function ($scope, $http, providersFactory) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();
    var cpuSlider;
    var ramSlider;
    var discoSlider;

    function init() {
        console.log("called");
        providersFactory.getProviders($scope, $http, function (retrievedProviders) {
            $scope.providers = retrievedProviders;


            // Finish rest of linking images for each provider.
            // Change links to local image files when possible.
            for (var i=0; i<$scope.providers.length; i++){
                if($scope.providers[i].provider === "aws")
                    $scope.providers[i].link = "http://blog.concretesolutions.com.br/wp-content/uploads/2014/01/AWS-225x205.jpg";
            }
        });

        // Initializes the slider
        cpuSlider= $('#cpu').slider();
        ramSlider = $('#ram').slider();
        discoSlider = $('#disco').slider();

        // Updates position of sliders according to position
        cpuSlider.on('slide', function(slideEvent) {
           $('#cpuSliderValue').text(slideEvent.value);

            // Refreshes the List
            $scope.$apply();
        });
        ramSlider.on('slide', function(slideEvent) {
            $('#ramSliderValue').text(slideEvent.value);

            // Refreshes the List
            $scope.$apply();
        });
        discoSlider.on('slide', function(slideEvent) {
            $('#discoSliderValue').text(slideEvent.value);

            // Refreshes the List
            $scope.$apply();
        });
    }

    $scope.priceFilter = function(provider) {
        var comparePrice;

        if($scope.price === undefined || $scope.price == "")
            comparePrice = 0;
        else
            comparePrice = parseFloat($scope.price);

        return (provider.price >= comparePrice);
    };
    $scope.cpuFilter = function(provider) {
        return provider.cpu >= cpuSlider.slider('getValue');
    };
    $scope.ramFilter = function(provider) {
        return provider.ram >= ramSlider.slider('getValue');
    };
    $scope.discoFilter = function(provider) {
        return provider.disco >= discoSlider.slider('getValue');
    };

    $scope.providerFilter = function(provider) {
        if($scope.providerName === "" || $scope.providerName === undefined)
            return true;

        return !provider.provider.localeCompare($scope.providerName);
        //return (provider.provider.isEqual($scope.providerName))
    }




});


loginApp.controller('LoginController', function ($scope) {


    // Login try
    $scope.loginClicked = function() {


        /// / If login successful close modal and open register
        $('#register-provider-form').removeClass('hide');
        $('#login-modal-admin').addClass('hide');

        // Read username and password from Login Modal
        //console.log($scope.adminUsername);
        //console.log($scope.adminPassword);
    }

});
