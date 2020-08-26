function indexPrima(param1) {
  let prima = [];
  for (let i = 0; i <= param1; i++) {
    if (param1 === 1) {
      return false;
    } else if (
      param1 % 2 !== 0 &&
      param1 % 3 !== 0 &&
      param1 % 5 !== 0 &&
      param1 % 7 !== 0
    ) {
      return true;
    } else if (param1 === 2 || param1 === 3 || param1 === 5 || param1 === 7) {
      return true;
    } else {
      return false;
    }
    break;
  }
}

console.log(indexPrima(2));
