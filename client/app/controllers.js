angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
  $scope.data = {};

  AllData.get(
    function success(data, stuff){

      var jsonData = angular.fromJson(data);
      console.log(jsonData);
      $scope.data.people = jsonData.people;
      $scope.data.quotes = jsonData.quotes;
      $scope.data.imageLinks = jsonData.imageLinks;

      var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
      $scope.person = $scope.data.people[randPerson];

      var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
      $scope.image = $scope.data.imageLinks[randImage];

      var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
      $scope.quote = $scope.data.quotes[randQuote];
    },
    function error(data){
      console.log(data)
    }
  );

  $scope.clickMe = function () {
      var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
      $scope.person = $scope.data.people[randPerson];

      var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
      $scope.image = $scope.data.imageLinks[randImage];

      var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
      $scope.quote = $scope.data.quotes[randQuote];
  };
}]);
