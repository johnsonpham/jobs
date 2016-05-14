softnetApp.auth

.config(["$stateProvider", function($stateProvider) {

	$stateProvider

	// auth state
	.state('auth', {
		abstract : true,
		templateProvider: ["$templateCache", function($templateCache) {  
			return $templateCache.get('templates/auth/auth.html'); 
		}],
		controller: "AuthCtrl as auth"
	})

	// login state
	.state('auth.login', {
		url: "/login?activate",
		templateProvider: ["$templateCache", function($templateCache) {  
			return $templateCache.get('templates/auth/login/login.html'); 
		}],
		controller: "LoginCtrl as login",
		data: {
			disabledAfterLogin: true
		}
	})

	// activate state
	.state('auth.activate', {
		url: "/activate/:email/:activationId",
		controller: "activateAccountCtrl as activate",
		data: {
			disabledAfterLogin: true
		}
	})

	.state('auth.logout', {
		url: "/logout",
		controller: "LogoutCtrl as logout",
		data: {}
	});

}]);