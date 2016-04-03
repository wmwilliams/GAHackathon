var appServices = angular.module('DataServices', ['ngResource']);

appServices.factory('AllData', ['$resource', function($resource) {
    //run from mongolabs
    return $resource('http://hackedquotes.herokuapp.com/api/getall');
    //run locally
    // return $resource('http://localhost:3000/api/getall');
}]);

