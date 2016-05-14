softnetApp.app
		.controller('ApplicantsController', ['$scope', '$log', 'careersService', 'ModalService', 
									function($scope, $log, careersService, ModalService){

			var vm = this;
			vm.job = $scope.$parent.$parent.job;

			
			//debugger;
			vm.applicants = [];

			
			//loading
	        vm.loading = false;

	        // process for Show and hidden button
	        vm.isShow = false;
			vm.isDisable = false;

	        // Applicants toggle options
	        vm.selectedApplicants = [];
	        vm.selectedAll = false;

			// get Applicants 
	        careersService.getApplicantsList()
                    .then(function(result){     
                        vm.applicants = result.applicants;

                        // selected item false for all joobs
                        angular.forEach(vm.applicants, function (applicant) {
                            applicant.selected = false;
                        });
                        
                        
                    }).finally(function(){
	                        vm.loading = true;
                    });			

	        // selecting all Applicants
	        vm.selectAllApplicants = function() {
	            vm.selectedApplicants = [];

	            angular.forEach(vm.applicants, function (applicant) {
	                applicant.selected = vm.selectedAll;

	                if (vm.selectedAll) {
	                    vm.selectedApplicants.push(applicant.id)
	                }
	            });
	        };

	        // set job id in selectedJobs array 
	        vm.selectApplicant = function(applicant){
	            
	            if (applicant.selected) {
	                vm.selectedApplicants.push(applicant.id);
	            } else {
	                var index = vm.selectedApplicants.indexOf(applicant.id);

	                if (index > -1) {
	                    vm.selectedApplicants.splice(index, 1);
	                }
	            }

	            vm.selectedAll = vm.selectedApplicants.length == vm.applicants.length;
	        };

	        vm.dtOptions = {
	            "paginationType": 'simple_numbers',
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
	                "targets": 0,
	                "orderable": false
	            }],
	            "stripeClasses": [],
	            "fnDrawCallback": function(oSettings) {
	                if (oSettings._iDisplayLength > oSettings.fnRecordsDisplay()) {
	                    $(oSettings.nTableWrapper).find('.paging-control-bars').hide();
	                }
	            }

	        };

	        vm.addFormStatus = function() {
            	vm.isShow = true;
            	vm.isDisable = true;
            }	

            vm.removeFormStatus = function() {
            	vm.isShow = false;
            	vm.isDisable = false;
            }


            // Process send email button
            // Press Rating link
	        vm.showSendEmailModal = function() {
	        
	            ModalService.showModal({

	                templateUrl: "templates/app/careers/applicants/applicants-templates/applicants-email-form/applicants-email-form.html",
	                controller: "CloseController"

	            })
	            .then(function(modal) {         
	                modal.element.modal();



					var zIndex = 1040 + (10 * $('.modal:visible').length);
				    modal.element.css('z-index', zIndex+1);
				    var $backdrop = $(modal.element.data('bs.modal')._backdrop);
				    setTimeout(function() {
				        $backdrop.css('z-index', zIndex).addClass('modal-stack');
				    }, 0);

					modal.element.on('hidden.bs.modal', function () {
					    $('.modal:visible').length && $(document.body).addClass('modal-open');
					    modal.element.off('hidden.bs.modal');
					});

	                // debugger;
	                modal.close.then(function(result) {

	                });
	            }); 

	        };  // end showSendEmailModal	


	        // Process Acknowledge Receipt
	       vm.ackReceipt = function() {
	       		careersService.acknowledgeReceipt(vm.job.id, vm.selectedApplicants)
	       			.then(function(result){
	       				//success
	       				alert("ok");
	       			},
	       			function(){
	       				//error
	       				alert("acknowledgeReceipt not ok");
	       			});
	       }

	        // Process Reject
	       vm.reject = function() {
	       		careersService.reject(vm.job.id, vm.selectedApplicants)
	       			.then(function(result){
	       				//success
	       				alert("ok");
	       			},
	       			function(){
	       				//error
	       				alert("reject not ok");
	       			});
	       }


		}]);