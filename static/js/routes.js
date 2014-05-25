"use strict";

angular.module('navignaw.routes', ['ngRoute'])

   // configure views
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
         template: '',
      })

      .when('/about', {
         templateUrl: 'partials/about.html',
         controller: 'AboutCtrl'
      })

      .when('/projects/:projectId', {
         templateUrl: 'partials/project.html',
         controller: 'ProjectCtrl'
      })

      .otherwise({
         redirectTo: '/'
      });
   }]);
