softnetApp.app
        .directive('addFormStatus', function () {

           return {
                restrict: 'E',
                replace: false,              
                templateUrl: 'templates/app/careers/status/status-templates/status-form/status-form.html',
                

                link: function($scope, element, attrs, ngModelCtrl) {

                   
                }
            };
        });