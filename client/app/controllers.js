angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {


	AllData.get(
    function success(data, stuff){

      var randPerson = Math.floor((Math.random() * data.people.length) + 1);
      $scope.person = data.people[randPerson];

      var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
      $scope.quote = data.quotes[randQuote];
      console.log(data.quotes.length);

      var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
      $scope.image = data.imageLinks[randImage];
    },
    function error(data){
      console.log(data)
    });
  $scope.clickMe = function () {
      console.log('click');
      AllData.get(
      function success(data, stuff){

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
