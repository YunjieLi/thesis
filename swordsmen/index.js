mapboxgl.accessToken = 'pk.eyJ1IjoieXVuamllIiwiYSI6ImNpZnd0ZjZkczNjNHd0Mm0xcGRoc21nY28ifQ.8lFXo9aC9PfoKQF9ywWW-g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', //stylesheet location
    center: [120, 32], // starting position
    zoom: 4 // starting zoom
});