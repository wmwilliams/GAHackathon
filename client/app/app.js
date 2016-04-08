var app = angular.module('HackathonApp', ['ngRoute', 'HackathonCtrls', 'ng-Error']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
$routeProvider
.when(
'/', {
templateUrl: 'app/views/random.html',
controller: 'HomeCtrl'
}
)
.when (
'/show', {
templateUrl: 'app/views/show.html'
}
).otherwise ({
templateUrl: 'views/404.html'
});

//$locationProvider.html5Mode(true);
}]);
