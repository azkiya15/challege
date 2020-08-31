"use strict";

var fs = require("fs");

let jsonData = require("./example.json");
if (process.argv[2]) {
  switch (process.argv[2]) {
    case "list":
      
      console.log("\nList yg harus dikerjakan hari ini :");
      fs.readFile("example.json", "utf8", (err, data) => {
        if (err) throw err;
        let tampil = JSON.parse(data); //convert string to object
        //  console.log(tampil);
        
        for(let i=0; i<tampil.length; i++){
          if(null){
            console.log("");
          }else{
          if(tampil[i].complete==true){
            console.log("[x]", tampil[i].task);
          }else{
            console.log("[]", tampil[i].task);
          }
    
        }
        }
      })
      break;

      case "add":
        let argvArray = process.argv
        // console.log("cek ", argvArray);
       
          let kalArray = [];
          for(let i=3; i<argvArray.length; i++){
            kalArray.push(argvArray[i])
          }
        let kalimat = kalArray.join(" ")
          // console.log(kalimat);

        fs.readFile("example.json", "utf8", (err, data) => {
          if (err) throw err;
          let tampil = JSON.parse(data); //convert string to object //its array tampil[]
          // console.log(tampil);


          let tambah = {
            task: kalimat,
            complete: false,
            tags: [],
          };


  
          tampil.push(tambah);
          // console.log(tampil);

         //mengubah objek menjadi string dgn JSON.stringify
          fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
          console.log("Saved");
        });
  
        console.log("List");
        break;
        
        case "delete":
          
        let hapus = process.argv[3];
          fs.readFile("example.json", "utf8", (err, data) => {
            if (err) throw err;
            let tampil = JSON.parse(data);
            
            Array.prototype.remByVal = function(val) {
              for (var i = 0; i < this.length; i++) {
                  if (this[i] === val) {
                      this.splice(i, 1);
                      i--;
                  }
              }
              return this;
          }
          
          
          tampil = tampil.remByVal(tampil[hapus])
          
            
            fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
            console.log(`List ${hapus} has been deleted.`);

          })

          break;
          
          case "complete" :

          fs.readFile("example.json", "utf8", (err, data) =>{
            if (err) throw err;
              let tampil = JSON.parse(data)

              let index = process.argv[3]
              if(tampil[index].complete==true){
                console.log("task has been done");
              }else{
                tampil[index].complete = true;
                fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
                console.log(`OK`);
              }
  
          })

          break;

          case "uncomplete":
            
            fs.readFile("example.json", "utf8", (err, data) => {
              let tampil = JSON.parse(data)
              let index = process.argv[3]
              
              if(tampil[index].complete==false){
                console.log("Tugas memang belum selesai");
              }else{
                tampil[index].complete = false;
                console.log(`OK`);
                fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
              }

            })
          break;
          
          case "task":

            fs.readFile("example.json", "utf8", (err, data) => {
              let tampil = JSON.parse(data);

              let index = process.argv[3]
              let kataTambah = process.argv[4]
              
              tampil[index].tags.push(kataTambah)
              console.log("OK");

              fs.writeFileSync('example.json', JSON.stringify(tampil, null, 3))
            })
  
          break;

          case "belum":
          
          fs.readFile('example.json', 'utf8', (err, data) => {
            let tampil = JSON.parse(data)

            for(let i=0; i<tampil.length; i++){
              if(tampil[i].complete == false){
                console.log("[]",tampil[i].task);
              }
            }
          })

          break;

          case "udah":
          fs.readFile('example.json', 'utf8', (err, data) => {
            let tampil = JSON.parse(data)

            for(let i=0; i<tampil.length; i++){
              if(tampil[i].complete == true){
                console.log("[x]", tampil[i].task);
              }
            }
          })
          break;

          case "filter":
             
          fs.readFile('example.json', 'utf8', (err, data) => {
            let tampil = JSON.parse(data)



            function filterByValue(tampil, term) {
              var ans = tampil.filter(function(v,i) {
                  if(v.task.toLowerCase().indexOf(term) >=0) {
                      return true;
                  } else false;
              });
              console.log( ans);
          }
          filterByValue(tampil, process.argv[3]);
            
            
            
            // for(let i=0; i<tampil.length; i++){
            //   if(tampil[i].task == kataCari){
            //     if(tampil[i].complete==true){
            //       let udah = "[x] ";
            //       console.log(udah, tampil[i].task);
            //     }else{
            //       let belum = "[] ";
            //       console.log(belum, tampil[i].task);
            //     }
            //   }
            // }
          })  
          break;
  }
}else{
  console.log("done");
}
