/*
*
*	Process Footer Controller
*/
softnetApp.app
    .controller("FooterController", ["$scope", 'ModalService', '$log',
        function ($scope, ModalService, $log) {
       
            var vm = this;          
            
            $log.log('FooterController');

            // Press Feedback link 
            vm.showFeedbackModal = function() {
            
                ModalService.showModal({

                    templateUrl: "templates/popup-pages/feedback/feedback-modal.html",
                    controller: "CloseController"

                })
                .then(function(modal) {         
                    modal.element.modal();
                    modal.close.then(function(result) {
                        debugger;
                        
                    });
                }); 

            };  // end showFeedbackModal       


            // Press showReportAbuseModal
            vm.showReportAbuseModal = function() {
            
                ModalService.showModal({

                    templateUrl: "templates/popup-pages/report-abuse/report-abuse-modal.html",
                    controller: "CloseController"

                })
                .then(function(modal) {         
                    modal.element.modal();
                    modal.close.then(function(result) {});
                }); 

            };  // end showReportAbuseModal
            


            // Press Suggestions link 
            vm.showSuggestionsModal = function() {
            
                ModalService.showModal({

                    templateUrl: "templates/popup-pages/suggestions/suggestions-modal.html",
                    controller: "CloseController"

                })
                .then(function(modal) {         
                    modal.element.modal();
                    modal.close.then(function(result) {});
                }); 

            };  // end showSuggestionsModal    


            // Press Contact Support link 
            vm.showContactSupportModal = function() {
            
                ModalService.showModal({

                    templateUrl: "templates/popup-pages/contact-support/contact-support-modal.html",
                    controller: "CloseController"

                })
                .then(function(modal) {         
                    modal.element.modal();
                    modal.close.then(function(result) {});
                }); 

            };  // end showContactSupportModal

    }]);