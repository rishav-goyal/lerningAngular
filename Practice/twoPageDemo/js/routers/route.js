testApp.config(function($routeProvider) {
	$routeProvider.when('/view1', {
		controller : 'friendsName',
		templateUrl : 'partials/view1.html'
	}).when('/view2', {
		controller : 'testControler2',
		templateUrl : 'partials/view2.html'
	}).when('/login', {
		controller : 'login',
		templateUrl : 'partials/login.html'
	}).when('/game_list', {
		controller : 'gameList',
		templateUrl : 'partials/game_list.html'
	}).otherwise({
		redirectTo : '/view2'
	});
});
