/*
*
*	Upload Contacts Controller
*/
softnetApp.app
	.controller('UploadContactsCtrl', ['$scope', '$log', 'contactsService', 
		function($scope, $log, contactsService){
		
			$log.log('UploadContactsCtrl');
			var vm = this;		

			vm.id = 'bee9fb9b021e354b@WINDOWSLIVE';

			// get contact status
	        // contactsService.getContactsStatusList()
         //            .then(function(result){     
         //                vm.contacts_status = result.contacts_status;  

         //                // selected item false for all joobs
         //                angular.forEach(vm.contacts_status, function (cs) {
         //                    cs._id = 'bee9fb9b021e354b@WINDOWSLIVE';
         //                });
         //                debugger;
         //            })
         //            .finally(function(){
	        //                 vm.loading = true;
         //            });	
         	// vm.cstatus = [];

          //   contactsService.getContactsStatus(vm._id)
          //   		.then(function(result) {
          //   			//vm.cs = result.contacts_status;

          //   			vm.cstatus = result.contacts_status.pop(vm.id);
          //   		})
          //   		.finally(function() {

          //   		});

	}]);