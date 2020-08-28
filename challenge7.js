// function weirdMultiply(sentences){
//     let res = sentences.split(" ");
//     console.log(res);
// }

// weirdMultiply("36");

function sumOfDigits(n) {
  //   if (num == 0) {
  //     return 0;
  //   }

  let panjang = n.toString();
  let arr = panjang.split("").map(Number); //Array-number result
  //   let arr = panjang.split(""); //Array-number result
  // return arr.length;

  //   let resultKali = arr.map((el) => {
  //     return el*
  //   });
//   console.log("loopFungsi", n);

    let hasil;
  if (arr.length == 1) {
    return arr.toString();
  } else {
    let pengali = 1;
    for (let index = 0; index < arr.length; index++) {
      // hasil = (arr[index]) * (arr[index+1]);
      pengali = pengali * arr[index];
    }
    // console.log("pengali", penga li);
    return sumOfDigits(pengali);
  }



  //   return panjang;

  //   let bulat = Math.floor(n / 10);
  //   //  return bulat;
  //   let mod = n % 10;
  //   //   return mod;
  //   let hasil = mod * bulat;
  //   return hasil;
}

console.log(sumOfDigits(999));
