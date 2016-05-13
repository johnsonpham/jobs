/*
*
*	New Post Controller
*/
softnetApp.app
	.controller('NewsPageCtrl', ['$scope', '$log', '$location', function($scope, $log, $location){
		
		$log.log('NewsPostCtrl');

		var vm = this;


		// //$log.log('current page ' + $location.path().search('page'));
		// $log.log('current page ' + $location.path('/news').hash('news-post'));

		// // vm.currentpage = $location.path('/news');
		// // vm.currentpagesearch = $location.path('/news').search('page=news-post');
	
		// vm.templates = [ 
		//  		{ name: 'news-page', url: 'templates/app/news/news-page.html'},
		//         { name: 'news-post', url: 'templates/app/news//news-post.html'} 
		// ];

	   

	 //    if ($location.hash() != 'news-post') {
	 //    	vm.template = vm.templates[0];
	 //    } else {
	 //    	vm.template = vm.templates[1];
	 //    }
	 //     vm.t = $location.hash();
	 //     debugger;
	}]);