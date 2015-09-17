'use strict';

var app = angular
  .module('dogPlay', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'toaster',
    'angularMoment',
    'toaster',
    'uiGmapgoogle-maps',
    'firebase',
    'routeStyles'
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
    .when('/signup', {
        templateUrl: '../views/signup.html',
        css: '../styles/signup.css',
        controller: 'SignupController'
      })      
      .when('/', {
        templateUrl: '../views/browse.html',
        controller: 'BrowseController'
      })
      //.when('/browse/:petId', {
       // templateUrl: 'views/browse.html',
        //controller: 'BrowseController'
      //})
      
      .when('/login', {
        templateUrl: '../views/login.html',
        controller: 'LoginController',
        css: '../styles/login.css'
      })

      .when('/profile', {
        templateUrl: '../views/profile.html',
        controller: 'ProfileController',
        css: '../styles/profile.css'
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
