let dersSayisi = Number(prompt("Girceğiniz Ders Sayısını Yazınız."));
let dersNotlari = [];

for (let i = 0; i < dersSayisi; i++) {
  let dersNotu = Number(prompt("Ders Notlarınızı Giriniz"));
  if (dersNotu != null && dersNotu != "") {
    dersNotlari.push(dersNotu);
  }
}

let toplamNot = 0;

for (let i = 0; i < dersSayisi; i++) {
  toplamNot = toplamNot+dersNotlari[i];
  console.log('Ders Notları: '+dersNotlari[i]);
}
console.log('Ders Notları Toplamı: '+toplamNot);

let ortalamaNot =toplamNot / dersSayisi ;
console.log('Ders Notu Ortalaması: ' + ortalamaNot)

if (ortalamaNot < 50 ) {
  console.log('Harf Notunuz FF Kaldınız');
} else if (ortalamaNot >= 50 && ortalamaNot < 60) {
  console.log('Harf Notunuz DD Koşullu Geçtiniz');
} else if (ortalamaNot >=60 && ortalamaNot < 70) {
  console.log('Harf Notunuz CC Geçtiniz');
} else if (ortalamaNot >=70 && ortalamaNot < 85) {
  console.log('Harf Notunuz BB Geçtiniz');
}  else {
  console.log('Harf Notunuz AA Geçtiniz');
}

