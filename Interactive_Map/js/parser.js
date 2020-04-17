const Filepath = require('./filepath');
const Papa = require('papaparse');
const csv = require('csv-parse');
const fs = require('fs');

const parsedData = [];
const csvFilePath = Filepath.getfilepath();
const file = fs.createReadStream(csvFilePath);
//const file = '../data/04-16-2020.csv'

function parsing() {
    Papa.parse(file, {
        header: true,
        transformHeader: header => header.trim(),
        step: function (result) {
            parsedData.push(result.data)
        },
        complete: function (results, file) {
            console.log('Complete', parsedData.length, 'records.');
            console.log(parsedData[3041].Country_Region);
            console.log(parsedData)
            console.log(parseFloat(parsedData[100].Confirmed) + parseFloat(parsedData[200].Confirmed))
            drawCircle(parsedData);
        }
    });
}

/*
    [0]'FIPS',           [1]'Admin2',
    [2]'Province_State', [3]'Country_Region',
    [4]'Last_Update',    [5]'Lat',
    [6]'Long_',          [7]'Confirmed',
    [8]'Deaths',         [9]'Recovered',
    [10]'Active',        [11]'Combined_Key'
*/

function drawCircle(Data) {
    for (var i = 0; i < Data.length; ++i ) {
        console.log(Data[i].Combined_Key);
        L.circle([Data[i].Lat, Data[i].long_], {radius: Data[i].Confirmed, color: "#FF0000", weight: 2})
            .bindPopup(Data[i].Combined_Key + "last update" + Data[i].Last_Update)
            .addTo(map);
    }
}


console.log("[parser] " + parsing())

module.exports = {parsing};

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
