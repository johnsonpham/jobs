softnetApp.app
        .directive('careersToolbar', ["$log", function ($log) {
            return {
                restrict: 'C',
                templateUrl: 'templates/app/careers/toolbar/toolbar.html',
                controller: 'CareersToolbarCtrl',
                controllerAs: 'careersToolbar',
                link: function ($scope, $element) {
                }
            }
        }]);