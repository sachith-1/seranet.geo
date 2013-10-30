
$(function () {

    var map = new google.maps.Map(document.getElementById("map_canvas"),
	{
	    center: new google.maps.LatLng(8.0000, 81.0000),
	    zoom: 8,
	    scrollwheel: false,
	    mapTypeId: 'roadmap'
	});
    var infoWindow = new google.maps.InfoWindow;

});


function loadtoMap(mapArray) {


    var markerArray = [];


    var map_canvas = document.getElementById('map_canvas');
    var map = new google.maps.Map(map_canvas, mapOptions);


    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(8.0000, 81.0000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }


    var map = new google.maps.Map(map_canvas, mapOptions);


    var marker;



    for (var i = 0; i < mapArray.length; i++) {



        if (mapArray[i].coordinate.latitude === "null" && mapArray[i].coordinate.longitude === "null") {


            mapArray[i].coordinate.latitude = 7.087265;
            mapArray[i].coordinate.longitude = 79.76306;
        }

        marker = new google.maps.Marker({

            position: new google.maps.LatLng(mapArray[i].coordinate.latitude, mapArray[i].coordinate.longitude),
            map: map,
            title: (mapArray[i].name + ' :' + "  " + mapArray[i].address),
            animation: google.maps.Animation.DROP,
            icon: './images/geoicon.png',


            labelname: mapArray[i].name,
            // primaryColor: "#0000FF",

        });

        var label = new Label({
            map: map
        });
        label.bindTo('position', marker, 'position');
        label.bindTo('text', marker, 'labelname');




    }




    //google.maps.event.addDomListener(window, 'load', initialize);

}

var clear = function () {
    console.log("k");
    var mapOptions = {
        zoom: 8,
        center: new google.maps.LatLng(8.0000, 81.0000),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
}



//   markersArray.push(marker);
