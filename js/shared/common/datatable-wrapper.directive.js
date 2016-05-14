
//This wrapper is only used to compile your custom element
softnetApp.common

.directive('datatableWrapper', ["$timeout", "$compile", function ($timeout, $compile) {
    return {
        restrict: 'E',
        transclude: true,
        template: '<ng-transclude></ng-transclude>',
        scope: {
            elementSelector: '@'
        },
        link: link
    };

    function link(scope, element) {
        // Using $timeout service as a "hack" to trigger the callback function once everything is rendered
        $timeout(function () {
            // Compiling so that angular knows the button has a directive
            $compile(element.find(scope.elementSelector))(scope);
        }, 200, false);
    }
}]);