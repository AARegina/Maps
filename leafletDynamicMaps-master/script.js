
var mymap = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmVnaW5hMSIsImEiOiJja3F4eXoyeTkxMzQxMnBvMXFmdG5jNHdiIn0.Aq9Bv8MqdKY7ntBiy512pg'
}).addTo(mymap);

var layerGroup = L.layerGroup().addTo(mymap);

var markerArray = [];

mymap.on('click', function (e){
    var poplocation = e.latlng;
    var marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
    marker.addTo(layerGroup);
    var coordinates = [marker.getLatLng().lat, marker.getLatLng.lng];
    markerArray.push(coordinates);
    drawLine(markerArray);
});

function drawLine(marray){
    var polyline = L.polyline(marray, {color: 'red'}).addTo(mymap);
    polyline.addTo(layerGroup);
}


function testFunction() {
  mymap.closePopup();
  marker1 = L.marker([40.743720, -73.822030]).addTo(layerGroup)
  marker1.bindPopup("<b>Spiderman</b><br>New York, USA").openPopup();
}

function testFunction2() {
  mymap.closePopup();
  marker2 = L.marker([39.760979, -84.192200]).addTo(layerGroup)
  marker2.bindPopup("<b>Hulk</b><br>Ohio, USA").openPopup();
}

function testFunction3() {
  mymap.closePopup();
  marker3 = L.marker([54.464180, -110.182259]).addTo(layerGroup)
  marker3.bindPopup("<b>Wolverine</b><br>Cold Lake, Alberta, Canada").openPopup();
}
