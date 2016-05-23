softnetApp.app

    .config(["$stateProvider", function ($stateProvider) {

        $stateProvider

        // Dashboard state
            .state('app', {
                abstract: true,
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/app.html');
                }],
                controller: "AppCtrl as app",
                data: {},
                resolve: {
                    user: ["authService", "usersService", function (authService, usersService) {
                        var profile = {};

                        if (!authService.isAuthenticated()) {
                            return profile;
                        }

                        return usersService.getProfile()

                            .then(function (result) {
                                profile = result.data;
                                return profile;
                            })

                            .catch(function (error) {
                                authService.remove();
                                return profile;
                            });
                    }]
                }
            })


            // App state

            /***** Process menu link header *****/
            .state('app.home', {
                url: "/",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/home/home.html');
                }],
                controller: "HomeCtrl as home",
                data: {}
            })


            .state('app.whysoftnet', {
                url: "/why-softnet",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/why-softnet/why-softnet.html');
                }],
                controller: "WhySoftnetCtrl as whysoftnet",
                data: {
                    // requiresLogin: false
                }
            })

            .state('app.contactus', {
                url: "/contact-us",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/contact-us/contact-us.html');
                }],
                controller: "ContactusCtrl as contactUs",
                data: {
                    // requiresLogin: false
                }
            })

            .state('app.careers', {
                url: "/careers",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/careers/careers.html');
                }],
                controller: "CareersCtrl as careers",
                data: {
                    requiresLogin: false
                }
            })
            /***** End process menu link header *****/


            /***** Process Information link footer *****/
            .state('app.aboutus', {
                url: "/about-us",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/about-us/about-us.html');
                }],
                controller: "AboutusCtrl as aboutus",
                data: {
                    // requiresLogin: false
                }
            })

            .state('app.news', {
                url: "/news",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/news/news.html');
                }],
                controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.newspost', {
                url: "/newspost",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/news/news-post.html');
                }],
                // controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.help', {
                url: "/help",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/help/help.html');
                }],
                controller: "HelpCtrl as help",
                data: {
                    // requiresLogin: false
                }
            })

            .state('app.siteMap', {
                url: "/siteMap",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/quick-links/quick-links.html');
                }],
                controller: "SiteMapCtrl as siteMap",
                data: {
                    // requiresLogin: false
                }
            })
            /***** End process Information link footer *****/


            /***** Process legal link footer *****/
            .state('app.copyright', {
                url: "/copyright",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/copyright/copyright.html');
                }],
                // controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.policy', {
                url: "/policy",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/policy/policy.html');
                }],
                // controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.privacy', {
                url: "/privacy",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/privacy/privacy.html');
                }],
                // controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.termsConditions', {
                url: "/termsConditions",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/terms-conditions/terms-conditions-tpl.html');
                }],
                // controller: "NewsPageCtrl as news",
                data: {
                    requiresLogin: false
                }
            })
            /***** End process legal link footer *****/

            /***** Process submenu contacts page *****/
            .state('app.uploadContacts', {
                url: "/uploadContacts",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/contacts/upload-contacts/upload-contacts.html');
                }],
                controller: "UploadContactsCtrl as uploadContacts",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.manageContacts', {
                url: "/manageContacts",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/contacts/manage-contacts/manage-contacts.html');
                }],
                controller: "ManageContactsCtrl as manageContacts",
                data: {
                    requiresLogin: false
                }
            })

            .state('app.postJob', {
                url: "/postJob",
                templateProvider: ["$templateCache", function ($templateCache) {
                    return $templateCache.get('templates/app/my-jobs/post-job.html');
                }],
                controller: "PostJobCtrl as postJob",
                data: {
                    requiresLogin: false
                }
            })
        
        /***** End process submenu contacts page *****/
        
        ;//end state
    }]);