/*
*	Helper service
*/

softnetApp.common

.factory("helperService", ["$http", "$log", "$q", function($http, $log, $q) {
	var tmpData = {};

	return {
		getCountries: function(){
			return $http.get('assets/data/countries.json')

			.then(function(result){
				return result.data;
			});
		},
		whiteList: function(object, whiteList) {
			for (var key in object) {
				// Remove key if not found in whitelist
				if (whiteList.indexOf(key) < 0) {
					delete object[key];
				}
			}

			return this.promiseMaker(object);
		},
		blackList: function(object, blackList) {
			for (var key in object) {
				// Remove the key if is in blacklist
				if (blackList.indexOf(key) >= 0) {
					delete object[key];
				}
			}

			return this.promiseMaker(object);
		},
		promiseMaker: function(data){
			return $q(function(resolve, reject) {
				resolve(data);
			});
		},
		setTmpData: function(data){
			tmpData = data;
		},
		getTmpData: function(data){
			return tmpData;
		},
	}
}]);