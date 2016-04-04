angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
  $scope.data = {
    people: {},
    quotes: {},
    imageLinks: {}
  };

  AllData.get(
    function success(data, stuff){

      var jsonData = angular.fromJson(data);
      $scope.data.people = jsonData.people;
      $scope.data.quotes = jsonData.quotes;
      $scope.data.imageLinks = jsonData.imageLinks;

      if(!$scope.data.people.length)  {
        AllData.get(
          function success(data, stuff){
            var jsonData = angular.fromJson(data);
            $scope.data.people = jsonData.people;
          },
          function error(data) {
            console.log(data);
          }
        )
      } else if(!$scope.data.quotes.length) {
        AllData.get(
          function success(data, stuff){
            var jsonData = angular.fromJson(data);
            $scope.data.quotes = jsonData.quotes;
          },
          function error(data) {
            console.log(data);
          }
        )
      } else if(!$scope.data.imageLinks.length) {
        AllData.get(
          function success(data, stuff){
            var jsonData = angular.fromJson(data);
            $scope.data.imageLinks = jsonData.imageLinks;
          },
          function error(data) {
            console.log(data);
          }
        )
      } else if ($scope.data.imageLinks && $scope.data.people && $scope.data.quotes){
        var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
        $scope.person = $scope.data.people[randPerson];

        var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
        $scope.quote = $scope.data.quotes[randQuote];

        var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
        $scope.image = $scope.data.imageLinks[randImage];
      }
    },
    function error(data) {
      console.log(data);
    }
  )

  $scope.clickMe = function () {
      var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
      $scope.person = $scope.data.people[randPerson];

      var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
      $scope.quote = $scope.data.quotes[randQuote];

      var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
      $scope.image = $scope.data.imageLinks[randImage];
  };
}]);
