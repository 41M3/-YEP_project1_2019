
function initialize() {
    var confirmedCircle = L.layerGroup();
    var deathsCircle = L.layerGroup();
    var recoveredCircle = L.layerGroup();
    var activeCircle = L.layerGroup();

    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(confirmedCircle),
        L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(confirmedCircle),
        L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(confirmedCircle),
        L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(confirmedCircle);

    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(deathsCircle),
        L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(deathsCircle);

    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(recoveredCircle),
        L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(recoveredCircle),
        L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(recoveredCircle),
        L.marker([39.60, -104.8]).bindPopup('This is Aurora, CO.').addTo(recoveredCircle),
        L.marker([39.75, -105.23]).bindPopup('This is Golden, CO.').addTo(recoveredCircle)
        L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(recoveredCircle);

    for (var i = 0; i < dbdd.length; ++i) {
        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].recovered, color: "#03224C", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(confirmedCircle);

        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].recovered, color: "#FF0000", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(deathsCircle);

        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].recovered, color: "#34C924", weight: 2})
           .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
           .addTo(recoveredCircle);

        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].active, color: "#FFA500", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(activeCircle);
    }

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 2
    });

    var ggRoadmap = new L.Google('ROADMAP');
    var ggSatellite = new L.Google('');
    var ggTerrain = new L.Google('TERRAIN');
    var ggHybrid = new L.Google('HYBRID');


    var map = L.map('map', {
        center: [10.0, 10.0], //[39.73, -104.99],
        zoom: 2, //10,
        layers: [osmLayer, confirmedCircle]
    });

    var baseLayers = {
        'OpenStreetMap': osmLayer,
        'Google Roadmap': ggRoadmap,
        'Google Satellite': ggSatellite,
        'Google Hybrid': ggHybrid,
    };

    var overlays = {
        "Confirmed": confirmedCircle,
        "Deaths": deathsCircle,
        "Recovered": recoveredCircle,
        "Active": activeCircle
    };

    L.control.layers(baseLayers, overlays).addTo(map);
}
