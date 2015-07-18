app.controller("MapsController", function($scope){

console.log('maps loaded')
function initialize() {
  var myLatlng = new google.maps.LatLng(37.7642251,-121.8902997);
  var mapOptions = {
    zoom: 20,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Kaya</h1>'+
      '<img src="http://goo.gl/nPPq4q" height=100 width=100>'+
      '<br>' + 
      '<div id="bodyContent">'+
      '<br>'+
      '<p><b>Address: </b> 506 Adriatic Court</p>'+
      '<br>'+
      '<p><b>Description: </b>A nice and friendly German Shepherd dog who belongs to the creator of this application.</p>'

      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Kaya'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

});