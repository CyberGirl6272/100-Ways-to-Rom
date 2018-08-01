let directionsDisplay
let directionsService
let map

function initMap() {
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true,
  });
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: { lat: 41.85, lng: -87.65 }
  });
  directionsDisplay.setMap(map);
}

function getRandomCoordinates(){

  return fetch("./randomcoordinates.json").then(response=>response.json())
  }

let waypoints=[]

getRandomCoordinates().then(coordinates=>{
  waypoints= coordinates.map(coordinate=> ({
    location: coordinate,
    stopover:true
  }))
})




function calculateAndDisplayRoute() {
    navigator.geolocation.getCurrentPosition(function (position) {

      var origin = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    directionsService.route({
      origin,
      waypoints,
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

document.getElementById('submit').addEventListener('click', event=>{
  event.preventDefault()
  console.log('click')
  calculateAndDisplayRoute()
})
