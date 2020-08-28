function primaaa(){

    function prima(n) {
        if (n < 2) {
          return false;
        } else if (n === 2) {
          return true;
        } else if (n > 2) {
          for (let i = 2; i < n; i++) {
            if (n % i === 0) {
              return false;
            }
          }
          return true;
        }
      }

let hasilIndex = [];

  for (let index = 0; index <= 100; index++) {
    if (prima(index)) {
      hasilIndex.push(index);
        console.log(hasilIndex);
    }
  }
}

console.log(primaaa());



