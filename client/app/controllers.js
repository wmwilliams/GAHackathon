angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
	$scope.people = AllData;
	console.log($scope)
}])

