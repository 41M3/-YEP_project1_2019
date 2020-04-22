
//Gaetan - Get the CSV on Github

//la fonction retourne le nom du fichier avec le format : 04-20-2020.csv
function getFileName() {
  var fileName;
  let date_ob = new Date();

  let date = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  let year = date_ob.getFullYear();

  date = date - 2; //parce que le github a 2 jours de retard
  fileName = month + "-" + date + "-" + year + ".csv";
  return (fileName)
}

//la fonction copie le dernier fichier du github et le colle 
function downloadCSVFile() {
  const http = require('https');
  const fs = require('fs');

  const file = fs.createWriteStream(fileName);
  const request = http.get("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/" + fileName, function(response) {
    response.pipe(file);
  });
}

//ligne 2902 - Afghanistan (premier pays)

function fileToArray(fileName) {
}




var fileName = getFileName();
downloadCSVFile(fileName);
fileToArray(fileName);

