// // process.argv.forEach((val,index) => {
//   //     console.log(`${index}: ${vall}`);
//   // })
//   // let student = {
//     "use strict";

//     var fs = require("fs");

//     let jsonData = require('./example.json')
//   //   listTodo: process.argv[3],
//   // };

//   // let data = JSON.stringify(jsonData);
// if (process.argv[2]) {
//   switch (process.argv[2]) {
//     case "list":
//       // console.log("List");
//       // console.log(process.argv[3]);

//       fs.readFile("example.json", (err, data) => {
//         if (err) throw err;
//         let tampil = JSON.parse(data);
//         console.log(tampil);
//       });

//       console.log("List");
//       break;

//     case "add":

//       // fs.writeFileSync("student-2.json", data);
//     fs.writeFile('student-2.json',data,
//     // callback function that is called after writing file is done
//     function(err) {
//         if (err) throw err;
//         // if no error
//         console.log("Data is written to file successfully.")
// });
// //  data.push(process.argv[3]);

//       // let tambah= {
//       //   task = "belajar",
//       //  complete = false,
//       //  tags = []
//       // }
//       // fs.readFile(file, 'utf8', function(err, data){

//         if(err){
//             return callback(err, null);
//         }

//       //   var json;

// fs.writeFile("example.json", (err, data) => {
//   if (err) throw err;
//   data.push(tambah)
// });

//       // let change = JSON.stringify(tambah);
//       // tampil.push(change);

// // let obj = JSON.parse(data);
// // obj.push(student);
// // jsonStr = JSON.stringify(obj);
//       break;

//     case "delete":
//       fs.unlink("student-2.json", data);
//       console.log("delete success.");
//       break;

//   }
// } else {
//   let daftarTodo = `
//     To do
//     1. List
//     2. Add
//     3. Delete`;
//   console.log(daftarTodo);
// }

"use strict";

var fs = require("fs");

let jsonData = require("./example.json");
if (process.argv[2]) {
  switch (process.argv[2]) {
    case "list":
      // console.log("List");
      // console.log(process.argv[3]);

      fs.readFile("example.json", "utf8", (err, data) => {
        if (err) throw err;
        let tampil = JSON.parse(data); //convert string to object
        // console.log(tampil);
        let tambah = {
          task: "main",
          complete: false,
          tags: [],
        };

        tampil.push(tambah);
        // console.log(tampil);
        let change = JSON.stringify(tampil) //mengubah objek menjadi string
        fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
        console.log("Saved");
      });

      console.log("List");
      break;
  }
}
