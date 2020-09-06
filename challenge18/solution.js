// const sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database("./universitas.db");
var Table = require("cli-table");

const readline = require("readline");

const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./universitas.db", (err, rows) => {
  if (err) {
    throw err;
  }
});

const cetak = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let unameAsli = "azkiya";
// let pwAsli = "123qwe";

let sql = `SELECT * FROM user`;
function login() {
  db.all(sql, [], (err, rows) => {
    cetak.question(`Username: `, (uname) => {
      cetak.question(`Password : `, (psw) => {
        for (let i = 0; i < rows.length; i++) {
          if (uname !== rows[i].username && psw !== rows[i].password) {
            console.log("Username atau password salah");
            console.log("===================================");
            login();
          } else if (uname == rows[i].username && psw == rows[i].password){
            homepage();
            break;
          }
        }
      });
    });
  });
}

console.log("Welcome to Universitas Ahmad Dahlan");
console.log("Yogyakarta");
console.log("===================================");
login();

// function login() {
//   cetak.question("Username : ", (username) => {
//     if (username != unameAsli) {
//       console.log("Username salah");
//       console.log("===================================");
//       login();
//     } else {
//       console.log("===================================");
//       cetak.question("Password : ", (password) => {
//         if (password != pwAsli) {
//           console.log("Password salah");
//           console.log("===================================");
//           login();
//         } else {
//           console.log("===================================");
//           homepage();
//         }
//       });
//     }
//   });
// }

// login();

function homepage() {
  console.log(`Welcome`);
  console.log("=================================");
  console.log("Silahkan pilih opsi dibawah ini :");
  console.log("[1] Mahasiswa");
  console.log("[2] Jurusan");
  console.log("[3] Dosen");
  console.log("[4] Matakuliah");
  console.log("[5] Kontrak");
  console.log("[6] Keluar");
  console.log("=================================");
  cetak.question("Masukan opsi yg dipilih : ", (pilih1) => {
    if (pilih1 == 1) {
      mahasiswa();
    }
  });
}

function mahasiswa() {
  console.log("=================================");
  console.log("Silahkan pilih opsi dibawah ini :");
  console.log("[1] Daftar mahasiswa");
  console.log("[2] Cari mahasiswa");
  console.log("[3] Tambah mahasiswa");
  console.log("[4] Hapus mahasiswa");
  console.log("[5] Kembali");
  console.log("=================================");
  cetak.question("Masukan opsi yg dipilih : ", (pilih2) => {
    if (pilih2 == 1) {
      daftarmhs();
    } else if (pilih2 == 2){
        carimhs();
    }
  });
}

function daftarmhs() {
  let sql = `SELECT nim, nama, alamat, jurusan FROM mahasiswa`;

  db.all(sql, [], (err, rows) => {
    var table = new Table({ head: ["NIM", "Nama", "Alamat", "Jurusan"] });



    for(let i=0; i<rows.length; i++){
        table.push(
             [rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan] 
            
            );
    }

    console.log(table.toString());
    if (err) {
      throw err;
    }
    
  });

  db.close();
}

function carimhs(){
    let sql = `SELECT * FROM mahasiswa`;
    db.all(sql, [], (err, rows) => {
        let nomornim = parseInt(carinim)
        cetak.question(`Masukan NIM : `, (carinim) => {
            for(let i=0; i<rows.length; i++){
                if(carinim == rows[i].nim){
                    console.log("student detail");
                    var table = new Table({
                        style: { 'padding-left': 0, "padding-right": 0 },
                        head: ['NIM', 'Nama', 'Alamat', 'Jurusan']
                    })
                    table.push(
                        [rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan]
                    )
                }else{
                    console.log("TIDAK TERDAFTAR");
                    carimhs();
                    
                    break;
                }
            }
        })
    })
    
}


