function sentencesManipulation(sentences) {
  let arr = sentences.split(" ");
  let kata = sentences.slice(0);
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    let pertama = arr[i].charAt(0);
    if (
      pertama === "a" ||
      pertama === "i" ||
      pertama === "u" ||
      pertama === "e" ||
      pertama === "o"
    ) {
      let masuk = arr[i];
      hasil.push(masuk);
    } else {
      let first = (arr[i] = arr[i].slice(0));
      gabung = first + pertama + "nyo";
      hasil.push(gabung);
    }
  }
  return hasil.join(" ");
}

console.log(sentencesManipulation("ibu pergi ke pasar bersama aku"));
