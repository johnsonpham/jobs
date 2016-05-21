/*
    why-softnet controller
*/    
softnetApp.app
    .controller("WhySoftnetCtrl", ["$log", function ($log) {

        var vm = this; 
        
        vm.videoSrc = "http://www.youtube.com/embed/L9szn1QQfas?autoplay=1";
        
        console.log(vm)
        
        $log.log("why-softnet Controller");
    }]);