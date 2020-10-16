// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'map', {
  style: 'mapbox://styles/osmua/ck4wswg1w00c81clktu2l8ekz',
  center: [49.3, 31.25],
  minZoom: 6,
  zoom: 6,
  scrollWheelZoom: false,  
  zoomControl: false
});

new L.Control.Zoom({ 
  position: 'bottomright' 
}).addTo(map);


L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a','b','c']
}).addTo( map );

var myURL = jQuery( 'script[src$="leaf.js"]' ).attr( 'src' ).replace( 'leaf.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

// markerClusterGroup
var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i ) {
  var popup = markers[i].name +
              '<br/>' + markers[i].city +
              '<br/><b>IATA/FAA:</b> ' + markers[i].iata_faa +
              '<br/><b>ICAO:</b> ' + markers[i].icao +
              '<br/><b>Altitude:</b> ' + Math.round( markers[i].alt * 0.3048 ) + ' m' +
              '<br/><b>Timezone:</b> ' + markers[i].tz;

  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIcon} )
                  .bindPopup( popup );
  markerClusters.addLayer( m );
}
map.addLayer( markerClusters );

