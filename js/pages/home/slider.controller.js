softnetApp.app

.controller("SliderCtrl", ["$log", function ($log) {

	var vm = this; 

	vm.slides = [
		{
			img: 'banner1.jpg',
		},
		{
			img: 'banner2.jpg',
		},
		{
			img: 'banner3.jpg',
		}
	];

}]);