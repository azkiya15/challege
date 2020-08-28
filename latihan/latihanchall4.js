function indexPrime(param1) {
  //buat fungsi utk membuktikan prima atau bukan
  function prima(n) {
    if (n < 2) return false;
    let maks = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= maks; i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }

  //utk menampung hasil prima. = [2,3,5,7,11,13,......]
  let hasilIndex = [];

  for (let index = 0; index <= 500000; index++) {
    if (prima(index)) {
      hasilIndex.push(index);
    }
  }

  //utk menampung hasil index yg dicari
  let result = [];
  for (let i = 0; i < hasilIndex.length; i++) {
    result = hasilIndex[param1 - 1];
  }

  return result;
}

console.log(indexPrime(4));
console.log(indexPrime(500));
console.log(indexPrime(37786));
