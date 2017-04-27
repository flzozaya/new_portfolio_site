var app = angular.module('app', ['ngRoute', 'ngAnimate', 'oc.lazyLoad']);

    app.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/homepage.html',
            controller: 'mainController',
        })
        .when('/work',{
            templateUrl: 'partials/work.html',
            controller: 'workController'
        })
        .when('/contact',{
            templateUrl: 'partials/contact.html',
            controller: 'contactController'
        })    
        .when('/confirmation',{
            templateUrl: 'partials/confirmation.html',
            controller: 'confirmationController'
        }) 
        .when('/resume',{
            templateUrl: 'partials/resume.html',
            controller: 'resume'
        })      
        .otherwise({
          redirectTo: '/'
        });
    });  