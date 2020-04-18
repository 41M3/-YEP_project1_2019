const fs = ('file-system');
const file = '../data/04-16-2020.csv';

function initialize() {
    var map = L.map('map').setView([10.0, 10.0], 2); // LIGNE 18

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 2
    });

    const ggRoadmap = new L.Google('ROADMAP');
    const ggSatellite = new L.Google('');
    const ggTerrain = new L.Google('TERRAIN');
    const ggHybrid = new L.Google('HYBRID');

    map.addLayer(ggRoadmap);
    map.addControl(new L.Control.Layers({
            //'OpenStreetMap': osmLayer,
            'Google Roadmap': ggRoadmap,
            'Google Satellite': ggSatellite,
            //'Google Terrain': ggTerrain,
            'Google Hybrid': ggHybrid
        }, {})
    );

    for (var i = 0; i < dbdd.length; ++i) {

        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(map);
    }

    parsing(fs.createReadStream(file)) // getfilepath()))
        .then(function (result) {
            L.marker([48.5, 2]).addTo(map)
                .bindTooltip("Les Granges-le-Roi", {permanent: true, direction: 'top'});
             console.log(result.data);
            //console.log(result.data[3041].Country_Region);
            drawCircle();
        });
}
