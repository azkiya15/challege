function stringManipulation(sentences) {
    let str = sentences.slice(0);
  //    return str;

  let res = sentences.split(" "); //Array result
//   return res;

let kata = [];
  for (let index = 0; index < res.length; index++) {
    let array = res[index].charAt(0);
    // console.log(array);
    if(array==="a" || array==="i" || array==="u" || array==="e" || array==="o"){
        let result = res[index];
        kata.push(result);
        // console.log(res[index]);
    }else{
        
        let change = res[index] = res[index].slice(1);
        // console.log(change + array + "nyo");
        let hasil = change + array + "nyo";
        kata.push(hasil);
    }
  }
  
  return kata.join(' ');

}

console.log(stringManipulation("ibu pergi ke pasar bersama aku"));
