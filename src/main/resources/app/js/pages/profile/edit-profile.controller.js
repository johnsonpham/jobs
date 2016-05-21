/*
    edit profile controller
*/
softnetApp.app
    .controller("EditProfileCtrl", ["$scope", "$log", "usersService", "helperService", function ($scope, $log, usersService, helperService) {

        var vm = this; 

        // set validation variables
        vm.loading = false;
        vm.error = {};

        $scope.forms = {
            editProfile: {},
            editPassword: {},
            editNotes: {}
        };

        // update profile
        vm.updateProfile = function(data) {

            if ($scope.forms.editProfile.$invalid) {
                return false;
            }

            vm.loading = true;

            usersService.updateUser(data)

            .then(function(response){

                vm.loading = false;

                $.fancybox.close();
            })

            .catch(function(error){
                // set error
                vm.error.show = true;
                vm.error.message = error.data.errorMessage;

                vm.loading = false;
            });

        }

        vm.updatePassword = function(){
            if ($scope.forms.editPassword.$invalid) {
                return false;
            }

            vm.loading = true;

            usersService.updateUserPassword({
                oldPwd: vm.password,
                newPwd: vm.newpassword
            })

            .then(function(response){

                vm.loading = false;

                $.fancybox.close();	
            })

            .catch(function(error){
                
                // set error
                vm.error.show = true;
                vm.error.message = error.data.errorMessage;

                vm.loading = false;
            });
        }

        vm.updateNotificatons = function(data){

            if ($scope.forms.editNotes.$invalid) {
                return false;
            }

            vm.loading = true;

            usersService.updateUser(data)

            .then(function(response){

                vm.loading = false;

                $.fancybox.close();
            })

            .catch(function(error){
                // set error
                vm.error.show = true;
                vm.error.message = error.data.errorMessage;

                vm.loading = false;
            });
        }

        vm.cleanError =function() {
            vm.error.show = false;
            vm.error.message = '';
        }
    }]);