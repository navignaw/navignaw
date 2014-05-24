'use strict';

/* Controllers */

angular.module('navignaw.controllers', [])
    .controller('AboutCtrl', ['$scope', function($scope) {

    }])

    .controller('GamesCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
        /*$scope.location = $location;

        // Add new game to the list
        $scope.addGame = function() {
            $scope.games.$add({title: "New Game", template: "conqueror"}).then(function(ref) {
                $location.path('/games/' + ref.name());
            });
        };*/
    }])

    .controller('GameDetailCtrl', ['$scope', function($scope) {

    }])
;