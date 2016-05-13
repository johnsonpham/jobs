softnetApp.app
    .directive('childCareerTable', ["$log", function ($log) {
        return {
            restrict: 'A',
            templateUrl: 'templates/app/careers/child-table/child-table.html',
            transclude : true,
            link: function ($scope, $element) {

            }
        }
    }]);


/*
*	Process delete
* 
*/

// softnetApp.app.controller('CloseController', ['$scope', 'headerText', 'bodyText', 'close', 
//                                         function($scope, headerText, bodyText, close) {

//     $scope.headerText = headerText;
//     $scope.bodyText = bodyText;   

// 	$scope.close = function(result) {
//  	  close(result, 500); 
//  	};

// }]).controller('CloseEditCtrl', ['$scope', 'close', 
//                 function($scope, close){

//     //Some fields can edit in data
//     $scope.description = 'This is description';
//     $scope.salary = 'This is salary';
//     $scope.skills = 'This is skills';
//     $scope.profession = 'This is profession';
//     $scope.jobType = 'This is jobType';
//     $scope.status = 'This is status';
//     $scope.duration = 'This is duration';    


//     $scope.close = function(result) {
//       close({
//         description: $scope.description,
//         salary: $scope.salary,
//         skills: $scope.skills,
//         profession: $scope.profession,
//         jobType: $scope.jobType,
//         status: $scope.status,
//         duration: $scope.duration
//       }, 500); 
//     };

// }]);

softnetApp.app.controller('CloseController', ['$scope', 'close', 
                                        function($scope, close) {

    $scope.close = function(result) {
      close(result, 500); 
    };

}]);

softnetApp.app.controller('DemoCtrl', ['$scope', 'ModalService', 'careersService', function($scope, ModalService, careersService) {

    var vm = this;


    // Show popup edit modal
    vm.showRatingModal = function() {
        
        ModalService.showModal({

            templateUrl: "templates/app/careers/add-comments/add-comments-modal.html",
            controller: "CloseController"

        })
        .then(function(modal) {         
            modal.element.modal();

            modal.close.then(function(result) {

                // press Yes
                if (result == true) {                
                    //careersService.editJob();
                } 
            });
        }); 

    };  // end showEditModal

    // // Show popup edit modal
    // $scope.showEditModal = function() {
        
    //     ModalService.showModal({

    //         templateUrl: "templates/popup-pages/edit-modal/edit-modal.html",
    //         controller: "CloseEditCtrl"

    //     })
    //     .then(function(modal) {         
    //         modal.element.modal();

    //         modal.close.then(function(result) {

    //             // press Yes
    //             if (result == true) {                
    //                 //careersService.editJob();
    //             } 
    //         });
    //     }); 

    // };  // end showEditModal

    // //Show popup delete modal  
    // $scope.showDeleteModal = function() {
        
    //   	ModalService.showModal({

    //   		templateUrl: "templates/popup-pages/confirm-modal/confirm-modal.html",
    //   		controller: "CloseController",
    //         inputs: {
    //             headerText: "Delete Row",
    //             bodyText: "Are you sure to delete this item?"
    //         }

    //   	})
    //     .then(function(modal) {  		
    //         modal.element.modal();

    //         modal.close.then(function(result) {

    //             // press Yes
    //             if (result == true) {                
    //                 careersService.deleteJob();
    //             } 
    //         });
    //     });        

    // };  // End showDeleteModal

    // // Show popup close modal
    // $scope.showCloseModal = function() {
        
    //     ModalService.showModal({

    //         templateUrl: "templates/popup-pages/confirm-modal/confirm-modal.html",
    //         controller: "CloseController",
    //         inputs: {
    //             headerText: "Close Row",
    //             bodyText: "Are you sure to close this item?"               
    //         }

    //     })
    //     .then(function(modal) {         
    //         modal.element.modal();

    //         modal.close.then(function(result) {

    //             // press Yes
    //             if (result == true) {                
    //                 careersService.closeJob();
    //             } 
    //         });
    //     }); 

    // };  // end showCloseModal



}]);