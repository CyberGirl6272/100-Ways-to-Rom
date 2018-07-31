function initMap() {
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 }
  });
  directionsDisplay.setMap(map);
  calculateAndDisplayRoute()



  function calculateAndDisplayRoute() {
    navigator.geolocation.getCurrentPosition(function (position) {
     var origin = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    directionsService.route({
      origin,
      destination: 'Rom',
      travelMode: 'DRIVING'
    }, function (response, status) {
        if (status === 'OK') {
          directionsDisplay.setDirections(response);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });
    });
  }
}
