softnetApp.auth

.controller("LoginCtrl", ["$scope", "$log", "$state", "$stateParams", "authService", "Config", "ModalService", "helperService", function ($scope, $log, $state, $stateParams, authService, Config, ModalService, helperService) {

	var vm = this;

	vm.loading = false;
	vm.error = {
		show: false,
		message: ''
	};

	vm.data = {};

	vm.login = function(){

		if ($scope.loginForm.$invalid) {
			return false;
		}
		
		vm.cleanError();
		vm.loading = true;

		authService.login(vm.data)

		.then(function(result){

			vm.loading = false;

			// set token and redirect user to default state
			authService.setToken(result.token);
			
			$state.go(Config.app.defaultState);
		})

		.catch(function(error) {
			// log errors
			$log.log(error.data);

			// set error and show it
			vm.error.show = true
			vm.error.message = error.data.errorMessage
			
			vm.loading = false;
		});

	}

	vm.cleanError = function() {
		vm.error.show = false;
		vm.error.message = '';
	}


	var result = helperService.getTmpData();

	// Login modal
	if (
		!angular.isUndefined($stateParams.activate) &&
		($stateParams.activate === "success" || $stateParams.activate === "failed") &&
		Object.keys(result).length
	) {
		// Just provide a template url, a controller and call 'showModal'.
		ModalService.showModal({
			templateUrl: 'templates/auth/login/login-modal.html',
			controller: 'LoginModalCtrl',
			controllerAs: 'loginModal',
			inputs: {
				result: helperService.getTmpData()
			}
		})
		.then(function(modal) {
			modal.element.modal();
			modal.close.then(function(result) {
				$('.modal-backdrop').remove();
			});
		});
	}

}]);