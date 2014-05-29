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
        var checkPath = function(path) {
            if (!path) path = $location.path();

            if (path.substring(0, 9) === '/projects' || path === '/404')
                $scope.carouselNext();
            else
                $scope.carouselPrev();
        }

        $scope.go = function(path) {
            $location.path(path);
            checkPath(path);
        };

        checkPath();
    }])

    .controller('ProjectsCtrl', ['$scope', '$filter', 'projects', function($scope, $filter, projects) {
        $scope.projects = projects;
        $scope.defaultBanner = "static/assets/banner.png";
    }])

    .controller('ProjectCtrl', ['$scope', '$routeParams', '$filter', 'projects', function($scope, $routeParams, $filter, projects) {
        var projects = $filter('filter')(projects, {id: $routeParams.projectId}, true);
        if (projects.length)
            $scope.project = projects[0];
        else
            $scope.$parent.go('/404');
    }])
;