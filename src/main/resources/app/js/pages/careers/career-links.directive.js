softnetApp.app
        .directive('careerLinks', ["$log", function ($log) {
            return {
                restrict: 'C',
                templateUrl: 'templates/app/careers/links/career-links.html',
                controller: 'CareerLinksCtrl',
                controllerAs: 'careerLink',
                link: function ($scope, $element) {
                }
            }
        }]);