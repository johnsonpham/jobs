softnetApp.auth

.controller("sendActivationLinkModalCtrl", ["$scope", "$log", "close", "modalTime", "authService", function ($scope, $log, close, modalTime, authService) {

	var vm = this; 

	vm.loading = false;

	// set success message setings
	vm.success = {};
	vm.success.show = false;
	vm.success.message = "";

	// set error message setings
	vm.error = {};
	vm.error.show = false;
	vm.error.message = "";	

	vm.requestActiveCode = function(){

		if ($scope.activationForm.$invalid) {
			return false;
		}

		// reset error message
		vm.error.show = false;
		vm.error.message = "";	

		// set loading state true
		vm.loading = true;

		authService.sendActivationLink(vm.email)

		.then(function(result){
			vm.loading = false;

			vm.success.show = true;
			vm.success.message = result.data;

			//close(result, modalTime.autoClose);
		})

		.catch(function(error) {
			vm.loading = false;

			vm.error.show = true;
			vm.error.message = error.data.errorMessage;
		});

	}

	//Close Modal
	vm.closeModal = function(result) {
	    close(result, modalTime.close); // close, but give 200ms for bootstrap to animate
	};

	$log.log("sendActivationLinkModalCtrl");

}]);