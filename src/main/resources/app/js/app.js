var softnetApp = {};

softnetApp.main = angular.module("softnetApp", [

	// Library modules
	'ui.router',
	'ngCookies', 
	'angular-storage', 
	'angular-jwt',
	'spring-data-rest',

	// Vendor 
	'angularModalService',
	'angular-flexslider',
	'frapontillo.bootstrap-switch',
	'datatables',
	
	// Application cached tempaltes
	'softnetApp.templates',
	
	// Application modules
	'softnetApp.common',
	'softnetApp.app',
	'softnetApp.auth',
	'softnetApp.popupPages'
]);

// Common components module
softnetApp.common = angular.module("softnetApp.common", []);

// App module
softnetApp.app = angular.module("softnetApp.app", []);

// Auth module
softnetApp.auth = angular.module("softnetApp.auth", []);

// Popup page module
softnetApp.popupPages = angular.module("softnetApp.popupPages", []);



//converting object to x-www-form-urlencoded string.
var encodeURIObject = function (obj) {

	var query = '';
	var name, value, 
	fullSubName, subValue, innerObj, i;

	for(name in obj) {
		value = obj[name];

		if(value instanceof Array) {
			for(i=0; i<value.length; ++i) {
				subValue = value[i];
				fullSubName = name + '[' + i + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += encodeURIObject(innerObj) + '&';
			}
		}

		else if(value instanceof Object) {
			for(subName in value){
				subValue = value[subName];
				fullSubName = name + '[' + subName + ']';
				innerObj = {};
				innerObj[fullSubName] = subValue;
				query += encodeURIObject(innerObj) + '&';
			}
		}

		else if(value !== undefined && value !== null){
			query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
		}
	}

	if (query.length) {
		return query.substr(0, query.length - 1)
	}

	return query;
};

softnetApp.app

.controller("AppCtrl", ["$log", "authService", "user", function ($log, authService, user) {

	var vm = this; 

	// check is user logined
	vm.isAuth = authService.isAuthenticated();
	
	// set user data
	vm.user = user;

	if (
		vm.isAuth && 
		!vm.user.notifications
	) {
		vm.user.notifications = {};
		vm.user.notifications.sms = false;
		vm.user.notifications.email = false;
	}
}]);


