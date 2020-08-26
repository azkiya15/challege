function romawi(num) {
  let desimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romawi = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let hasil = "";

  for (let i = 0; i <= desimal.length; i++) {
    
    while (desimal[i] <= num) {
           hasil=hasil+romawi[i]; 
           num=num-desimal[i];
    }

  }
  return hasil;
}

console.log(romawi(1453));
