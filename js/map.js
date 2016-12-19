var map;

function initMap() {
    var coordinates = new google.maps.LatLng (48.844660, 2.424577)
    var options = {
        zoom: 12,
        center: coordinates
    };
    map = new google.maps.Map(
        document.getElementById('map-canvas'), 
        options
        );
    var marker = new google.maps.Marker({
        position: coordinates;
        map: map,
        title: 'Office K316 - IGN France'
    });
};

google.maps.event.trigger(map, "resize");
