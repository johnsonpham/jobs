softnetApp.app
    .controller("CareerButtonsCtrl", ["$scope", "$log", "$element", "utilService", 'careersService', 'ModalService', function ($scope, $log, $element, utilService, careersService, ModalService) {
        var vm = this;
        vm.job = $scope.job;
        
        vm.deleteJob = function(){
            utilService.confirm('Are you sure to delete this items?')
                        .then(
                            //press true
                            function (result){ 
                                if (result === true){
                                    careersService.deleteJobs([vm.career.id])
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

        vm.closeJob = function(){
            utilService.confirm('Are you sure to close this items?')
                        .then(
                            //press true
                            function (result){ 
                                if (result === true){
                                    careersService.closeJobs([vm.career.id])
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

        vm.openEditJobModal = function(){
            ModalService.showModal({
                templateUrl: "templates/app/careers/edit-job/edit-job-modal.html",
                controller: "CareerEditModalCtrl",
                controllerAs: 'careerEditModal',
                // appendElement: $element,
                scope: $scope
            })
            .then(function(modal) {
                modal.element.modal();

                modal.close.then(function(result) {
                    
                });
            });
        };
        
        $log.log('CareerButtons Controller');
    }]);