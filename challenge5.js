function stringManipulation(word) {
  let str = word.charAt(0);

  //   console.log("cek ", str);
  let result = word;
  if ("a" === str) {
    return result;
    // console.log(word);
  } else {
    word = word.slice(1);
    let hasil = word + str + "nyo";
    return hasil;
  }
}

// stringManipulation("ayam");
console.log(stringManipulation("ayam"));
console.log(stringManipulation("bebek"));
