softnetApp.common
    .factory('utilService', ["$log", "$q", "ModalService", function ($log, $q, ModalService) {
                
        return {
            confirm: function(message, title){
                var deferred = $q.defer();
                
                ModalService.showModal({
                    templateUrl: "templates/popup-pages/confirm-modal/confirm-modal.html",
                    controller: "ConfirmModalCtrl",
                    controllerAs: 'confirmModal',
                    inputs: {
                        title: title,
                        message: message
                    }
                })
                .then(function(modal) {
                    modal.element.modal();

                    modal.close.then(function(result) {
                        deferred.resolve(result);
                    });
                });
                
                return deferred.promise;
            }
        }
    }]);