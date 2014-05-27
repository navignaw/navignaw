"use strict";

angular.module('navignaw.routes', ['ngRoute'])

   // configure views
   .config(['$routeProvider', function($routeProvider) {
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
   }]);
