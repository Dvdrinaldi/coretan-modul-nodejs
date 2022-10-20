// impor modul momentjs
var moment = require("moment");
var salam = require("./salam");

// menggunakan modul momentjs
console.log(salam.salamPagi());
console.log("Sekarang: " + moment().format('D MMMM YYYY, h:mm:ss a'));
