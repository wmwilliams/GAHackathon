angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
	$scope.people = AllData.get();
	console.log($scope)
}])

