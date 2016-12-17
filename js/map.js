var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat:48.8471, lng:2.4382},
    zoom: 17
  });
  google.maps.event.addDomListener(window, "load", initialize);
}
