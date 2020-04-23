/*
*   EPITECH PROJECT, 2019
*   Interactive Map
*   File author:
*   Aimé Motti <aime.motti@epitech.eu>
*/

function interactiveMap(csv_data) {
    var confirmedCircle = L.layerGroup();
    var deathsCircle = L.layerGroup();
    var recoveredCircle = L.layerGroup();
    var activeCircle = L.layerGroup();

    //document.write(dbdd[1].name);

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

    var data = csv_data.records

    const idx = {
        lat: csv_data.fields.indexOf('Lat'),
        long: csv_data.fields.indexOf('Long_'),
        recovered: csv_data.fields.indexOf('Recovered'),
        name: csv_data.fields.indexOf('Combined_Key'),
        active: csv_data.fields.indexOf('Active'),
        deaths: csv_data.fields.indexOf('Deaths'),
        confirmed: csv_data.fields.indexOf('Confirmed'),
    };

    for (var i in data) {
        let row = data[i];

        let clamerde = row[idx.name].match("China") ? 50 : 1.5

        if (row[idx.lat] != null && row[idx.long] != null) {
            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {radius: clamerde * row[idx.confirmed], color: "#03224C", weight: 2})
                .bindPopup("Pays " + row[idx.name] + ", y'en a " + row[idx.confirmed] + " t'approche pas frr", {Width: "auto"})
                .addTo(confirmedCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {radius: clamerde * row[idx.deaths], color: "#FF0000", weight: 2})
                .bindPopup("Pays " + row[idx.name] + ", y'en a " + row[idx.deaths] + " t'approche pas frr", {Width: "auto"})
                .addTo(deathsCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {radius: clamerde * row[idx.recovered], color: "#34C924", weight: 2})
                .bindPopup("Pays " + row[idx.name] + ", y'en a " + row[idx.recovered] + " t'approche pas frr", {Width: "auto"})
                .addTo(recoveredCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {radius: clamerde * row[idx.active], color: "#FFA500", weight: 2})
                .bindPopup("Pays " + row[idx.name] + ", y'en a " + row[idx.active] + " t'approche pas frr", {Width: "auto"})
                .addTo(activeCircle);
        }
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

    var cases = {
        "Confirmed": confirmedCircle,
        "Deaths": deathsCircle,
        "Recovered": recoveredCircle,
        "Active": activeCircle
    };

    L.control.layers(baseLayers, cases).addTo(map);
}


function getFileName() {
  var fileName;
  let date_ob = new Date();

  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();

  date = date - 2; //parce que le github a 2 jours de retard
  fileName = month + "-" + date + "-" + year + ".csv";
  return (fileName)
};


function parseData(data) {
    CSV.fetch({data: data}).done(function(parsed) {
        interactiveMap(parsed);
    })
}

$.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + getFileName(), function(data) {
    parseData(data)
})

