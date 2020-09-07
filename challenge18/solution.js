// const sqlite3 = require("sqlite3").verbose();
// let db = new sqlite3.Database("./universitas.db");
var Table = require("cli-table");

const readline = require("readline");

const sqlite3 = require("sqlite3").verbose();

var fs = require("fs");

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
          } else if (uname == rows[i].username && psw == rows[i].password) {
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
    } else if (pilih1 == 2) {
      jurusan();
    } else if (pilih1 == 3){
      dosen();
    } else if(pilih1 == 4){
      matakuliah();
    } else if(pilih1 == 6){
      out();
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
    } else if (pilih2 == 2) {
      carimhs();
    } else if (pilih2 == 3) {
      tambahmhs();
    } else if (pilih2 == 4) {
      hapusmhs();
    } else if (pilih2 == 5) {
      homepage();
    }
  });
}

function daftarmhs() {
  let sql = `SELECT nim, nama, alamat, jurusan FROM mahasiswa`;

  db.all(sql, [], (err, rows) => {
    var table = new Table({ head: ["NIM", "Nama", "Alamat", "Jurusan"] });

    for (let i = 0; i < rows.length; i++) {
      table.push([rows[i].nim, rows[i].nama, rows[i].alamat, rows[i].jurusan]);
    }

    console.log(table.toString());
    if (err) {
      throw err;
    }
  });

  db.close();
}

function carimhs() {
  let sql = `SELECT * FROM mahasiswa`;
  db.all(sql, [], (err, rows) => {
    // let str = rows.toString();
    cetak.question(`Masukan NIM : `, (carinim) => {
      input = parseInt(carinim);
      for (let i = 0; i < rows.length; i++) {
        let sql = `SELECT nim, nama, alamat, jurusan
             FROM mahasiswa
             WHERE nim  = ?`;
        let search = input;

        // first row only
        db.get(sql, [search], (err, row) => {
          if (err) {
            return console.error(err.message);
          }
          return row
            ? console.log(row.nim, row.nama, row.alamat, row.jurusan)
            : console.log(`TIDAK TERSEDIA`);
        });

        break;
      }
    });
  });
}

function tambahmhs() {
  console.log("=================================");
  console.log("Silahkan lengkapi data berikut ini :");

  let sql = `SELECT * FROM mahasiswa`;
  db.all(sql, [], (err, rows) => {
    cetak.question(`NIM : `, (nim) => {
      nimnumber = parseInt(nim);
      cetak.question(`Nama : `, (nama) => {
        cetak.question(`Alamat : `, (alamat) => {
          cetak.question(`Jurusan : `, (jurusan) => {
            cetak.question(`Umur : `, (umur) => {
              umurnumber = parseInt(umur);
              cetak.question(`Nilai : `, (nilai) => {
                cetak.question(`Angka : `, (angka) => {
                  angkanumber = parseInt(angka);
                  cetak.question(`SKS : `, (sks) => {
                    db.run(
                      "INSERT INTO mahasiswa(nim, nama, alamat, jurusan, umur, nilai, angka, SKS) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
                      [
                        nimnumber,
                        nama,
                        alamat,
                        jurusan,
                        umurnumber,
                        nilai,
                        angkanumber,
                        sks,
                      ],
                      (err) => {
                        if (err) {
                          return console.log(err.message);
                        }
                        console.log("Berhasil ditambahkan ke table");
                        console.log("=================================\n");

                        let sql = `SELECT nim, nama, alamat, jurusan FROM mahasiswa`;

                        db.all(sql, [], (err, rows) => {
                          var table = new Table({
                            head: ["NIM", "Nama", "Alamat", "Jurusan"],
                          });

                          for (let i = 0; i < rows.length; i++) {
                            table.push([
                              rows[i].nim,
                              rows[i].nama,
                              rows[i].alamat,
                              rows[i].jurusan,
                            ]);
                          }

                          console.log(table.toString());
                          if (err) {
                            throw err;
                          }
                        });
                      }
                    );
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function hapusmhs() {
  cetak.question(`Masukkan NIM mhs yg akan dihapus : `, (nimhapus) => {
    number = parseInt(nimhapus);
    db.run(`DELETE FROM mahasiswa WHERE nim=?`, number, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`NIM ${nimhapus} telah dihapus`);
      console.log("=================================\n");

      let sql = `SELECT nim, nama, alamat, jurusan FROM mahasiswa`;

      db.all(sql, [], (err, rows) => {
        var table = new Table({
          head: ["NIM", "Nama", "Alamat", "Jurusan"],
        });

        for (let i = 0; i < rows.length; i++) {
          table.push([
            rows[i].nim,
            rows[i].nama,
            rows[i].alamat,
            rows[i].jurusan,
          ]);
        }

        console.log(table.toString());
        if (err) {
          throw err;
        }
      });
    });
  });
}

function jurusan() {
  console.log("=================================");
  console.log("Silahkan pilih opsi dibawah ini :");
  console.log("[1] Daftar jurusan");
  console.log("[2] Cari jurusan");
  console.log("[3] Tambah jurusan");
  console.log("[4] Hapus jurusan");
  console.log("[5] Kembali");
  console.log("=================================");
  cetak.question("Masukan opsi yg dipilih : ", (pilih2) => {
    if (pilih2 == 1) {
      daftarjrs();
    } else if (pilih2 == 2) {
      carijrs();
    } else if (pilih2 == 3) {
      tambahjrs();
    } else if (pilih2 == 4) {
      hapusjrs();
    } else if (pilih2 == 5) {
      homepage();
    }
  });
}

function daftarjrs() {
  let sql = `SELECT namajurusan FROM jurusan`;

  db.all(sql, [], (err, rows) => {
    var table = new Table({ head: ["Jurusan"] });

    for (let i = 0; i < rows.length; i++) {
      table.push([rows[i].namajurusan]);
    }

    console.log(table.toString());
    if (err) {
      throw err;
    }
  });

  db.close();
}

function carijrs() {
  let sql = `SELECT * FROM mahasiswa`;
  db.all(sql, [], (err, rows) => {
    // let str = rows.toString();
    cetak.question(`Masukan jurusan : `, (carinim) => {
      for (let i = 0; i < rows.length; i++) {
        let sql = `SELECT namajurusan
             FROM jurusan
             WHERE namajurusan  = ?`;
        let search = carinim;

        // first row only
        db.get(sql, [search], (err, row) => {
          if (err) {
            return console.error(err.message);
          }
          return row
            ? console.log(row.namajurusan)
            : console.log(`TIDAK TERSEDIA`);
        });

        break;
      }
    });
  });
}

function tambahjrs() {
  console.log("=================================");
  console.log("Silahkan lengkapi data berikut ini :");

  let sql = `SELECT * FROM jurusan`;

  db.all(sql, [], (err, rows) => {
    cetak.question(`Jurusan : `, (namajurusan) => {
      cetak.question(`Id    : `, (idjurusan) => {
        db.run(
          "INSERT INTO jurusan(namajurusan, idjurusan) VALUES(?, ?)",
          [
            namajurusan,
            idjurusan
          ],
          (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.log("Berhasil ditambahkan ke table");
            console.log("=================================\n");
  
            let sql = `SELECT namajurusan, idjurusan FROM jurusan`;
  
            db.all(sql, [], (err, rows) => {
              var table = new Table({
                head: ["Jurusan", "Id"],
              });
  
              for (let i = 0; i < rows.length; i++) {
                table.push([
                  rows[i].namajurusan,
                  rows[i].idjurusan
                ]);
              }
  
              console.log(table.toString());
              if (err) {
                throw err;
              }
            });
          }
        );
      })
    })
  })
}

function hapusjrs(){
  cetak.question(`Masukkan jurusan yg ingin dihapus : `, (nimhapus) => {
    number = parseInt(nimhapus);
    db.run(`DELETE FROM jurusan WHERE idjurusan=?`, number, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Jurusan ${nimhapus} telah dihapus`);
      console.log("=================================\n");

      let sql = `SELECT * FROM jurusan`;

      db.all(sql, [], (err, rows) => {
        var table = new Table({
          head: ["Jurusan", "ID jurusan"],
        });

        for (let i = 0; i < rows.length; i++) {
          table.push([
            rows[i].namajurusan,
            rows[i].idjurusan
          ]);
        }

        console.log(table.toString());
        if (err) {
          throw err;
        }
      });
    });
  });
}

function dosen(){
  console.log("=================================");
  console.log("Silahkan pilih opsi dibawah ini :");
  console.log("[1] Daftar dosen");
  console.log("[2] Cari dosen");
  console.log("[3] Tambah dosen");
  console.log("[4] Hapus dosen");
  console.log("[5] Kembali");
  console.log("=================================");
  cetak.question("Masukan opsi yg dipilih : ", (pilih2) => {
    if (pilih2 == 1) {
      daftardsn();
    } else if (pilih2 == 2) {
      caridsn();
    } else if (pilih2 == 3) {
      tambahdsn();
    } else if (pilih2 == 4) {
      hapusdsn();
    } else if (pilih2 == 5) {
      homepage();
    }
  });
}

function daftardsn(){
  let sql = `SELECT * FROM dosen`;

  db.all(sql, [], (err, rows) => {
    var table = new Table({ head: ["Nama dosen", "NID"] });

    for (let i = 0; i < rows.length; i++) {
      table.push([rows[i].namadosen, rows[i].nid]);
    }

    console.log(table.toString());
    if (err) {
      throw err;
    }
  });

  db.close();
}

function caridsn() {
  let sql = `SELECT * FROM dosen`;
  db.all(sql, [], (err, rows) => {
    // let str = rows.toString();
    cetak.question(`Masukan NID : `, (carinim) => {
      input = parseInt(carinim);
      for (let i = 0; i < rows.length; i++) {
        let sql = `SELECT *
             FROM dosen
             WHERE nid  = ?`;
        let search = input;

        // first row only
        db.get(sql, [search], (err, row) => {
          if (err) {
            return console.error(err.message);
          }
          return row
            ? console.log(row.namadosen)
            : console.log(`TIDAK TERSEDIA`);
        });

        break;
      }
    });
  });
}

function tambahdsn(){
  console.log("=================================");
  console.log("Silahkan lengkapi data berikut ini :");

  let sql = `SELECT * FROM dosen`;

  db.all(sql, [], (err, rows) => {
    cetak.question(`Nama dosen : `, (namadosen) => {
      cetak.question(`Nomor induk dosen: `, (nid) => {
        db.run(
          "INSERT INTO dosen(namadosen, nid) VALUES(?, ?)",
          [
            namadosen,
            nid
          ],
          (err) => {
            if (err) {
              return console.log(err.message);
            }
            console.log("Berhasil ditambahkan ke table");
            console.log("=================================\n");
  
            let sql = `SELECT namadosen, nid FROM dosen`;
  
            db.all(sql, [], (err, rows) => {
              var table = new Table({
                head: ["Nama dosen", "Nomor induk"],
              });
  
              for (let i = 0; i < rows.length; i++) {
                table.push([
                  rows[i].namadosen,
                  rows[i].nid
                ]);
              }
  
              console.log(table.toString());
              if (err) {
                throw err;
              }
            });
          }
        );
      })
    })
  })
}

function hapusdsn(){
  cetak.question(`Masukkan nomor induk dosen yg ingin dihapus : `, (nimhapus) => {
    number = parseInt(nimhapus);
    db.run(`DELETE FROM dosen WHERE nid=?`, number, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Dosen ${nimhapus} telah dihapus`);
      console.log("=================================\n");

      let sql = `SELECT * FROM dosen`;

      db.all(sql, [], (err, rows) => {
        var table = new Table({
          head: ["Nama dosen", "Nomor induk"],
        });

        for (let i = 0; i < rows.length; i++) {
          table.push([
            rows[i].namadosen,
            rows[i].nid
          ]);
        }

        console.log(table.toString());
        if (err) {
          throw err;
        }
      });
    });
  });
}

function matakuliah(){
  console.log("=================================");
  console.log("Silahkan pilih opsi dibawah ini :");
  console.log("[1] Daftar matakuliah");
  console.log("[2] Cari matakuliah");
  console.log("[3] Tambah matakuliah");
  console.log("[4] Hapus matakuliah");
  console.log("[5] Kembali");
  console.log("=================================");
  cetak.question("Masukan opsi yg dipilih : ", (pilih2) => {
    if (pilih2 == 1) {
      daftarmatkul();
    } else if (pilih2 == 2) {
      carimatkul();
    } else if (pilih2 == 3) {
      tambahmatkul();
    } else if (pilih2 == 4) {
      hapusmatkul();
    } else if (pilih2 == 5) {
      homepage();
    }
  });
}

function daftarmatkul(){
  let sql = `SELECT * FROM matakuliah`;

  db.all(sql, [], (err, rows) => {
    var table = new Table({ head: ["ID", "Matakuliah", "SKS", "Dosen"] });

    for (let i = 0; i < rows.length; i++) {
      table.push([rows[i].idmatkul, rows[i].namamatkul, rows[i].sks, rows[i].nid]);
    }

    console.log(table.toString());
    if (err) {
      throw err;
    }
  });

  db.close();
}

function carimatkul(){
  let sql = `SELECT * FROM matakuliah`;
  db.all(sql, [], (err, rows) => {
    // let str = rows.toString();
    cetak.question(`Masukan ID matkul : `, (carinim) => {
      input = parseInt(carinim);
      for (let i = 0; i < rows.length; i++) {
        let sql = `SELECT *
             FROM matakuliah
             WHERE idmatkul  = ?`;
        let search = input;

        // first row only
        db.get(sql, [search], (err, row) => {
          if (err) {
            return console.error(err.message);
          }
          return row
            ? console.log(row.namamatkul)
            : console.log(`TIDAK TERSEDIA`);
        });

        break;
      }
    });
  });
}

function tambahmatkul(){
  console.log("=================================");
  console.log("Silahkan lengkapi data berikut ini :");

  let sql = `SELECT * FROM matakuliah`;

  db.all(sql, [], (err, rows) => {
    cetak.question(`ID : `, (idmatkul) => {
      cetak.question(`Matakuliah : `, (namamatkul) => {
        cetak.question(`SKS   :`, (sks) => {
          cetak.question(`Dosen : `, (nid) => {
            db.run(
              "INSERT INTO matakuliah(idmatkul, namamatkul, sks, nid) VALUES(?, ?, ?, ?)",
              [
                idmatkul,
                namamatkul,
                sks,
                nid
              ],
              (err) => {
                if (err) {
                  return console.log(err.message);
                }
                console.log("Berhasil ditambahkan ke table");
                console.log("=================================\n");
      
                let sql = `SELECT idmatkul, namamatkul, sks, nid FROM matakuliah`;
      
                db.all(sql, [], (err, rows) => {
                  var table = new Table({
                    head: ["ID", "Matakuliah", "SKS", "Dosen"],
                  });
      
                  for (let i = 0; i < rows.length; i++) {
                    table.push([
                      rows[i].idmatkul,
                      rows[i].namamatkul,
                      rows[i].sks,
                      rows[i].nid
                    ]);
                  }
      
                  console.log(table.toString());
                  if (err) {
                    throw err;
                  }
                });
              }
            );
          })
        })
      })
    })
  })
}

function hapusmatkul(){
  cetak.question(`Masukkan nomor id matkul yg ingin dihapus : `, (nimhapus) => {
    number = parseInt(nimhapus);
    db.run(`DELETE FROM matakuliah WHERE idmatkul=?`, number, function (err) {
      if (err) {
        return console.error(err.message);
      }
      console.log(`Matakuliah ${nimhapus} telah dihapus`);
      console.log("=================================\n");

      let sql = `SELECT * FROM matakuliah`;

      db.all(sql, [], (err, rows) => {
        var table = new Table({
          head: ["ID", "Matakuliah", "SKS", "NID"],
        });

        for (let i = 0; i < rows.length; i++) {
          table.push([
            rows[i].idmatkul,
            rows[i].namamatkul,
            rows[i].sks,
            rows[i].nid
          ]);
        }

        console.log(table.toString());
        if (err) {
          throw err;
        }
      });
    });
  });
}

function out(){
  console.log("===================================");
  console.log("Kamu telah keluar.");  
  console.log("===================================");
  console.log("Welcome to Universitas Ahmad Dahlan");
  console.log("Yogyakarta");
  console.log("===================================");
  login();
}