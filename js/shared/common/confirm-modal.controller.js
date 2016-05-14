/*
*	confirm modal controller
* 
*/
softnetApp.common
    .controller('ConfirmModalCtrl', ['$scope', 'close', 'message', 'title' , function($scope, close, message, title) {
        
        var vm = this;

        vm.title = title;
        vm.message = message;   

        vm.close = function(result) {
            close(result, 500); 
        };
    }]);

