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
  
 

const readline = require('readline');

const cetak = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

cetak.question('tulis kalimatmu disini > ', (sentences) =>{
    console.log(stringManipulation(sentences));

    cetak.close();
})