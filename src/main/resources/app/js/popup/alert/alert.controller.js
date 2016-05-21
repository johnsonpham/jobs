/*
*
*	Alert Controller
*/
softnetApp.app
	.controller('AlertController', ['$scope', '$log', 'ModalService', 'alert', 'close',
		function($scope, $log, ModalService, alert, close){
		
		$log.log('AlertController');

		var vm = this;

		vm.alert = alert;

	    vm.close = function(result) {
	        close(result, 500); 
	    };	    

	}]); 
	// end AlertController