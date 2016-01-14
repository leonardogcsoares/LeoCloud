/**
 * Created by leonardogcsoares on 1/14/2016.
 */

var providersApp = angular.module('providersApp', ['ngRoute']);

providersApp.config(function ($routeProvider){

    $routeProvider
       .when('/',
       {
           controller: 'ProvidersController'
           //templateUrl: '/app/partials/providers.html'
       })
       // Any other route just changes back to /providers
       .otherwise({ redirectTo: '/'});
})