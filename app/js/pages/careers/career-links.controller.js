softnetApp.app
    .controller("CareerLinksCtrl", ["$scope", "$log", "$element", "utilService", 'careersService', 'ModalService', 
        function ($scope, $log, $element, utilService, careersService, ModalService) {
        var vm = this;
        
        $log.log('CareerLinks Controller');
        

        // Press Applicants link
        vm.showApplicantsModal = function() {
        
            ModalService.showModal({

                templateUrl: "templates/app/careers/applicants/applicants-modal.html",
                controller: "CloseController",
                // appendElement: $element,
                scope: $scope

            })
            .then(function(modal) {         
                modal.element.modal();

                modal.close.then(function(result) {

                });
            }); 

        };  // end showApplicantsModal

        // Press Events link
        vm.showEventsModal = function() {
        
            ModalService.showModal({

                templateUrl: "templates/app/careers/events/events-modal.html",
                controller: "CloseController"

            })
            .then(function(modal) {         
                modal.element.modal();

                modal.close.then(function(result) {

                    // press Yes
                    if (result == true) {                
                        //careersService.editJob();
                    } 
                });
            }); 

        };  // end showEventsModal


        // Press Rating link
        vm.showRatingModal = function() {
        
            ModalService.showModal({

                templateUrl: "templates/app/careers/rating/rating-modal.html",
                controller: "CloseController"

            })
            .then(function(modal) {         
                modal.element.modal();

                modal.close.then(function(result) {

                    // press Yes
                    if (result == true) {                
                        //careersService.editJob();
                    } 
                });
            }); 

        };  // end showRatingModal

        // Press Status link
        vm.showStatusModal = function() {
        
            ModalService.showModal({

                templateUrl: "templates/app/careers/status/status-modal.html",
                controller: "CloseController"

            })
            .then(function(modal) {         
                modal.element.modal();

                modal.close.then(function(result) {

                    // press Yes
                    if (result == true) {                
                        //careersService.editJob();
                    } 
                });
            }); 

        };  // end showStatusModal
        
    }]);

	