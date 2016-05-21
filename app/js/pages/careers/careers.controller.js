/*
    careers controller
*/

softnetApp.app
    .controller("CareersCtrl", ["$scope", "$log", "$compile", "DTOptionsBuilder", "DTColumnDefBuilder", "user", "careersService", function ($scope, $log, $compile, DTOptionsBuilder, DTColumnDefBuilder, user, careersService) {

        var vm = this; 

        //loading
        vm.loading = false;

        // Jobs toggle options
        vm.selectedJobs = [];
        vm.selectedAll = false;

        // get jobs 
        careersService.getJobList()
                    .then(function(result){
                        vm.jobs = result.data;

                        // selected item false for all joobs
                        angular.forEach(vm.jobs, function (job) {
                            job.selected = false;
                        });
                    }).finally(function(){
                        vm.loading = true;
                    });

        // selecting all jobs
        vm.selectAllJobs = function() {
            vm.selectedJobs = [];

            angular.forEach(vm.jobs, function (job) {
                job.selected = vm.selectedAll;

                if (vm.selectedAll) {
                    vm.selectedJobs.push(job.id)
                }
            });
        };

        // set job id in selectedJobs array 
        vm.selectJob = function(job){
            
            if (job.selected) {
                vm.selectedJobs.push(job.id);
            } else {
                var index = vm.selectedJobs.indexOf(job.id);

                if (index > -1) {
                    vm.selectedJobs.splice(index, 1);
                }
            }

            vm.selectedAll = vm.selectedJobs.length == vm.jobs.length;
        };
        // data tabe options
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
            }

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
        vm.selectedViewer = null;
            
        vm.childInfo = function( job, event){
            
            var scope = $scope.$new(true);      
            
            scope.job = job;
            
            var link = angular.element(event.currentTarget),
                icon = link.find('i'),
                tr = link.parent().parent(),
                table = vm.dtInstance.DataTable,        
                row = table.row(tr);

            if (row.child.isShown()) {
                hideJobInfo(icon, row, tr);
            }
            else {
                if (vm.selectedViewer && vm.selectedViewer.job.id !== job.id){
                    hideJobInfo(vm.selectedViewer.icon, vm.selectedViewer.row, vm.selectedViewer.tr);
                }
                showJobInfo(icon, row, tr, scope);
            }
        };

        function showJobInfo(icon, row, tr, scope){
            icon.removeClass('ic-collapse').addClass('ic-collapsed');
            row.child($compile('<div child-career-table class="clearfix job-detail-content"></div>')(scope)).show();
            row.child().addClass('job-detail-view');
            tr.addClass('job-expand');
            vm.selectedViewer = {};
            vm.selectedViewer.job = scope.job;
            vm.selectedViewer.icon = icon; 
            vm.selectedViewer.row = row; 
            vm.selectedViewer.tr = tr;
        }

        function hideJobInfo(icon, row, tr){
            icon.removeClass('ic-collapsed').addClass('ic-collapse');             
            row.child.hide();
            row.child().removeClass('job-detail-view');
            tr.removeClass('job-expand');
            vm.selectedViewer = null;
        }

    }]);