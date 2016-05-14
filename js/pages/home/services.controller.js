
softnetApp.app

.controller("ServicesCtrl", ["$log", function ($log) {

	var vm = this; 

	vm.services = [
		{
			title: "CONSULTING",
			icon: "fa-hand-o-right",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			image: "assets/referrals.jpg",
			link: {
				name: 'CONSULT',
				url: '/'
			}
		},
		{
			title: "MANAGEMENT",
			icon: "fa-search",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			image: "assets/2.jpg",
			link: {
				name: 'MANAGE',
				url: '/'
			}
		},
		{
			title: "DELIVERY",
			icon: "fa-pencil-square-o",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			image: "assets/application.jpg",
			link: {
				name: 'DELIVER',
				url: '/'
			}
		}
	];
}]);