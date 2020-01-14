export default async function getMapBox(longitude, latitude) {
    
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW50b25kcm96ZG92IiwiYSI6ImNrNDY0N2xjMjBmMjczbXFvNGRrN2w1a2cifQ.bahkhDfoIOpwQvAPFCNt5A';

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [latitude, longitude], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
}