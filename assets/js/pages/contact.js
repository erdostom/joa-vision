var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 40.7998984,
				lng: -74.4813096
			  });
			   var marker = map.addMarker({
		            lat: 40.7998984,
					lng: -74.4813096,
		            title: 'Jim O Brien Architecture'
		        });
			});
        }

    };
}();