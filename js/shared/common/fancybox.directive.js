softnetApp.common

.directive('fancybox', ["$compile", "$timeout", function($compile, $timeout){
    return {
    	scope: {
    		autoSize: '@',
    		popupWidth: '@',
    		popupHeight: '@',
    	},
        link: function($scope, $element, $attrs) {

            $element.fancybox({
	            maxWidth: 800,
	            maxHeight: 600,
	            fitToView: false,
	            width: $scope.popupWidth || '75%',
	            height: $scope.popupHeight || '75%',
	            autoSize: $scope.autoSize || false,
	            closeClick: false,
	            openEffect: 'none',
	            closeEffect: 'none',
	            afterLoad: function(){
	            	
                    $timeout(function(){
                        $compile($(".fancybox-inner"))($scope);
                        $scope.$apply();
                    });
                }
	        });


	        $scope.closeFancyBox = function(){
	        	$.fancybox.close();
	        }
        }
    }
}]);