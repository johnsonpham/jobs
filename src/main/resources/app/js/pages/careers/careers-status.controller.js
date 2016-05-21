softnetApp.app
		.controller('StatusController', ['$scope', '$log', 'careersService',  
									function($scope, $log, careersService){

			var vm = this;

			// vm.status = [
			// 	{
			// 		id: '1',
			// 		createOn: 'Admin',
			// 		createBy: 'Admin',
			// 		comments: 'This is very good! Wow...'	
			// 	}
			// ];
			
			vm.isShow = false;
			vm.isDisable = false;
			// get jobs 
	        careersService.getStatusList()
                    .then(function(result){     
                        vm.status = result.status;                        
                    });		            


            vm.addFormStatus = function() {
            	vm.isShow = true;
            	vm.isDisable = true;
            }	

            vm.removeFormStatus = function() {
            	vm.isShow = false;
            	vm.isDisable = false;
            }
	
		}]);