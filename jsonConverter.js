"use strict"
var fs = require('fs');
var dosya = fs.readFileSync('/home/ozgur/Desktop/blacklist_uniq.txt'); // Dosya okuma
var satirlar = dosya.toString().split('\n'); // Satırlara ayırma
var jsonFile = [];

for (var i = 0; i < satirlar.length; i++) {
  var object = satirlar[i].toString();
  jsonFile.push(object); // diziye satırlar eklenir
}

jsonFile = JSON.stringify(jsonFile); // dizi json formatına dönüştürülür.

fs.writeFile('/home/ozgur/Desktop/eposta-blacklist.json',jsonFile,function(err){ // Dosya yazma
  if(err) throw err;
  console.log('Dosyanız hazır.');
});
