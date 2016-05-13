/*
*	Auth service
*/

softnetApp.auth

.factory("authService", ["$http", "$log", "localStorage", "jwtHelper", "Config", "SpringDataRestAdapter", function($http, $log, localStorage, jwtHelper, Config, SpringDataRestAdapter) {

	var auth = {
		token: null
	};

	return {
		login: function(data) {

			var httpPromise = $http.post(Config.app.url + '/login', data, {
				headers: { 
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				transformRequest: encodeURIObject
			});

			return SpringDataRestAdapter.process(httpPromise);
		},

		register: function(data){
			var httpPromise = $http.post(Config.app.url + '/register', data);

			return SpringDataRestAdapter.process(httpPromise);
		},

		logout: function() {
			var httpPromise = $http.post(Config.app.url + '/logout');

			return SpringDataRestAdapter.process(httpPromise);
		},

		sendActivationLink: function(email) {
			var httpPromise = $http.post(Config.app.url + '/sendActivationLink/' + email);

			return SpringDataRestAdapter.process(httpPromise);
		},

		activateAccount: function(options){

			var httpPromise = $http.post(Config.app.url + '/activateAccount/' + options.email + '/' + options.activationId);

			return SpringDataRestAdapter.process(httpPromise);
		},

		// Reset password
		resetPassword: function(email, data) {
			data = data || {};
			
			var httpPromise = $http.post(Config.app.url + '/resetPassword/' + email, data);
			
			return SpringDataRestAdapter.process(httpPromise);
		},

		// Checks if user is autenticated
		isAuthenticated: function() {

			// get token 
			auth.token = this.getToken();

			// check if token exists
			if (!auth.token) {
				return false;
			}

			// check if token expires, remove token
			if (jwtHelper.isTokenExpired(auth.token)) {
				this.removeToken();
				return false;
			}

			return true;
		},

		// Set authentication token
		setToken: function(token) {

			// Set token in local storage
			localStorage.set('token', token);

			auth.token = token;
		},

		// Remove user token 
		removeToken: function() {
			// Remove token from local storage
			localStorage.remove('token');

			auth.token = null;
		},

		// Complete remove
		remove: function() {
			this.removeToken();
		},

		getToken: function() {
			return auth.token || localStorage.get('token');
		},

		get: function() {
			return auth;
		}
	}
}]);