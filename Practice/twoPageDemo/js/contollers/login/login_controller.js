testApp.controller('login', function($scope, $http, factory_serverURLs,service_servicePath ) {
	$scope.loginUser = function() {
		$scope.loginUserCallBack = function(data, status) {
			console.log(data);
			window.location.hash = "#/game_list";
		};
		if ($scope.userlogin && $scope.userlogin.emailAddress && $scope.userlogin.password) {
			var postData = {
				email : $scope.userlogin.emailAddress,
				password : $scope.userlogin.password
			};

			$http.post('http://180.179.212.93/javalation/api/requestapi/authUser', postData).success($scope.loginUserCallBack);
		} else {
			alert("please enter valid email address or password");
		}

	};

});
