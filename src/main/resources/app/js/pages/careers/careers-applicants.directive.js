softnetApp.app
        .directive('applicantsFormStatus', function () {

           return {
                restrict: 'E',
                replace: false,              
                templateUrl: 'templates/app/careers/applicants/applicants-templates/applicants-add-status/applicants-add-status.html',
                

                link: function($scope, element, attrs, ngModelCtrl) {

                   
                }
            };
        });