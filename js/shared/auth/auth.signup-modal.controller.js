softnetApp.auth

.controller("SignupModalCtrl",  ["$scope", "$log", "close", "modalTime", "authService", "helperService", function ($scope, $log, close, modalTime, authService, helperService) {

	var vm = this; 

	// set validation variables
	vm.loading = false;
	vm.error = '';

	// set success message setings
	vm.success = {};
	vm.success.show = false;
	vm.success.message = "";

	// set data variables
	vm.userData = {};

	// set company default data
	vm.userData.company = {};

	// get all countries
	helperService.getCountries()

	.then(function(countries){
		vm.countries = countries;
	});

	/*****************************************
	*	
	*			  Signup Policy
	*		
	*****************************************/

	// set policy variables
	vm.policyRead = false;
	vm.policyAggree = false;

	vm.readPloicy = function(){
		vm.policyRead = true;
	}

	vm.agreePloicy = function(){
		vm.policyAggree = true;
	}

	/*****************************************
	*	
	*			  Signup Form
	*		
	*****************************************/
	$scope.form = {
		signup: {}
	};

	// regirster user
	vm.register = function() {

		if (
			$scope.form.signup.$invalid ||
			!vm.policyAggree ||
			!vm.policyRead
		) {
			return false;
		}

		vm.loading = true;

		vm.userData.tncAccepted = vm.policyAggree;

		authService.register(vm.userData)

		.then(function(response){

			vm.loading = false;

			vm.success.show = true;
			vm.success.message = response.data;

			//close(response, modalTime.autoClose);
		})

		.catch(function(error) {
			vm.error = error.data.errorMessage;
			vm.loading = false;
		});
	}

	// reset form
	vm.resetForm = function() {
		$scope.form.signup.$submitted = false;
	
		vm.userData = {};
		vm.companyData = {};		
		vm.retypePassword = '';
	}

	/*****************************************
	*	
	*			  Signup Tabs
	*		
	*****************************************/

	// deffault active tab
	vm.activeTab = 'tab1';

	// set active tab
	vm.activateTab = function(tab){
		vm.activeTab = tab;
	}

	// show avtive tab
	vm.isActiveTab = function(tab){
		return vm.activeTab === tab;
	}

	/*****************************************
	*	
	*			  Close Modal
	*		
	*****************************************/

	//Close Modal
	vm.closeModal = function(result) {
	    close(result, modalTime.close); // close, but give 200ms for bootstrap to animate
	};

	$log.log("SignupModalCtrl");

}]);