var biodata = require("./modules/biodata");

var nama = "Ahmad Afif Shoidani";
var tmp = "Grobogan";
var tgl = "22 Juli 1993";
var almt = "Cikarang Selatan,Bekasi";

console.log("Nama : " + biodata.nama(nama));
console.log("Tempat Lahir : " + biodata.tempat(tmp));
console.log("Tanggal Lahir : " + biodata.tanggal(tgl));
console.log("Alamat : " + biodata.alamat(almt));
