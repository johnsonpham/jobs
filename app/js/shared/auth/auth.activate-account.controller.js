softnetApp.auth

.controller("activateAccountCtrl", ["$log", "$state", "$stateParams", "authService", "helperService", function ($log, $state, $stateParams, authService, helperService) {

	var vm = this; 

	authService.activateAccount({
		email: $stateParams.email,
		activationId: $stateParams.activationId
	})

	.then(function(response){

		helperService.setTmpData({
			data: response.data
		});

		// redirect state to login page
		$state.go('auth.login', {
			activate: "success"
		});
	})

	.catch(function(error){

		helperService.setTmpData({
			data: error.data.errorMessage
		});

		// redirect state to login page
		$state.go('auth.login', {
			activate: "failed"
		});
	});
}]);