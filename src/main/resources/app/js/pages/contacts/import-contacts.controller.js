/*
*
*	import Contacts Controller
*/
softnetApp.app
	.controller('ImportContactsCtrl', ['$scope', '$log', 'contactsService', '$element',
		function($scope, $log, contactsService, $element){
		
			$log.log('UploadContactsCtrl');
			var vm = this;

         vm.getSocialContacts = function(social, event){
            var $target = angular.element(event.currentTarget);

            if ($target.hasClass('active')){
               return false;
            }

            $element.find('.social-links a.active').removeClass('active');
            $target.addClass('active');

            if (typeof contactsService[social] === 'function'){
               vm.cstatus = [];

               contactsService[social]()
                           .then(
                              function(result){ //success
                                 vm.cstatus = result.data;
                              }, 
                              function(){ // fail

                              }
                           );
            }
         };

         vm.doConnect = function(event){
            contactsService.doConnect()
                           .then(
                              function(result){ //success
                                 vm.cstatus = result.data;
                              }, 
                              function(){ // fail

                              }
                           );
         };
	  }
   ]);