function romawi(num) {
  if (num < 1) {
    return "";
  } else if (num >= 1000) {
    return "M" + romawi(num - 1000);
  } else if (num >= 900) {
    return "CM" + romawi(num - 900);
  } else if (num >= 500) {
    return "D" + romawi(num - 500);
  } else if (num >= 400) {
    return "CD" + romawi(num - 400);
  } else if (num >= 100) {
    return "C" + romawi(num - 100);
  } else if (num >= 90) {
    return "XC" + romawi(num - 90);
  } else if (num >= 50) {
    return "L" + romawi(num - 50);
  } else if (num >= 40) {
    return "XL" + romawi(num - 40);
  } else if (num >= 10) {
    return "X" + romawi(num - 10);
  } else if (num >= 9) {
    return "IX" + romawi(num - 9);
  } else if (num >= 5) {
    return "V" + romawi(num - 5);
  } else if (num >= 4) {
    return "IV" + romawi(num - 4);
  } else {
    return "I" + romawi(num - 1);
  }
}

console.log("Script testing untuk konversi romawi\n");
console.log("input | expected | result");
console.log("------|----------|-------");
console.log("4     | IV       | ", romawi(490));
console.log("9     | IX       | ", romawi(9));
console.log("13    | XIII     | ", romawi(13));
console.log("1453  | MCDLIII  | ", romawi(1453));
console.log("1646  | MDCXLVI  | ", romawi(1646));
