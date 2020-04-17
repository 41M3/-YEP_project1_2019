/*
function drawCircle() {
    for (var i = 0; i < dbdd.length; ++i) {
        L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
            .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"})
            .addTo(map);
    }
}

console.log("[circle] " + drawCircle())

module.exports = {drawCircle};
*/
/*
for (var i=0; i < dbdd.length; ++i )
{
  L.circle([dbdd[i].lat, dbdd[i].lng], {radius: dbdd[i].nbr, color: "#FF0000", weight: 2})
      .bindPopup("Pays " + '<a href="' + dbdd[i].url + '" target="_blank">' + dbdd[i].name + '</a>', {Width: "auto"} )
      .addTo(map);
}
*/

/*
for (var i=1; i < results.length; ++i )
{
  L.circle([parseFloat(results[i][5]), parseFloat(results[i][6])], {radius: parseFloat(results[i][7]), color: "#FF0000", weight: 2})
      .bindPopup(results[i][11] + "last update" + results[i][4])
      .addTo(map);
}
*/

/*
    [0]'FIPS',           [1]'Admin2',
    [2]'Province_State', [3]'Country_Region',
    [4]'Last_Update',    [5]'Lat',
    [6]'Long_',          [7]'Confirmed',
    [8]'Deaths',         [9]'Recovered',
    [10]'Active',        [11]'Combined_Key'
*/