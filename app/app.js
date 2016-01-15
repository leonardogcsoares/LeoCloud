/**
 * Created by leonardogcsoares on 1/14/2016.
 */


//$httpProvider.defaults.xsrfCookieName = 'csrftoken';
//$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
//$resourceProvider.defaults.stripTrailingSlashes = false;


var providersApp = angular.module('providersApp', ['ngRoute']);

providersApp.config(function ($routeProvider, $interpolateProvider){
    $interpolateProvider.startSymbol('[[').endSymbol(']]');

    $routeProvider
       .when('/',
       {
           controller: 'ProvidersController'
           //templateUrl: '/app/partials/providers.html'
       })
       // Any other route just changes back to /providers
       .otherwise({ redirectTo: '/'});
});