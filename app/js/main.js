softnetApp.main

.config(["$httpProvider", "jwtInterceptorProvider", function($httpProvider, jwtInterceptorProvider) {


	// set default content types application/x-www-form-urlencoded
	/*$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';


	$httpProvider.defaults.transformRequest = [function(data){
		if (
			angular.isObject(data) && 
			String(data) !== '[object File]'
		) {
			return encodeURIObject(data);
		}
		else {
			return data;
		}
	}];*/

	// JWT interceptor will take care of sending the JWT in every request.
	jwtInterceptorProvider.tokenGetter = function($cookies, $log, authService) {
		
		return authService.getToken();
	};

	$httpProvider.interceptors.push('jwtInterceptor');

}]);

softnetApp.main

.controller("MainCtrl", ["$log", function ($log) {

	var vm = this; 

}]);

softnetApp.main

.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise(function($injector) {
		var $state = $injector.get("$state");
		$state.go("app.home");
	});	
}])

.run(["$rootScope", "$log", "$state", "authService", "Config", function ($rootScope, $log, $state, authService, Config) {
	$rootScope.uiState = {};

	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){


		// If the route requires login, and user is not logged in
		// Redirect to login
		if(
			angular.isDefined(toState.data) &&
			toState.data.requiresLogin &&
			!authService.isAuthenticated()
		) {
			event.preventDefault();

			$state.go("auth.login", {
				redirectState: toState.name
			});
		}


		// If  the route is disabled after login, and user is logged in
		// Redirect to app default state
		if (
			toState.name != Config.app.defaultState &&
			toState.name != fromState.name &&
			angular.isDefined(toState.data) &&
			toState.data.disabledAfterLogin &&
			authService.isAuthenticated()
		) {
			event.preventDefault();

			$state.go(Config.app.defaultState);
		}
  	});

}]);