"use strict"
/*
	Dosyanızının verileri satırlara ayrılmış olmalıdır.
*/
var fs = require('fs');
var dosya = fs.readFileSync('dosyaKonumu/dosyaAdi.txt'); // Dosya okuma
var satirlar = dosya.toString().split('\n'); // Satırlara ayırma
var jsonFile = [];

for (var i = 0; i < satirlar.length; i++) {
  var object = satirlar[i].toString();
  jsonFile.push(object); // diziye satırlar eklenir
}

jsonFile = JSON.stringify(jsonFile); // dizi json formatına dönüştürülür.

fs.writeFile('dosyaKonumu/yeniDosya.json',jsonFile,function(err){ // Dosya yazma
  if(err) throw err;
  console.log('Dosyanız hazır.');
});
