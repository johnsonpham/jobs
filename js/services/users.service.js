/*
*	Users service
*/

softnetApp.common

.factory("usersService", ["$http", "$log", "Config", "SpringDataRestAdapter", function($http, $log, Config, SpringDataRestAdapter) {
	return {
		getProfile: function(data){
			var httpPromise = $http.get(Config.api.url + '/currentUser', data);

			return SpringDataRestAdapter.process(httpPromise);
		},
		getUserByEmail: function(email){
			var httpPromise = $http.get(Config.api.url + "/user/" + email);

			return SpringDataRestAdapter.process(httpPromise);
		},
		updateUser: function(data){
			var httpPromise = $http.post(Config.api.url + "/updateUser", data);

			return SpringDataRestAdapter.process(httpPromise);
		},
		updateUserPassword: function(data){
			var httpPromise = $http.post(Config.api.url + "/changePassword", data, {
				headers: { 
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
				},
				transformRequest: encodeURIObject
			});

			return SpringDataRestAdapter.process(httpPromise);
		}
	}
}]);