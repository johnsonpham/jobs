/*
*
*	Manage Contacts Controller
*/
softnetApp.app
	.controller('ManageContactsCtrl', ['$scope', '$log', 'contactsService', function($scope, $log, contactsService){
		$log.log('ManageContactsCtrl');
		var vm = this;
		
		//loading
        vm.loading = false;

        
        vm.selectedContacts = [];
        vm.selectedAll = false;

        // get contacts 
        contactsService.getContactsDataList()
						.then(function(result){
							vm.contacts = result.data;

							// selected item false for all contacts
	                        angular.forEach(vm.contacts, function (contact) {
	                            contact.selected = false;
	                        });
						}).finally(function(){
	                        vm.loading = true;
	                    });
        
        
        vm.selectAllJobs = function() {
            vm.selectedContacts = [];

            angular.forEach(vm.contacts, function (contact) {
                contact.selected = vm.selectedAll;

                if (vm.selectedAll) {
                    vm.selectedContacts.push(contact._id)
                }
            });
        };

        
        vm.selectContact = function(contact){
            
            if (contact.selected) {
                vm.selectedContacts.push(contact._id);
            } else {
                var index = vm.selectedContacts.indexOf(contact._id);

                if (index > -1) {
                    vm.selectedContacts.splice(index, 1);
                }
            }

            vm.selectedAll = vm.selectedContacts.length == vm.contacts.length;
        };
        // datatable options
        vm.dtOptions = {
            "paginationType": 'simple_numbers',
            //responsive: true,
            "displayLength": 10,
            // "bLengthChange": false,
            // "dom": '<"careers-toolbar">frtip',
            "dom": '<\'row filter-control-bars\'<\'col-xs-6\'l><\'col-xs-6\'f>r><\'row data-listing\'t><\'row paging-control-bars\'<\'col-xs-6\'i><\'col-xs-6\'p>>',
            "oLanguage": { 
                "sSearch": '<i class="fa fa-search"></i>' 
            },
            //order
            "order": [],
            "columnDefs": [{
                "targets": 'no-sort',
                "orderable": false
            }],
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