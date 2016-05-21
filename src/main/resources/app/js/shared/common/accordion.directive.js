softnetApp.common

.directive('accordion', ["$log", function ($log) {
	return {
		restrict: 'A',
		link: function ($scope, $element) {
			$element.smk_Accordion();
		}
	}
}]);