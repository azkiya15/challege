function stringManipulation(sentences) {

  let res = sentences.split(" "); //Array result

  let kata = [];
  for (let index = 0; index < res.length; index++) {
    let array = res[index].charAt(0);

    if (
      array === "a" ||
      array === "i" ||
      array === "u" ||
      array === "e" ||
      array === "o"
    ) {
      let result = res[index];
      kata.push(result);
    } else {
      let change = (res[index] = res[index].slice(1));

      let hasil = change + array + "nyo";
      kata.push(hasil);
    }
  }

  return kata.join(" ");
}

console.log(stringManipulation("ibu pergi ke pasar bersama aku"));
