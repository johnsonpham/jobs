softnetApp.auth

.controller("LoginModalCtrl", ["$scope", "$log", "close", "result", "authService", function ($scope, $log, close, result, authService) {

	var vm = this; 


	vm.loading = false;
	
	// set success message setings
	vm.message = result.data;

	//Close Modal
	vm.closeModal = function(result) {
	    close(result, 500); // close, but give 200ms for bootstrap to animate
	};

	$log.log("LoginModalCtrl");

}]);