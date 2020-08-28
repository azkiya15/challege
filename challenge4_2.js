function isPrime(value) {

  //fungsi utk membuktikan prima atau bukan
  function prima(n) {
    if (n < 2) return false;

    let max = Math.floor(Math.sqrt(n));
    for (let number = 2; number <= max; number++) {
      if (n % number == 0) {
        return false;
      }
    }
    return true;
  }

  let hasilDeretPrima = [];

  for (let index = 0; index <= 500000; index++) {
    if (prima(index)) {
      hasilDeretPrima.push(index);
    }
  }

  let hasilAkhir = [];

  for (let index1 = 0; index1 < hasilDeretPrima.length; index1++) {
    hasilAkhir = hasilDeretPrima[value - 1];
  }
  return hasilAkhir;
}

console.log(isPrime(4));
console.log(isPrime(500));
console.log(isPrime(37786));
