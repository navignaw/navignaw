'use strict';

/* Services */
angular.module('navignaw.services', [])

    .service('Analytics', ['$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    	// Track pages via change in url
    	var track = function() {
            $window.ga('send', 'pageview', {page: $location.path()});
        };

        $rootScope.$on('$routeChangeSuccess', track);

        // Functions for event tracking
        this.events = {
        	link: function(label) {
        		$window.ga('send', 'event', 'outbound', 'click', label);
        	}
        }
    }])
;