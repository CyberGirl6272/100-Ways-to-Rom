

 function initialize(coords) {
      var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
  var latlngRom = new google.maps.LatLng(-25,131);

    var myOptions = {
        zoom: 8,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("pos"), myOptions);

      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Hier bist du :)"
      });



       // var myLatLng = {lat: -25.363, lng: 131.044};


        var markerRom = new google.maps.Marker({
          position: latlngRom,
          map: map,
          title: 'Hello World!'
        });

    }

    navigator.geolocation.getCurrentPosition(function (position) {
      initialize(position.coords);
    }, function () {
      document.getElementById('pos').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

     function initMap(params) {

     }
