testApp.controller('gameList',function($scope, $http, factory_serverURLs, service_servicePath) {
	$scope.gamesList = [];
	$scope.gameListSuccessCallBack = function(data, status){
		console.log(JSON.stringify(data));
		if(status == 200 && !data.error){
			$scope.gamesList = data.list;
		}else{
			alert("Somthing is wrong going on, please try later");
		}
	};
	$scope.fetch = function(){
		//var url = factory_serverURLs.serverName('local1')+service_servicePath.serviceName('gameList');
		
		$http.get(factory_serverURLs.serverName('local1')+service_servicePath.serviceName('gameList')).success($scope.gameListSuccessCallBack);
	};
	$scope.fetch();
});
