/*
*   Carees service
*/

softnetApp.app
        .factory("careersService", ["$http", "$log", "Config", "SpringDataRestAdapter", function($http, $log, Config, SpringDataRestAdapter) {
            return {
                getJobList: function(){
                    //Config.api.url + '/job/list'
                    var httpPromise = $http.get(Config.app.url + '/assets/data/jobs.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                getJob: function(data){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/job.json', data);
                    return SpringDataRestAdapter.process(httpPromise);
                },
                createJob: function(data){
                    var httpPromise = $http.post(Config.api.url + '/job/create', data, {
                        headers: { 
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    });

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                deleteJobs: function(jobIds){
                    var data = {
                        jobIds: jobIds
                    };
                    var httpPromise = $http.post(Config.api.url + '/job/deleteJob', data, {
                        headers: { 
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    });

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                closeJobs: function(jobIds){
                    var data = {
                        jobIds: jobIds
                    };
                    var httpPromise = $http.post(Config.api.url + '/job/closeJob', data, {
                        headers: { 
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    });

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                addStatus: function(jobIds){
                    var data = {
                        jobIds: jobIds
                    };
                    var httpPromise = $http.post(Config.api.url + '/job/addstatus', data, {
                        headers: { 
                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        }
                    });

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                getStatusList: function(data) {
                    var httpPromise = $http.get(Config.app.url + '/assets/data/status.json', data);
                    return SpringDataRestAdapter.process(httpPromise);
                },                
                getEventsList: function(data) {
                    var httpPromise = $http.get(Config.app.url + '/assets/data/events.json', data);
                    return SpringDataRestAdapter.process(httpPromise);
                },
                getApplicantsList: function(data) {
                    var httpPromise = $http.get(Config.app.url + '/assets/data/applicants.json', data);
                    return SpringDataRestAdapter.process(httpPromise);
                },
                acknowledgeReceipt : function(jobId, applicantId){
                    var data = {
                        jobId: jobId,
                        applicantId: applicantId
                    };
                    var httpPromise = $http.post(Config.api.url + '/ack/Applicant', data);

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                reject : function(jobId, applicantId){
                    var data = {
                        jobId: jobId,
                        applicantId: applicantId
                    };
                    var httpPromise = $http.post(Config.api.url + '/reject/Applicant', data);

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                },
                rating : function(jobId, ratingId){
                    var data = {
                        jobId: jobId,
                        ratingId: ratingId
                    };
                    var httpPromise = $http.post(Config.api.url + '/rating', data);

                    return $.Deferred(function ($dfd) {

                        SpringDataRestAdapter.process(httpPromise)

                        .then(
                            // success
                            function(data){
                                $dfd.resolve(data);
                            }, 
                            // error
                            function(error){
                                $dfd.reject();
                                $log.log(error);
                            }
                        );
                    });
                }
            }
        }]);