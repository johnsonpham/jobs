softnetApp.app
    .controller("ContactEditModalCtrl",  ["$scope", "$log", '$element', "close", "contactsService", function ($scope, $log, $element, close, contactsService) {

        var vm = this; 

        // set validation variables
        vm.loading = false;
        vm.error = '';

        vm.contact = $scope.contact;

        var $manageContacts = $scope.$parent.$parent.manageContacts;

       

        //Close Modal
        vm.closeModal = function(result) {
            close(result, 500); // close, but give 200ms for bootstrap to animate
        };

        //save
        vm.save = function(){
            $log.log("contact saved");

            // if ($scope.forms.job.$invalid) {
            //     return false;
            // }
            console.log($manageContacts);

            $manageContacts.getContacts();

            
            $element.on('hidden.bs.modal', function () {
                $element.remove();
            });


            $element.modal('hide');

            return false;
        };

        $log.log("ContactEditModalCtrl");

    }]);

