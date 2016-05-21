softnetApp.app
    .controller("CareersAddCommentsCtrl", ["$scope", "$log", function ($scope, $log) {

        var vm = this;
        
        vm.addCommentsModal = $scope.$parent.addCommentsModal;

        debugger; 

        $log.log('CareersAddCommentsCtrl');
    }]);