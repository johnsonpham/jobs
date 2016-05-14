softnetApp.common

.directive('scrollOnClick', scrollOnClickDirective);

function scrollOnClickDirective($log) {
	return {
		restrict: 'A',
		link: function (scope, element, attrs) {

			var time = parseInt(attrs.scrollOnClick) || 1000;

			element.on("click", function() {
				var scrollTo = $(scope.scrollTo).offset().top - 120;
				$("html, body").animate({scrollTop: scrollTo}, time);
			});

		},
		scope: {
			scrollTo: '@'
		}
	}
}

scrollOnClickDirective.$inject = ["$log"];