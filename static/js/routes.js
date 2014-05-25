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

      .when('/web', {
         templateUrl: 'partials/web.html',
         controller: 'WebCtrl'
      })


      .when('/mobile', {
         templateUrl: 'partials/mobile.html',
         controller: 'MobileCtrl'
      })

      .when('/games', {
         templateUrl: 'partials/games.html',
         controller: 'GamesCtrl'
      })

      .when('/games/:gameId', {
         templateUrl: 'templates/partials/game-detail.html',
         controller: 'GameDetailCtrl'
      })

      .otherwise({
         redirectTo: '/'
      });
   }]);
