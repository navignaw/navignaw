'use strict';

/* Services */
angular.module('navignaw.services', [])

    .service('Analytics', ['$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    	var track = function() {
            $window.ga('send', 'pageview', {page: $location.path()});
        };

        $rootScope.$on('$routeChangeSuccess', track);
    }])
;