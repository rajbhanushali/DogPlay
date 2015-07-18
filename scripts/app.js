'use strict';

var app = angular
  .module('dogPlay', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'toaster',
    'angularMoment',
    'toaster',
    'uiGmapgoogle-maps'
  ])

  // .run(function($rootScope, $location) {
  //   $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
  //     if (error === "AUTH_REQUIRED") {
  //       $location.path("/login");
  //     }
  //   });
  // })  
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'     
      })
      .when('/browse/:petId', {
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      
      .otherwise({
        redirectTo: '/'
      });

      uiGmapGoogleMapApiProvider.configure({
        key: "AIzaSyCvDiPWCATQrglzVPFY9PioCneVrkB1JSE",
          v: '3.17',
          libraries: 'weather, geometry, visualization'
        });
      
  });
