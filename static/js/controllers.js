'use strict';

/* Controllers */

angular.module('navignaw.controllers', [])
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
        var routes = ['/web', '/mobile', '/games'];
        var carousel = $("#outer-carousel");

        $scope.carouselNext = function() {
            carousel.carousel('next');
        }

        $scope.carouselPrev = function() {
            carousel.carousel('prev');
        }

        // If switching to new page, slide carousel
        var checkPath = function() {
            if (routes.indexOf($location.path()) !== -1)
                $scope.carouselNext();
            else
                $scope.carouselPrev();
        }

        $scope.go = function(path) {
            $location.path(path);
            checkPath();
        };

        checkPath();
    }])

    .controller('AboutCtrl', ['$scope', function($scope) {

    }])

    .controller('WebCtrl', ['$scope', function($scope) {

    }])

    .controller('MobileCtrl', ['$scope', function($scope) {

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