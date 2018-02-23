"use strict";

angular.module('navignaw.routes', ['ngRoute'])

   // configure views
   .config(function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
         template: '',
      })

      .when('/projects/:projectId', {
         templateUrl: 'partials/project.html',
         controller: 'ProjectCtrl'
      })

      .when('/404', {
         templateUrl: 'partials/404.html'
      })

      .otherwise({
         redirectTo: '/'
      });

      // Disable hash in url.
      $locationProvider.html5Mode(true);
   });
