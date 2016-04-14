angular.module('HackathonCtrls', ['DataServices'])
.controller('HomeCtrl', ['$scope', 'AllData', function($scope, AllData) {
  $scope.data = {};
  $scope.image = {
    img_link: 'http://i.imgur.com/HFxrKvG.jpg'
  };
  $scope.quote = {
    quote: "Welcome to HackedQuotes! Just click the picture to start randomly generating your funny quotes. Enjoy!"
  };
  $scope.person = {
    full_name: "Website creators"
  }

  AllData.get(
    function success(data, stuff){
      var jsonData = angular.fromJson(data);
      $scope.data.people = jsonData.people;
      $scope.data.quotes = jsonData.quotes;
      $scope.data.imageLinks = jsonData.imageLinks;
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

  // $scope.imageRefresh = function() {
  $scope.imageRefresh = function() {
    console.log('imageRefresh route function');
    window.location.href = 'hackedquotes.herokuapp.com/api/picErase'
    // window.location.href = 'localhost:3000/api/picErase';
  }

}]);
