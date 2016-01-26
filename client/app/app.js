var app = angular.module('HackathonApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when(
				'/', {
					templateUrl: '/views/random.html' 
				}
			)
			.when (
				'/show', {
					templateUrl: '/views/show.html'
				}
			).otherwise ({
				templateUrl: '/views/404.html'
			});

			$locationProvider.html5Mode(true);
}]);
