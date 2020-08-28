function weirdMultiply(sentences) {
  let str = sentences.toString();
  let arr = str.split("").map(Number);
  
//   console.log(arr);

  if (arr.length == 1) {
    return arr.toString();
  } else {
    let pengali = 1;
    for (let i = 0; i < arr.length; i++) {
      pengali = pengali * arr[i];
    }
    return weirdMultiply(pengali);
  }
}

console.log(weirdMultiply(39));
