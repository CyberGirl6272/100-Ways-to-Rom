function initialize(coords) {
  let latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
  let latlngRom = new google.maps.LatLng(-25, 131);

  let myOptions = {
    zoom: 8,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  let map = new google.maps.Map(document.getElementById("pos"), myOptions);

  let marker = new google.maps.Marker({
    position: latlng,
    map,
    title: "Hier bist du :)"
  });

  // var myLatLng = {lat: -25.363, lng: 131.044};

  let markerRom = new google.maps.Marker({
    position: latlngRom,
    map,
    title: "Hello World!"
  });
}

navigator.geolocation.getCurrentPosition(
  function(position) {
    initialize(position.coords);
  },
  function() {
    document.getElementById("pos").innerHTML =
      "Deine Position konnte leider nicht ermittelt werden";
  }
);

function initMap(params) {}
