
softnetApp.common

.directive('tooltip', ["$log", function ($log) {
	return {
		restrict: 'A',
		link: function ($scope, $element) {
			$element.tooltip();
		}
	}
}]);