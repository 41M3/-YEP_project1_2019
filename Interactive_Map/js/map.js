const L = window.L;
const map = L.map( 'map', {
  center: [20.0, 5.0],
  minZoom: 2,
  maxZoom: 8,
  zoom: 2
})

/* PLAN */
const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

/* SATELLITE */
const OpenStreetMap_Map = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

OpenStreetMap_Map.addTo(map);

/*
if (confirm("Passer à l'affichage satellite ?"))
  OpenStreetMap_Map.addTo(map);
else
  OpenStreetMap_Mapnik.addTo(map);
*/


function drawCircle() {
  for (var i = 0; i < dbdd.length; ++i) {
    L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
        .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
        .addTo(map);
  }
}

drawCircle();