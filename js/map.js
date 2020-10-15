// === Map === 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2ZsYTdkbzEwZGdqMnFwc2dyMHBnZTl0In0.XQ6qUunUpxoUThIMrGLbPQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/osmua/ck4wswg1w00c81clktu2l8ekz',
    center: [32, 49.55],
    zoom: 5.2,
});

// Mapcontrol
var fullscreen = new mapboxgl.FullscreenControl()
map.addControl(fullscreen, 'bottom-right');

map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

// Geolocate Control
var geoLocation = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
        trackUserLocation: true
});
map.addControl(geoLocation, 'bottom-right');

// Toggle zoom scrolling
map.scrollZoom.disable();
map.on('click', function() {
    if (map.scrollZoom.isEnabled()) {
        map.scrollZoom.disable()
    } else {
        map.scrollZoom.enable()
    }
});

// Map markers 
var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([37.082929, 48.473734])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat([39.260875, 48.749060])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'rgba(255, 215, 0, 1)' })
.setLngLat([33.503404, 48.345026])
.addTo(map);
