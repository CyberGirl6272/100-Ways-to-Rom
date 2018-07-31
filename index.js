

 function initialize(coords) {
      var latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
    //  var latlngRom = new google.maps.LatLng('12.4963655', '41.9027835')
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

   /*   var markerRom = new.maps.Marker({
        position: latlngRom,
        map: map,
        title: "Das ist dein Ziel, ROM!"
      })*/
    }

    navigator.geolocation.getCurrentPosition(function (position) {
      initialize(position.coords);
    }, function () {
      document.getElementById('pos').innerHTML = 'Deine Position konnte leider nicht ermittelt werden';
    });

    function initMap(params) {

    }
