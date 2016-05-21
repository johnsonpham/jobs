/*
*
*	Contact Us Controller
*/
softnetApp.app
	.controller('ContactusCtrl', ['$scope', '$log', 'ModalService', function($scope, $log, ModalService){
		
		$log.log('ContactusCtrl');
		var vm = this;

		vm.showAlert = function() {
			ModalService.showModal({
                templateUrl: "templates/popup-pages/alert/alert-modal.html",
                controller: "AlertController",  
                controllerAs: "alertCtrl",              
                inputs : {
                	alert: "You are contactted successful!"
                }
            })
            .then(function(modal) {         
                modal.element.modal();
                
                var zIndex = 1040 + (10 * $('.modal:visible').length);
			    modal.element.css('z-index', zIndex+1);
			    var $backdrop = $(modal.element.data('bs.modal')._backdrop);
			    setTimeout(function() {
			        $backdrop.css('z-index', zIndex).addClass('modal-stack');
			    }, 0);

				modal.element.on('hidden.bs.modal', function () {
				    $('.modal:visible').length && $(document.body).addClass('modal-open');
				    modal.element.off('hidden.bs.modal');
				});

                modal.close.then(function(result) {});
            }); 
		};
		
		vm.submit = function(form) {
			// Trigger validation flag.
		  	vm.submitted = true;

		  	// If form is invalid, return and let AngularJS show validation errors.
		 	if (form.$invalid) {		 		
		    	return;
		  	} 
		  	if (form.$submitted) { 
		  		vm.showAlert();		  		
		  	}
		};



	}]);