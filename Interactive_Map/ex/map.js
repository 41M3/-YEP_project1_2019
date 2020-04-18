const L = window.L;

function initialize() {
  var map = L.map('map').setView([10.0, 10.0], 2, {minZoom: 2}); // LIGNE 18

// OpenStreetMap
  var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
  });

  // Google Maps
  var ggRoadmap = new L.Google('ROADMAP');
  var ggSatellite = new L.Google('');
  var ggTerrain = new L.Google('TERRAIN');
  var ggHybrid = new L.Google('HYBRID');

  map.addLayer(osmLayer);
  map.addControl(new L.Control.Layers( {
        //'IGN': ignLayer,
        'OpenStreetMap': osmLayer,
        'Google Roadmap' : ggRoadmap,
        'Google Satellite': ggSatellite,
        'Google Terrain': ggTerrain,
        'Google Hybrid' : ggHybrid
      }, {})
  );
}

initialize();
//const map = L.map( 'map', {
//  center: [20.0, 5.0],
//  minZoom: 2,
//  maxZoom: 8,
//  zoom: 2
//})


///* PLAN */
//const OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//});
//
///* SATELLITE */
//const OpenStreetMap_Map = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
//  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
//});

/*
if (confirm("Passer à l'affichage satellite ?"))
  OpenStreetMap_Map.addTo(map);
else
  OpenStreetMap_Mapnik.addTo(map);
*/

//map.addLayer(osmLayer); // Le layer par défaut
/*
function drawCircle() {

  map.addLayer(OpenStreetMap_Map)
  //OpenStreetMap_Map.addTo(map);

  for (var i = 0; i < dbdd.length; ++i) {
    L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
        .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
        .addTo(map);
  }
}

drawCircle();*/