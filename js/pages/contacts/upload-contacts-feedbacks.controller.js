softnetApp.app

.controller("UploadContactsFeedbacksCtrl", ["$log", function ($log) {

	var vm = this; 

	vm.comments = [
		{
			author: 'MR ABC',
			message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac auctor ipsum. Sed vestibulum auctor risus. Sed a maximus massa. Nullam vehicula quis diam et egestas'
		},
		{
			author: 'MR PQR',
			message: 'Aliquam eu tempus dolor, in sagittis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdumet malesuada fames ac ante ipsum primis in faucibus. Cras tristique eget ex sed pulvinar.'
		},
		{
			author: 'MR ABC',
			message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac auctor ipsum. Sed vestibulum auctor risus. Sed a maximus massa. Nullam vehicula quis diam et egestas.'
		},
		{
			author: 'MR PQR',
			message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac auctor ipsum. Sed vestibulum auctor risus. Sed a maximus massa. Nullam vehicula quis diam et egestas'
		},
		{
			author: 'MR PQR',
			message: 'Aliquam eu tempus dolor, in sagittis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdumet malesuada fames ac ante ipsum primis in faucibus. Cras tristique eget ex sed pulvinar.'
		}
	];

}]);