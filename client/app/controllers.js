angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {


	AllData.get(
    function success(data, stuff){

      var randPerson = Math.floor((Math.random() * data.people.length) + 1);
      $scope.person = data.people[randPerson];

      var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
      $scope.quote = data.quotes[randQuote];
      console.log($scope.quote);

      var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
      $scope.image = data.imageLinks[randImage];

    },
    function error(data){
      console.log(data)
    });
  $scope.clickMe = function () {
      AllData.get(
    function success(data, stuff){

      // var randPerson = Math.floor((Math.random() * data.people.length) + 1);
      // $scope.person = data.people[randPerson];
      // console.log($scope.person);

      // var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
      // $scope.quote = data.quotes[randQuote];
      // console.log($scope.quote);

      var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
      $scope.image = data.imageLinks[randImage];
      console.log($scope.image);

    },
      function error(data){
        console.log(data)
      })
    }
}]);
