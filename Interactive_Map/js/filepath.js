const today = new Date();
var d = today.getDate();
var m = today.getMonth();
const filepath = [];

function getfilepath() {
    if (d == 1 && m == 2 || m == 4 || m == 6 || m == 8 || m == 10 || m == 12) {
        d = 31;
        m -= 1;
    } else if (d == 1 && m == 3 || m == 5 || m == 7 || m == 9 || m == 11 || m == 1) {
        d = 30;
        m -= 1;
    }
    if (m < 12)
        m += 1;

    if (d > 1)
        d -= 1;
    if (m < 10 && d >= 10)
        filepath.push("../data/0" + m + "-" + d + "-2020.csv").toString();
    if (m >= 10 && d < 10)
        filepath.push("../data/" + m + "-0" + d + "-2020.csv").toString();
    if (m < 10 && d < 10)
        filepath.push("../data/0" + m + "-0" + d + "-2020.csv").toString();

    if (m >= 10 && d >= 10)
        filepath.push("../data/" + m + "-" + d + "-2020.csv").toString();

    return filepath[0]
}

console.log("[filepath.js] " + getfilepath());

module.exports = {getfilepath};
