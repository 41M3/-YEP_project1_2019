/*
*   EPITECH PROJECT, 2019
*   Interactive Map #2
*   File author:
*   Aimé Motti <aime.motti@epitech.eu>
*/

const fs = ('file-system');
const file = '../data/04-16-2020.csv';


function initialize() {
    var map = L.map('map').setView([10.0, 10.0], 2); // LIGNE 18

    var deathsCircle = layerGroup();
    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(deathsCircle);

    var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 2
    });

    const ggRoadmap = new L.Google('ROADMAP');
    const ggSatellite = new L.Google('');
    const ggTerrain = new L.Google('TERRAIN');
    const ggHybrid = new L.Google('HYBRID');

    for (var i = 0; i < dbdd.length; ++i) {

       L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(map);
    }

    map.addLayer(osmLayer);

    map.addControl(
        new L.Control.Layers({
            'OpenStreetMap': osmLayer,
            'Google Roadmap': ggRoadmap,
            'Google Satellite': ggSatellite,
            'Google Hybrid': ggHybrid,
           // 'Deaths' : deathsCircle
        }, {})
    );

/*
    function parsing(file) {
        return new Promise(function(complete, error) {
            Papa.parse(file, {
                header: true,
                complete: function(results) {
                    console.log(results[45]);
                    L.marker([48.5, 2]).addTo(map)
                        .bindTooltip("Les Granges-le-Roi", {permanent: true, direction: 'top'});
                }, error });
        });
    };

    parsing(fs.createReadStream(file)) // getfilepath()))
        .then(function (result) {
            L.marker([48.5, 2]).addTo(map)
                .bindTooltip("Les Granges-le-Roi", {permanent: true, direction: 'top'});
             console.log(result.data);
            //console.log(result.data[3041].Country_Region);
            drawCircle();
        });*/
}
