'use strict';

/* Controllers */

angular.module('navignaw.controllers', [])
    .controller('HomeCtrl', ['$scope', '$location', 'Analytics', function($scope, $location, Analytics) {
        var aboutPopover = $('#about');
        var carousel = $('#outer-carousel');

        aboutPopover.fadeTo(1000, 1);

        // If switching to new page, slide carousel
        var checkPath = function() {
            var path = $location.path();

            if (path.substring(0, 9) === '/projects' || path === '/404')
                carousel.carousel('next');
            else
                carousel.carousel('prev');
        }

        // Location and routing logic
        $scope.go = function(path) {
            $location.path(path);
            checkPath(path);
        };

        $scope.$on('$locationChangeStart', checkPath);
        checkPath();

        // Analytics code
        $scope.analytics = Analytics.events;
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

        $scope.slideTo = function(index) {
            $scope.project.screenshots[index].active = true;
            // TODO: breaks prev/next arrows! FIX
        };

        var setFocusToEmbed = function() {
            $('.embedded-content > embed').focus();
        };
        $scope.focus = function() {
            setTimeout(setFocusToEmbed, 500);
        };

    }])
;