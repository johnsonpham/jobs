softnetApp.common
    .directive('googlemaps', ["$timeout", "$compile", "$log", function ($timeout, $compile, $log) {
        return {
            restrict: 'E',
            scope: {
                options:"@",
                markerOptions: "=",
                latlng:"=",
                eid:"@",
                eclass:"@"
            },
            link: function ($scope, $element, attrs) {
                var eid = attrs.eid ? attrs.eid : "googlemaps";
                var eclass = attrs.eclass ? attrs.eclass : "google-map google-map-full";
                
                $element.replaceWith('<div id="'+eid+'" class="'+eclass+'"></div>');
                
                if ($scope.latlng === undefined){
                    $scope.latlng = {lat: 0, lng: 0};
                }                
                window.lazyLoadGMapCallback = function(){
                    $timeout(function(){
                        if ($scope.options === undefined){
                            $scope.options = {
                                zoom: 4,
                                center: $scope.latlng
                            };
                        }
                        
                        $scope.map = new google.maps.Map(document.getElementById(eid), $scope.options);
                        if ($scope.markerOptions !== undefined){
                            var marker = new google.maps.Marker($scope.markerOptions);
                            marker.setMap($scope.map);
                            marker.info = new google.maps.InfoWindow({
                                content: '<strong style="font-size: 14px;">Our Office</strong><br>45 Park Avenue, Apt. 303<br>New York, NY 10016'
                            });
                            marker.info.open($scope.map, marker);
                        }
                    }, 100);
                };
                
                if(window.google === undefined || window.google.maps === undefined) {
                    var script  = document.createElement('script');
                    script.async = true;
                    script.type = 'text/javascript';
                    script.src  = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=lazyLoadGMapCallback';
                    document.body.appendChild(script)
                }else{
                    window.lazyLoadGMapCallback()
                }
            }
        }
    }]);