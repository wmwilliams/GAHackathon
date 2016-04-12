(function(angular){

    angular.module('ngError', ['ng'])

    .directive('ngError', ['$parse', function($parse){

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


})(angular);

//NOT MY CODE this is the ngError directive i found here https://github.com/andrefarzat/ng-error and this was the easiert wat to include it for some reason.