var appServices = angular.module('DataServices', ['ngResource']);

appServices.factory('AllData', ['$resource', function($resource) {
	return $resource('https://hackedquotes.herokuapp.com/api/getall');
}]);

