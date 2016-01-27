var appServices = angular.module('DataServices', ['ngResource']);

appServices.factory('AllData', ['$resource', function($resource) {
	return $resource('http://localhost:3000//api/getAll')
}])