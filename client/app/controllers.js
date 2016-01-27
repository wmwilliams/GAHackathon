angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {

	$scope.data = AllData.get();
	console.log($scope.data)
}]);

