softnetApp.app
    .controller("CareersAddCommentsModalCtrl",  ["$scope", "$log", "$element", "close", "source", "title", "modalBody", function ($scope, $log, $element, close, source, title, modalBody) {

        var vm = this;
        
        vm.source = source;
        vm.title = title;
        vm.modalBody = modalBody;
        
        vm.closeModal = function(result) {
            close(result, 500);
        };
        
        $log.log("CareersAddCommentsModalCtrl");

    }]);