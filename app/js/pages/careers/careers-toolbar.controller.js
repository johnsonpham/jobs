softnetApp.app
    .controller("CareersToolbarCtrl", ["$scope", "$log", "utilService", 'careersService', 'ModalService', function ($scope, $log, utilService, careersService, ModalService) {
        var vm = this;

        vm.careers = $scope.$parent.careers;

        vm.deleteJobs = function(){
            utilService.confirm('Are you sure to delete this items?')
                        .then(
                            //press true
                            function (result){ 
                                if (result === true){
                                    careersService.deleteJobs(vm.careers.selectedJobs)
                                                  .then(
                                                      //success
                                                      function (data) {  
                                                          
                                                      },
                                                      //error
                                                      function (data) {  
                                                          
                                                      }
                                                  )
                                }
                            }
                         )
        };

        vm.closeJobs = function(){
            utilService.confirm('Are you sure to close this items?')
                        .then(
                            //press true
                            function (result){ 
                                if (result === true){
                                    careersService.closeJobs(vm.careers.selectedJobs)
                                                  .then(
                                                      //success
                                                      function (data) {  
                                                          
                                                      },
                                                      //error
                                                      function (data) {  
                                                          
                                                      }
                                                  )
                                }
                            }
                         )
        };

        vm.openCommentPopup = function(){
            ModalService.showModal({
                templateUrl: "templates/app/careers/add-comments/add-comments-modal.html",
                controller: "CareersAddCommentsModalCtrl",
                controllerAs: 'addCommentsModal'
            })
            .then(function(modal) {
                modal.element.modal();

                modal.close.then(function(result) {
                    
                });
            });
        };
        
        $log.log('CareersToolbar Controller');
    }]);