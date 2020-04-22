//GAETAN get and parse CSV file

const http = require('https');
const fs = require('fs');
const csv = require('csv-parser');

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

function parseGetData(fileName, response, then) {
    var tab = [];

    const file = fs.createWriteStream(fileName);
  response.pipe(file);

  file.on('finish', () => {
        fs.createReadStream(fileName)
          .pipe(csv())
          .on('data', (row) => {
            tab.push(row)
          })
          .on('end', () => {
              then(tab)
          });
        })
}

function readFile(then) {
    const fileName = getFileName();

  http.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + fileName, function(response) {
    parseGetData(fileName, response, then)
  })
}

function processFunction(tab) {
    console.log(tab);
}

readFile(processFunction);