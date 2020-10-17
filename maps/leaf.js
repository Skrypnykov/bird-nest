// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

var map = L.map( 'map', {
  style: 'mapbox://styles/osmua/ck4wswg1w00c81clktu2l8ekz',
  center: [49.3, 31.25],
  minZoom: 6,
  zoom: 6,
  scrollWheelZoom: false,  
  zoomControl: false
});

// legent and control 
new L.Control.Zoom({ 
  position: 'bottomright' 
}).addTo(map);

// marker

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
  popupAnchor: [-2, -14]
});

var myIconRed = L.icon({
  iconUrl: myURL + 'images/red24.png',
  iconRetinaUrl: myURL + 'images/red48.png',
  iconSize: [15, 24],
  iconAnchor: [9, 21],
  popupAnchor: [-2, -14]
});

var myIconGreen = L.icon({
  iconUrl: myURL + 'images/green24.png',
  iconRetinaUrl: myURL + 'images/green48.png',
  iconSize: [15, 24],
  iconAnchor: [9, 21],
  popupAnchor: [-2, -14]
});

var myIconYellow = L.icon({
  iconUrl: myURL + 'images/yellow24.png',
  iconRetinaUrl: myURL + 'images/yellow48.png',
  iconSize: [15, 24],
  iconAnchor: [9, 21],
  popupAnchor: [-2, -14]
});

// markerClusterGroup
var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i ) {
  var popup = '<br/><b>місто:</b> ' + markers[i].city +
              '<br/><b>координати:</b> ' + markers[i].lat + '; '+ markers[i].lng +
              '<br/><b>статус:</b> ' + markers[i].st;

  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIconYellow} )
                  .bindPopup( popup );
  markerClusters.addLayer( m );
}
map.addLayer( markerClusters );

// ручное добавление маркера 
var marker = L.marker([48.473734, 37.082929], {icon: myIconGreen} );
marker.bindPopup('<p><b>cтатус:</b> виконано заходи орнітологічної безпеки<br/><b>координати:</b> 48.473734, 37.082929</p>').openPopup();
marker.addTo(map);

var marker = L.marker([48.749060, 39.260875], {icon: myIconRed} );
marker.bindPopup('<p><b>cтатус:</b> потребують перевірки<br><b>координати:</b> 48.749060, 39.260875</p>').openPopup();
marker.addTo(map);

var marker = L.marker([48.344774, 33.504967], {icon: myIconYellow} );
marker.bindPopup('<p><b>cтатус:</b> перевірено<br><b>координати:</b> 48.344774, 33.504967</p>').openPopup();
marker.addTo(map);