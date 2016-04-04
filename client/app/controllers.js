angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
  $scope.data = {};

  AllData.get(
    function success(data, stuff){

      var jsonData = angular.fromJson(data);
      console.log(jsonData);

      var randPerson = Math.floor((Math.random() * data.people.length) + 1);
      $scope.person = data.people[randPerson];

      var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
      $scope.quote = data.quotes[randQuote];

      var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
      $scope.image = data.imageLinks[randImage];
    },
    function error(data){
      console.log(data)
    });
  $scope.clickMe = function () {
      AllData.get(
        function success(data, stuff){

      console.log(JSON.parse(data));

          var randPerson = Math.floor((Math.random() * data.people.length) + 1);
          $scope.person = data.people[randPerson];

          var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
          $scope.quote = data.quotes[randQuote];

          var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
          $scope.image = data.imageLinks[randImage];

      },
      function error(data){
        console.log(data)
      })
    }
}]);
