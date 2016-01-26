var app = angular.module('HackathonApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when(
				'/', {
					templateUrl: 'app/views/random.html'
					//controller: 'HomeCtrl'
				}
			)
			.when (
				'/show', {
					templateUrl: 'app/views/show.html'
				}
			).otherwise ({
				templateUrl: 'app/views/404.html'
			});

			//$locationProvider.html5Mode(true);
}]);
