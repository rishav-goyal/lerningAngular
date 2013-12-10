testApp.controller('testControler2', function($scope, $http) {
	$scope.myColleagues = [];

	$scope.colleagueSuccessCallBack = function(data, status) {
		$scope.myColleagues = data;
	}

	$scope.fetch = function() {
		$http.get('data/EmployeeData.json').success($scope.colleagueSuccessCallBack);
	};

	$scope.fetch();

});
