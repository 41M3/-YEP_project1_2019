/*
*   EPITECH PROJECT, 2019
*   Interactive Map
*   author:
*   Aimé Motti <aime.motti@epitech.eu>
*/

function interactiveMap(csv_data) {
    var confirmedCircle = L.layerGroup();
    var deathsCircle = L.layerGroup();
    var recoveredCircle = L.layerGroup();
    var activeCircle = L.layerGroup();

    //document.write(dbdd[1].name);

    var data = csv_data.records;

    const idx = {
        lat: csv_data.fields.indexOf('Lat'),
        long: csv_data.fields.indexOf('Long_'),
        recovered: csv_data.fields.indexOf('Recovered'),
        name: csv_data.fields.indexOf('Combined_Key'),
        active: csv_data.fields.indexOf('Active'),
        deaths: csv_data.fields.indexOf('Deaths'),
        confirmed: csv_data.fields.indexOf('Confirmed'),
        update: csv_data.fields.indexOf('Last_Update'),
    };

    for (var i in data) {
        let row = data[i];

        let china = row[idx.name].match("China") ? 10 : 2;

        if (row[idx.lat] != null && row[idx.long] != null) {
            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {
                radius: china * row[idx.confirmed],
                color: "#03224C",
                weight: 2
            })
                .bindPopup("Location: " + row[idx.name] + ", " + row[idx.confirmed] + " confirmed cases" + "</br>" + "Last update: " + row[idx.update], {Width: "auto"})
                .addTo(confirmedCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {
                radius: 10 * row[idx.deaths],
                color: "#FF0000",
                weight: 2
            })
                .bindPopup("Location: " + row[idx.name] + ", " + row[idx.deaths] + " deaths cases" + "</br>" + "Last update: " + row[idx.update], {Width: "auto"})
                .addTo(deathsCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {
                radius: china * row[idx.recovered],
                color: "#34C924",
                weight: 2
            })
                .bindPopup("Location: " + row[idx.name] + ", " + row[idx.recovered] + " recovered cases" + "</br>" + "Last update: " + row[idx.update], {Width: "auto"})
                .addTo(recoveredCircle);

            L.circle([parseFloat(row[idx.lat]), parseFloat(row[idx.long])], {
                radius: china * row[idx.active],
                color: "#FFA500",
                weight: 2
            })
                .bindPopup("Location: " + row[idx.name] + ", " + row[idx.active] + " active cases" + "</br>" + "Last update: " + row[idx.update], {Width: "auto"})
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
    var ggHybrid = new L.Google('HYBRID');


    var map = L.map('map', {
        center: [10.0, 10.0],
        zoom: 2,
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

/*
*   Parsing
*   author:
*   Gaëtan CHAUGNY <gaetan.chaugny@epitech.eu>
*/

function getFileName() {
    var fileName;
    let date_ob = new Date();

    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hour = date_ob.getHours();

    if (hour > 2)
        date = date - 1;
    else
        date = date - 2;

    fileName = month + "-" + date + "-" + year + ".csv";
    return (fileName);
}


function parseData(data) {
    CSV.fetch({data: data}).done(function (parsed) {
        interactiveMap(parsed);
        lastup(parsed);
    })
}

$.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + getFileName(), function (data) {
    parseData(data)
})

