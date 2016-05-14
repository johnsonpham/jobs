softnetApp.common

.directive('sharethis', ["$log", "$timeout", function($log, $timeout) {
    return {
        restrict: 'EA',
        scope: {
            shareUrl: '@',
            buttonType: '@'
        },
        replace: true,
        template: function(tElem, tAttrs){
            if (tAttrs.buttonType === 'large') {
                return "<div><span class='st_sharethis_large' st_title='Softnet' st_url='" + tAttrs.shareUrl + "'' st_summary=''></span></div>"
            } 
            else if (tAttrs.buttonType === 'count'){
               return  "<div><span class='st_fblike_hcount' displayText='Facebook Like'></span>" + 
                        "<span class='st_fbrec_hcount' displayText='Facebook Recommend'></span>" + 
                        "<span class='st_plusone_hcount' displayText='Google +1'></span>" + 
                        "<span class='st_twitterfollow_hcount' displayText='Twitter Follow' st_username='softnet'></span></div>"; 
            }
            else {
                return "<div></div>";
            }
        },
        link: function(scope, element, attr) {

            scope.$watch('shareUrl', function(v) {
                $timeout(function () {
                    if (typeof stButtons.locateElements === 'function') {
                        stButtons.locateElements();
                    }
                });
            });
        }
    };
}]);