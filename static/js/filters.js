'use strict';

/* Filters */
angular.module('navignaw.filters', [])

	.filter('split', ['$rootScope', function($rootScope) {
		/**
	     * splits an array into groups of the given size
	     * e.g. ([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
	     */
		return function(items, groupSize) {
			if (!angular.isArray(items) && !angular.isString(items)) return items;
			if (!groupSize) groupSize = 1;
			
			var array = [];
			for (var i = 0; i < items.length; i++) {
				var chunkIndex = parseInt(i / groupSize, 10);
				if (i % groupSize === 0)
					array[chunkIndex] = [];
				array[chunkIndex].push(items[i]);
			}

			if (angular.equals($rootScope.arrayinSliceOf, array))
				return $rootScope.arrayinSliceOf;
			else
				$rootScope.arrayinSliceOf = array;

			return array;
		};
	}])

	.filter('trustAsResourceUrl', ['$sce', function($sce) {
	    return function(val) {
	        return $sce.trustAsResourceUrl(val);
	    };
	}])
;