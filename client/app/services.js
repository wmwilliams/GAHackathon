var appServices = angular.module('DataServices', ['ngResource']);

appServices.factory('AllData', ['$resource', function($resource) {
	return $resource('http://hackedquotes.herokuapp.com/api/getall');
}]);

