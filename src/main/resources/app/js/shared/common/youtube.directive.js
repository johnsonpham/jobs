softnetApp.common
    .directive('youtube', ["$compile", "$log", function ($compile, $log) {
        return {
            restrict: 'E',
            scope: {
                videoSrc:"="
            },
            link: function ($scope, $element) {
                $element.replaceWith('<iframe src="'+$scope.videoSrc+'" frameborder="0"></iframe>');
            }
        }
    }]);