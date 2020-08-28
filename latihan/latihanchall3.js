function romawi(n){
    let angka = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let hasil = "";

    for(let i=0; i<=angka.length; i++){
        while(angka[i]<=n){
            hasil=hasil+romawi[i];
            n=n-angka[i];
        }
    }
    return hasil;
}

console.log("Script untuk konversi angka ke romawi\n");
console.log("=======================================");
console.log("  angka  |    expected   |   result    ");
console.log("  4      |     IV        |",romawi(4));
console.log("  9      |     IX        |",romawi(9));
console.log("  13     |     XIII      |",romawi(13));
console.log("  1453   |     MCDLIII   |",romawi(1453));
console.log("  1646   |     MDCXLVI   |",romawi(1646));