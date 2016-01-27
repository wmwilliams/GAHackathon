angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {

	$scope.data = AllData.get(function success(data){
    $scope.people = data.people;
    $scope.images = data.imageLinks;
  }, function error(data){
    //console.log(data);
  });
  console.log($scope.images);
}]);

