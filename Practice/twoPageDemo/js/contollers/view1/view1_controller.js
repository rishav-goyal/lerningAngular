testApp.controller('friendsName', function($scope, $http) {
	$scope.names = [];

	$scope.friendsSuccessCallBack = function(data, status) {
		$scope.names = data;
	};

	$scope.fetch = function() {
		$http.get('data/friendsData.json').success($scope.friendsSuccessCallBack);
	};

	$scope.addNewFriend = function() {
		
		//alert("name: "+$scope.newFriends.name+" City:"+$scope.newFriends.city);
		
		$scope.names.push({
			name : $scope.newFriends.name,
			city : $scope.newFriends.city
		});
	};

	$scope.fetch();
});
