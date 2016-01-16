/**
 * Created by leonardogcsoares on 1/14/2016.
 */


var providersApp = angular.module('providersApp', ['ngRoute']);

providersApp.config(function ($routeProvider, $interpolateProvider, $httpProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');
    //$httpProvider.defaults.xsrfCookieName = 'csrftoken';
    //$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$resourceProvider.defaults.stripTrailingSlashes = false;


    $routeProvider
       .when('/',
       {
           controller: 'ProvidersController'
           //templateUrl: '/app/partials/providers.html'
       })
       // Any other route just changes back to /providers
       .otherwise({ redirectTo: '/'});
});

var loginApp = angular.module('loginApp', ['ngRoute']);

loginApp.config(function ($routeProvider, $interpolateProvider) {
    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    $routeProvider
        .when('/',
        {
            controller: 'LoginController'
            //templateUrl: '/app/partials/providers.html'
        })
        // Any other route just changes back to /providers
        .otherwise({ redirectTo: '/'});
});