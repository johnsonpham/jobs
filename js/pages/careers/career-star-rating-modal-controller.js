softnetApp.app
    .controller("CareerStarRatingModalCtrl",  ["$scope", "$log", "close", function ($scope, $log, close) {

        var vm = this; 

        // set validation variables
        vm.loading = false;
        vm.error = '';

        

        /*****************************************
        *	
        *			  Close Modal
        *		
        *****************************************/

        //Close Modal
        vm.closeModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        $log.log("CareerStarRatingModalCtrl");

    }]);