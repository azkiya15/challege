function pola(str) {
  let array = str.split(" ");

  let change1;
  let change2;
  let hasilarr = [];
  for (let i = 0; i <= 9; i++) {
    change1 = array[0].replace(/#/g, i);
    for (let j = 0; j <= 9; j++) {
      change2 = array[4].replace(/#/g, j);

      let pengali = Number(array[2]);
      let nomor1 = Number(change1);
      let nomor2 = Number(change2);

      if (nomor1 * pengali === nomor2) {
        hasilarr.push(i, j);
      }
    }
  }
  return hasilarr;
}
console.log(pola("42#3 * 188 = 80#204"));
