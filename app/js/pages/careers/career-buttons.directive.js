softnetApp.app
        .directive('careerButtons', ["$log", function ($log) {
            return {
                restrict: 'C',
                templateUrl: 'templates/app/careers/buttons/career-buttons.html',
                controller: 'CareerButtonsCtrl',
                controllerAs: 'careerButton',
                link: function ($scope, $element) {
                }
            }
        }]);