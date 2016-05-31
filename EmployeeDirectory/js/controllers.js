var employeeControllers = angular.module('employeeControllers', ['ngAnimate']);

employeeControllers.controller('ListController', ['$scope', '$http', function($scope, $http){

	$http.get('js/data.json').success(function(data){
		$scope.employee = data;
		$scope.employeeOrder = 'name';
	});
}]);

employeeControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){

	$http.get('js/data.json').success(function(data){
		$scope.employee = data;
		$scope.whichItem = $routeParams.itemId;

		if($routeParams.itemId > 0){
			$scope.prevItem = Number($routeParams.itemId)-1;
		}else{
			$scope.prevItem = $scope.employee.length-1;
		}

		if($routeParams.itemId < $scope.employee.length-1 ){
			$scope.nextItem = Number($routeParams.itemId)+1;
		}else{
			$scope.nextItem = 0;
		}
	});
}]); 