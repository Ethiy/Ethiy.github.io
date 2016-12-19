var map;

function initMap() {
    var coordinates = new google.maps.LatLng (48.8471, 2.4382)
    var options = {
        zoom: 17,
        center: coordinates
    };
    map = new google.maps.Map(
        document.getElementById('map-canvas'), 
        options
        );
};

google.maps.event.trigger(map, "resize");
