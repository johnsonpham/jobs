softnetApp.app
    .controller("CareerEditModalCtrl",  ["$scope", "$log", "close", "careersService", function ($scope, $log, close, careersService) {

        var vm = this; 

        // set validation variables
        vm.loading = false;
        vm.error = '';

        // get job
        careersService.getJob()
                    .then(function(result){
                        vm.job = result;
                    });

        //Close Modal
        vm.closeModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        //save
        vm.save = function(){
            $log.log("career save");

            // if ($scope.forms.job.$invalid) {
            //     return false;
            // }
            return false;
        };

        $log.log("CareerEditModalCtrl");

    }]);

