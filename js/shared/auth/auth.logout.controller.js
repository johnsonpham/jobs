softnetApp.auth

.controller("LogoutCtrl", ["$log", "$state", "authService", function ($log, $state, authService) {

	var vm = this; 

	authService.logout()

	.then(function(){

		// remove token
		authService.remove();

		// redirect state to login page
		$state.go('auth.login');
	})

	.catch(function(error){
		$log.log(error);
	});
}]);