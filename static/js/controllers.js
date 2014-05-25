'use strict';

/* Controllers */

angular.module('navignaw.controllers', [])
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
        var carousel = $("#outer-carousel");

        $scope.carouselNext = function() {
            carousel.carousel('next');
        }

        $scope.carouselPrev = function() {
            carousel.carousel('prev');
        }

        // If switching to new page, slide carousel
        var checkPath = function() {
            if ($location.path().substring(0, 9) === '/projects')
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

    .controller('ProjectsCtrl', ['$scope', 'projects', function($scope, projects) {
        $scope.projects = projects;
    }])

    .controller('ProjectCtrl', ['$scope', '$routeParams', '$filter', 'projects', function($scope, $routeParams, $filter, projects) {
        var projects = $filter('filter')(projects, {id: $routeParams.projectId}, true);
        $scope.project = projects.length ? projects[0] : null;
        console.log($scope.project);
    }])
;