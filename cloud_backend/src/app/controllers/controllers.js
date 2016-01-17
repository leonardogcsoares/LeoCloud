/**
 * Created by leonardogcsoares on 1/14/2016.
 */

providersApp.controller('ProvidersController', function ($scope, $http, providersGetFactory) {

    //I like to have an init() for controllers that need to perform some initialization. Keeps things in
    //one place...not required though especially in the simple example below
    init();
    var cpuSlider;
    var ramSlider;
    var discoSlider;


    function init() {
        console.log("called");
        providersGetFactory.getProvidersFromDb($scope, $http, function (retrievedProviders) {
            $scope.providers = retrievedProviders;


            $scope.setProviderImageLinks();
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

    $scope.setProviderImageLinks = function () {
        // Sets image link for each provider
        for (var i=0; i<$scope.providers.length; i++){
            if($scope.providers[i].provider === "aws")
                $scope.providers[i].link = "http://blog.concretesolutions.com.br/wp-content/uploads/2014/01/AWS-225x205.jpg";
            else if($scope.providers[i].provider === "google")
                $scope.providers[i].link = "http://www.icon2s.com/wp-content/uploads/2015/01/Chrome.png";
            else if($scope.providers[i].provider === "hp")
                $scope.providers[i].link = "data:image/png;base64,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";
            else if($scope.providers[i].provider === "azure")
                $scope.providers[i].link = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAMAAAAI/LzAAAAASFBMVEX///9/ugDyUCIBpO//uQEAou/6xbv/5ba23vn/uwDyShIApvCBvADS5rbyUBj/5LP/9eMAqPDj8v396eXu9ePyQwDySwPzUhQHHnNYAAABE0lEQVR4nO3cOw7CQBBEQWDBgA02f+5/U6J1tEIiaBBSvQu0SpPPYiFJkj7s2oWqA8dQtwamu/eRHnVgGerYwvSrSGMdOMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD8HNPXgZCljXmMkZ7zZTI1MZIkJduVMgQq5zqwDzW1MJuSqQ6sQ22/iBnmy8DAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwPwnpvwGkyn+3aT1quWyC1UHpm2k6dTASJKkt70AZTRlgloKum4AAAAASUVORK5CYII="
            else
                $scope.providers[i].link = "http://iconshow.me/media/images/Mixed/line-icon/png/512/cloud-512.png"
        }
    };


});


loginApp.controller('LoginController', function ($scope, $http, providersPostFactory) {


    // Login try
    $scope.loginClicked = function() {


        /// / If login successful close modal and open register
        $('#register-provider-form').removeClass('hide');
        $('#login-modal-admin').addClass('hide');

        // Read username and password from Login Modal
        //console.log($scope.adminUsername);
        //console.log($scope.adminPassword);
    };

    $scope.registerProviderClicked = function() {
        if($scope.isEmptyOrUndefined($scope.providerChoice) ||
                $scope.isEmptyOrUndefined($scope.providerName) ||
                $scope.isEmptyOrUndefined($scope.cpu) ||
                $scope.isEmptyOrUndefined($scope.ram) ||
                $scope.isEmptyOrUndefined($scope.disco) ||
                $scope.isEmptyOrUndefined($scope.price)
            ) {
        }

        else {
            var newObject = {};
            newObject.provider = $scope.providerChoice;
            newObject.providerName = $scope.providerName;
            newObject.cpu = $scope.cpu;
            newObject.ram = $scope.ram;
            newObject.disco = $scope.disco;
            newObject.price = $scope.price;

            providersPostFactory.postProviderToDb($http, newObject, function (response) {
                console.log(response);

                // HTTP status created
                if(response.status === 201) {
                    // Clears the form for further input
                    $scope.providerChoice = "";
                    $scope.providerName = "";
                    $scope.cpu = "";
                    $scope.ram = "";
                    $scope.disco = "";
                    $scope.price = "";

                    // Show "Success" feedback snackbar
                }
            });
        }
    };

    $scope.isEmptyOrUndefined = function (object) {
        return (object === "" || object === undefined)
    };


});
