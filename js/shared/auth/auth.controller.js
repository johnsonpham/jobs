softnetApp.auth

.controller("AuthCtrl", ["$log", "ModalService", function ($log, ModalService) {

	var vm = this;

	// set modals close times
	var modalTime = {};
	modalTime.close = 500;
	modalTime.autoClose = 5000;

	/********************************************
	*				SHOW MODAL
	*********************************************/
	//open a sign up modal
	vm.openSignupModal = function () {

		// Just provide a template url, a controller and call 'showModal'.
		ModalService.showModal({
			templateUrl: 'templates/auth/signup-modal/signup-modal.html',
			controller: 'SignupModalCtrl',
			controllerAs: 'signupModal',
			inputs: {
				modalTime: modalTime
			}
		})
		.then(function(modal) {
			
			modal.close.then(function(result) {
				$log.log(result);
				$('.modal-backdrop').remove();
			});
		});
	}


	//open an activation modal
	vm.openActivationModal = function () {
		
		// Just provide a template url, a controller and call 'showModal'.
		ModalService.showModal({
			templateUrl: 'templates/auth/send-activation-link-modal/send-activation-link-modal.html',
			controller: 'sendActivationLinkModalCtrl',
			controllerAs: 'sendActivationLinkModal',
			inputs: {
				modalTime: modalTime
			}
		})
		.then(function(modal) {
			
			modal.close.then(function(result) {
				$log.log(result);
				$('.modal-backdrop').remove();
			});
		});
	}


	//open a forfot pasword modal
	vm.openForgotPassModal = function () {

		// Just provide a template url, a controller and call 'showModal'.
		ModalService.showModal({
			templateUrl: 'templates/auth/forgot-pasword-modal/forgot-pasword-modal.html',
			controller: 'ForgotPassModalCtrl',
			controllerAs: 'forgotPassModal',
			inputs: {
				modalTime: modalTime
			}
		})
		.then(function(modal) {
			
			modal.close.then(function(result) {
				$log.log(result);
				$('.modal-backdrop').remove();
			});
		});
	}

}]);