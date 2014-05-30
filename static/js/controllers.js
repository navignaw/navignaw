'use strict';

/* Controllers */

angular.module('navignaw.controllers', [])
    .controller('HomeCtrl', ['$scope', '$location', function($scope, $location) {
        var carousel = $("#outer-carousel");

        // If switching to new page, slide carousel
        var checkPath = function() {
            var path = $location.path();

            if (path.substring(0, 9) === '/projects' || path === '/404')
                carousel.carousel('next');
            else
                carousel.carousel('prev');
        }

        $scope.go = function(path) {
            $location.path(path);
            checkPath(path);
        };

        $scope.$on('$locationChangeStart', checkPath);
        checkPath();
    }])

    .controller('ProjectsCtrl', ['$scope', '$filter', 'projects', function($scope, $filter, projects) {
        $scope.projects = projects;
        $scope.defaultBanner = "static/assets/banner.png";
    }])

    .controller('ProjectCtrl', ['$scope', '$routeParams', '$filter', '$sce', 'projects', function($scope, $routeParams, $filter, $sce, projects) {
        var projects = $filter('filter')(projects, {id: $routeParams.projectId}, true);
        if (!projects.length) {
            $scope.$parent.go('/404');
            return;
        }

        $scope.project = projects[0];
        $scope.project.description = $sce.trustAsHtml($scope.project.description);

        if ($scope.project.embed) {
            var embedHtml = "<embed width='" + $scope.project.embed.width + "' height='" + $scope.project.embed.height + "' src='" + $scope.project.embed.src + "'></embed>";
            $scope.project.embed.html = $sce.trustAsHtml(embedHtml);
        }
        
        var modal = $("#screenshot-modal");
        var carousel = $("#screenshot-carousel");

        $scope.activeCarousel = 0;

        $scope.openCarousel = function(index) {
            $scope.activeCarousel = index;
            carousel.carousel(index);
            console.log(carousel);
        }

        carousel.on('slide.bs.carousel', function() {
            console.log("whee");
            console.log(event);
            console.log(attr);
        });

    }])
;