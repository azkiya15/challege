// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`);
//   });

if(process.argv[2] && process.argv[2]==='question.json'){
    "use strict";
    let jsonData = require("./question.json");
    
    const readline = require("readline");
    const cetak = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    let salah = 0;
    let count = 0;
    function tebakan(err) {
        if(count===3){
            console.log("Terimakasih! ");
            process.exit();
        }
      let qst = jsonData[count].pertanyaan;
      cetak.question(qst, (jawab) => {
        if (jawab == jsonData[count].jawaban) {
            console.log("\n");
          count = count + 1;
          tebakan();
        } else if (jawab == "skip") {
          console.log("\n");
          count = count + 1;
          tebakan();
        } else {
            salah = salah + 1;
          console.log(`Anda kurang beruntung! Anda sudah salah ${salah} Coba lagi\n`);
          
          tebakan();
        }
        
        
      });
      
    }
    
    tebakan();
    
}
else{
    console.log("ulang");
}

