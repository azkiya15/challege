function sumOfDigits(n) {
  let panjang = n.toString();
  let arr = panjang.split("").map(Number); //Array-number result

  // let hasil;
  if (arr.length == 1) {
    return arr.toString();
  } else {
    let pengali = 1;
    for (let index = 0; index < arr.length; index++) {
      // hasil = (arr[index]) * (arr[index+1]);
      pengali = pengali * arr[index];
    }
    return sumOfDigits(pengali);
  }
}

console.log(sumOfDigits(39));
