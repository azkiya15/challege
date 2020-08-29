// 'use strict';
// const fs = require('fs');

// let rawdata = fs.readFileSync('question.json');
// let question = JSON.parse(rawdata);
// console.log(question);


// 'use strict';
// const fs = require('fs');

// fs.readFile('question.json', (err, data) => {
//     if (err) throw err;
//     let question = JSON.parse(data);
//     console.log(question);
// });

'use strict';

let jsonData = require('./question.json');

const readline = require('readline');
const cetak = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let count = 0;
function tebakan(){
    
    let q1 = jsonData[count].pertanyaan;
    // console.log(count);
    cetak.question(console.log(q1), (jawab) => {
        if(jawab==jsonData[count].jawaban){
            console.log("Anda benar!\n");
            count = count + 1;
            // console.log(count);
            tebakan();
        }else{
            console.log("Anda kurang beruntung. Coba lagi!\n");
            tebakan();
        }
        // count+=1;
    })

}
tebakan();