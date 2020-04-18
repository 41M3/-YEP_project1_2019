/*const L = window.L;
var map = L.map( 'map', {
    center: [20.0, 5.0],
    minZoom: 2,
    maxZoom: 8,
    zoom: 2
})*/

//const map = require('./map');
//const OpenStreetMap_Map = require('./map');
//const Filepath = require('./filepath');
const Papa = ('papaparse');
//const csv = require('csv-parse');

//var parsedData = [];
//const csvFilePath = Filepath.getfilepath();
//const file = '../data/04-16-2020.csv';

/*
function drawCircle(Data) {

    for (var i = 0; i < Data.length; ++i ) {
        console.log(Data[i].Combined_Key);
        L.circle([parseFloat(Data[i].Lat), parseFloat(Data[i].long_)], {radius: parseFloat(Data[i].Confirmed), color: "#FF0000", weight: 2})
            .bindPopup(Data[i].Combined_Key + "last update" + Data[i].Last_Update)
            .addTo(map);
    }
}
*/

function parsing(file) {
    return new Promise(function(complete, error) {
        Papa.parse(file, {
            header: true,
            complete, error });
    });
};

/*parsing(fs.createReadStream(file))
    .then(function(result) {
        console.log(result.data);
        console.log(result.data[3041].Country_Region);
        //drawCircle(result.data);
    });*/

/*
    [0]'FIPS',           [1]'Admin2',
    [2]'Province_State', [3]'Country_Region',
    [4]'Last_Update',    [5]'Lat',
    [6]'Long_',          [7]'Confirmed',
    [8]'Deaths',         [9]'Recovered',
    [10]'Active',        [11]'Combined_Key'
*/

exports = {parsing};

/*['FIPS','Admin2','Province_State','Country_Region','Last_Update','Lat','Long_','Confirmed','Deaths','Recovered','Active','Combined_Key']*/
/*['Province_State','Country_Region','Last_Update','Lat','Long_','Confirmed','Deaths','Recovered','Active','Combined_Key']*/


//async function parsing() {
//    fs.createReadStream(Filepath.getfilepath())
//        .pipe(csv())
//        .on('data', (data) => results.push(data))
//        .on('end', () => {
//           // console.log(results[3042][3]);
//            return (results);
//        });
//}
