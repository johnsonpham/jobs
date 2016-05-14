/*
*   Contacts service
*/

softnetApp.app
        .factory("contactsService", ["$http", "$log", "Config", "SpringDataRestAdapter", function($http, $log, Config, SpringDataRestAdapter) {
            return {
                // social contacts
                facebook: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-facebook.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                twitter: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-twitter.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                yahoo: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-yahoo.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                linkedin: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-linkedin.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                gmail: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-gmail.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                instagram: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-instagram.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                doConnect: function(){
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-connected.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                // end social contacts

                getContactsStatusList: function(){                    
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-status.json');
                    return SpringDataRestAdapter.process(httpPromise);
                },
                getContactsStatus: function(data){
                	var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-status.json', data);
                    return SpringDataRestAdapter.process(httpPromise);
                },
                getContactsDataList: function(){                    
                    var httpPromise = $http.get(Config.app.url + '/assets/data/contacts-data.json');
                    return SpringDataRestAdapter.process(httpPromise);
                }
            };
        }]);