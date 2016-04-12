var app = angular.module('HackathonApp', ['ngRoute', 'HackathonCtrls']);

app.directive('ngError', ['$parse', function($parse){
    return {
        restrict: 'A',
        compile: function($element, attr) {
            var fn = $parse(attr['ngError']);

            return function(scope, element, attr) {
                element.on('error', function(event) {
                    scope.$apply(function() {
                        fn(scope, {$event:event});
                    });
                });
            };
        }
    };
}]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'app/views/random.html',
        controller: 'HomeCtrl'
    })
    .when ('/show', {
        templateUrl: 'app/views/show.html'
    }).otherwise ({
        templateUrl: 'views/404.html'
    });

//$locationProvider.html5Mode(true);
}]);
