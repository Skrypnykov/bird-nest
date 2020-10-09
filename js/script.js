$(document).ready(function(){
    const slider = $("#slider").owlCarousel({
        loop:true,
        margin:10,
        items:4,
        nav:false,
        dots:true,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            }
        }
    });
});

// Map 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXBueWtvdiIsImEiOiJja2ZsYTdkbzEwZGdqMnFwc2dyMHBnZTl0In0.XQ6qUunUpxoUThIMrGLbPQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/osmua/ck4wswg1w00c81clktu2l8ekz',
    center: [32, 49.55],
    zoom: 5.2,
});

// mapcontrol
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

// markers 
var marker = new mapboxgl.Marker({ color: 'red' })
.setLngLat([37.55, 47.15])
.addTo(map);

var marker = new mapboxgl.Marker({ color: 'green' })
.setLngLat([30.51, 50.47])
.addTo(map);
