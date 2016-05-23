/*
 *	Post Job Controller
 */

softnetApp.app.controller('PostJobCtrl', ['$scope', '$log', function ($scope, $log) {
    $log.log('PostJobCtrl');

    $scope.externalLink = true;
    $scope.uploadFile = false;
    $scope.fillForm = false;

    this.setExternalLink = function(){
        $scope.externalLink = true;
        $scope.uploadFile = false;
        $scope.fillForm = false;
    };


    this.setUploadFile = function(){
        $scope.externalLink = false;
        $scope.uploadFile = true;
        $scope.fillForm = false;
    };
    
    this.setFillForm = function(){
        $scope.externalLink = false;
        $scope.uploadFile = false;
        $scope.fillForm = true;
    }
}]);
