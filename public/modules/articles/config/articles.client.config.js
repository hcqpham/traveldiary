'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Journals', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'All Journals', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Journal', 'articles/create');
	}
]);
