/*
*
*	Manage Contacts Controller
*/
softnetApp.app
	.controller('ManageContactsCtrl', ['$scope', '$log', '$element', 'utilService', 'ModalService', 'contactsService', function($scope, $log, $element, utilService, ModalService, contactsService){
		$log.log('ManageContactsCtrl');
		var vm = this;
		
		//loading
        vm.loading = false;
        
        vm.getContacts = function(){
            // get contacts 
            contactsService.getContactsDataList()
                            .then(function(result){
                                vm.contacts = result.data;
                                vm.groups = result.groups;

                                // selected item false for all contacts
                                // angular.forEach(vm.contacts, function (contact) {
                                //     var groups = contact.group;
                                //     var g;

                                //     for (var i = 0; i < groups.length; i++) {
                                //         g = groups[i];

                                //         if (g in vm.groups){
                                //             vm.groups[g]++;
                                //         }else{
                                //             vm.groups[g] = 1;
                                //         }
                                //     }
                                // });
                            }).finally(function(){
                                vm.loading = true;
                            });
        };

        vm.filterContactByGroup = function(group, event){
            var $target = angular.element(event.currentTarget);
            if ($target.hasClass('active')) return;

            vm.groupName = group;
            $element.find('.group-item').removeClass('active');
            angular.element(event.currentTarget).addClass('active');

            vm.dtInstance.rerender();
        };

        vm.modifyContact = function(contact) {

            var scope = $scope.$new(true);      
            
            scope.contact = contact;
            scope.contacts = vm.contacts;
            scope.groups = vm.groups;
            scope.getContacts = vm.getContacts;

            //show popup
            ModalService.showModal({
                templateUrl: "templates/app/contacts/manage-contacts/edit-contact/edit-contact-modal.html",
                controller: "ContactEditModalCtrl",
                controllerAs: 'contactEditModal',
                // appendElement: $element,
                scope: scope
            })
            .then(function(modal) {
                modal.element.modal();

                modal.close.then(function(result) {
                    
                });
            });
        };

        vm.removeContact = function(contact, index) {
            utilService.confirm('Are you sure to delete this contact?')
                        .then(
                            //press true
                            function (result){ 
                                updateGroupByContact(contact);
                                deleteContact(contact);

                                if (result === true){
                                    contactsService.deleteContact(contact.id)
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

        vm.editGroup = function(group, name, contact, event) {
            var inpChb = event.currentTarget;

            if (inpChb.checked){
                contact.group.push(name);
            }else{
                for (var i = contact.group.length - 1; i >= 0; i--) {
                    if (contact.group[i]===name){
                        contact.group.splice(i, 1);
                    }
                }
            }

            updateContact(contact);
        };

        vm.createGroup = function(contact){
            contact.isNewGroup = true;
        };

        vm.addGroup = function(name){
            contactsService.addContactGroup({name: name})
                            .then(function(result){
                                // vm.getContacts();
                            }).finally(function(){
                                vm.loading = true;

                                vm.getContacts();
                            });
        };

        function deleteContact(contact){
            for(var i = vm.contacts.length - 1; i >= 0; i--){
                if(vm.contacts[i]._id == contact._id){
                    vm.contacts.splice(i, 1);
                }
            }
        };

        function updateContact(contact){
            contactsService.modifyContact(contact)
                            .then(function(result){
                                // vm.getContacts();
                            }).finally(function(){
                                vm.loading = true;

                                vm.getContacts();
                            });
        };

        function updateGroupByContact(contact){
            var groups = contact.group;
            var g;

            for (var i = 0; i < groups.length; i++) {
                g = groups[i];

                if (g in vm.groups){
                    vm.groups[g]--;
                }
            }
        }
        
        vm.getContacts();

        // datatable options
        vm.dtOptions = {
            "paginationType": 'simple_numbers',
            //responsive: true,
            "displayLength": 10,
            // "bLengthChange": false,
            // "dom": '<"careers-toolbar">frtip',
            "dom": '<\'row data-listing\'t><\'row paging-control-bars\'p>',
            "oLanguage": { 
                "sSearch": '<i class="fa fa-search"></i>' 
            },
            //order
            "order": [],
            "columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }],
            bFilter: false, 
            bInfo: false,
            "stripeClasses": [],
            "fnDrawCallback": function(oSettings) {
                if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
                    $(oSettings.nTableWrapper).find('.paging-control-bars').hide();
                }else{
                    $(oSettings.nTableWrapper).find('.paging-control-bars').show();
                }
            },
            page: false

            //fixed column
            // scrollY:        300,
            // scrollX:        true,
            // scrollCollapse: true,
            // paging:         false,
            // fixedColumns: {
            //     leftColumns: 2
            // }
        };        

        vm.dtInstance = {};

	}]);