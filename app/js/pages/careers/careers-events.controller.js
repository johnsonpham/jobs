softnetApp.app
		.controller('EventsController', ['$scope', '$log', 'careersService',  
									function($scope, $log, careersService){

			var vm = this;

			// get jobs 
	        careersService.getEventsList()
                    .then(function(result){     
                        vm.events = result.events;           
                        $log.log(vm.events);             
                    });			
	
		}]);