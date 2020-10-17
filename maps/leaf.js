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
  popupAnchor: [0, -14]
});

var myIconRed = L.icon({
  iconUrl: myURL + 'images/red24.png',
  iconRetinaUrl: myURL + 'images/red48.png',

  iconSize: [15, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var myIconGreen = L.icon({
  iconUrl: myURL + 'images/green24.png',
  iconRetinaUrl: myURL + 'images/green48.png',
  iconSize: [15, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var myIconYellow = L.icon({
  iconUrl: myURL + 'images/yellow24.png',
  iconRetinaUrl: myURL + 'images/yellow48.png',
  iconSize: [15, 24],
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

  var m = L.marker( [markers[i].lat, markers[i].lng], {icon: myIconGreen} )
                  .bindPopup( popup );
  markerClusters.addLayer( m );
}
map.addLayer( markerClusters );

// ручное добавление маркера 
var marker = L.marker([48.473734, 37.082929], {icon: myIconGreen} );
marker.bindPopup('<p>Статус: виконано заходи орнітологічної безпеки<br>координати: 48.473734, 37.082929</p>').openPopup();
marker.addTo(map);

var marker = L.marker([48.749060, 39.260875], {icon: myIconRed} );
marker.bindPopup('<p>Статус: потребують перевірки<br>координати: 48.749060, 39.260875</p>').openPopup();
marker.addTo(map);

var marker = L.marker([48.344774, 33.504967], {icon: myIconYellow} );
marker.bindPopup('<p>Статус: перевірено<br>координати: 48.344774, 33.504967</p>').openPopup();
marker.addTo(map);