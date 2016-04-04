angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {


	AllData.get(
    function success(data, stuff){

      var randPerson = Math.floor((Math.random() * data.people.length) + 1);
      $scope.person = data.people[randPerson];

      var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
      $scope.image = data.imageLinks[randImage];

      var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
      $scope.quote = data.quotes[randQuote];
    },
    function error(data){
      console.log('alldata get failure');
      console.log(data)
    });
  $scope.clickMe = function () {
      console.log('click');
      AllData.get(
      function success(data, stuff){

        var randPerson = Math.floor((Math.random() * data.people.length) + 1);
        $scope.person = data.people[randPerson];

        var randImage = Math.floor((Math.random() * data.imageLinks.length) + 1);
        $scope.image = data.imageLinks[randImage];

        console.log(data.quotes.length);
        var randQuote = Math.floor((Math.random() * data.quotes.length) + 1);
        $scope.quote = data.quotes[randQuote];
      },
      function error(data){
        console.log(data)
      })
    }
}]);
