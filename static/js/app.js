'use strict';

// Declare app level module which depends on filters, and services
angular.module('navignaw',
    ['ui.bootstrap', 'navignaw.routes', 'navignaw.projects', 'navignaw.filters', 'navignaw.services', 'navignaw.directives', 'navignaw.controllers']
);
	// Load services on startup!
	//.run(function(services) {});