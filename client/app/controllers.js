angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
  $scope.data = {
  };

  AllData.get(
    function success(data, stuff){

      var jsonData = angular.fromJson(data);
      $scope.data.people = jsonData.people;
      $scope.data.quotes = jsonData.quotes;
      $scope.data.imageLinks = jsonData.imageLinks;

      var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
      $scope.person = $scope.data.people[randPerson];

      var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
      $scope.quote = $scope.data.quotes[randQuote];

      var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
      $scope.image = $scope.data.imageLinks[randImage];
    },
    function error(data){
      console.log(data)
    });
  $scope.clickMe = function () {
      if($scope.data.people.length !> 10 || $scope.data.quotes !> 10 || $scope.data.imageLinks !> 10) {
        AllData.get(
          function success(data, stuff){

          var jsonData = angular.fromJson(data);
          $scope.data.people = jsonData.people;
          $scope.data.quotes = jsonData.quotes;
          $scope.data.imageLinks = jsonData.imageLinks;
          }
        )
      } else {

      var randPerson = Math.floor((Math.random() * $scope.data.people.length) + 1);
      $scope.person = $scope.data.people[randPerson];

      var randQuote = Math.floor((Math.random() * $scope.data.quotes.length) + 1);
      $scope.quote = $scope.data.quotes[randQuote];

      var randImage = Math.floor((Math.random() * $scope.data.imageLinks.length) + 1);
      $scope.image = $scope.data.imageLinks[randImage];
    }
  }

}]);
