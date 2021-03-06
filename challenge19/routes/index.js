var express = require("express");
var router = express.Router();
let fs = require('fs');
const { json } = require("express");
const { route } = require("./users");
const { FORMERR } = require("dns");

const saveUserData = (data) => {
  const stringifyData = JSON.stringify(data, null, 3)
  fs.writeFileSync('data.json', stringifyData)
}
//get the user data from json file
const getUserData = () => {
  const jsonData = fs.readFileSync('data.json')
  return  JSON.parse(jsonData)
}


/* GET home page. */
router.get("/", function (req, res, next) {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    let tampil = JSON.parse(data);
    res.render("index", { title: "Express", content: tampil });
  })
});

router.get("/add", function (req, res, next) {
  res.render("add", { title: "Express"})
})

router.get("/editt/:id", function (req, res, next) {
  const userId = req.params["id"];



  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    let tampil = JSON.parse(data);
    let show
    for(let i=0; i<tampil.length; i++){
      if(tampil[i].id == userId){
        // console.log("CEK", tampil[i])
         show = {
          id: tampil[i].id,
            string: tampil[i].string,
            integer: tampil[i].integer,
            float: tampil[i].float,
            date: tampil[i].date,
            boolean: tampil[i].boolean
        }
      }
    } console.log("CEK", show);
    res.render("editt", { title: "Express", content: show });
        

  })

});


router.post('/submitadd', (req, res) => {
 
  //get the new user data from post request
  const userData = req.body
  let tampil, tambah;
  fs.readFile("data.json", "utf8", (err, data) => {
    let tampil = JSON.parse(data)

    for(let i=0; i<tampil.length; i++){
      num = tampil.length + 1;
       tambah = {
        id: num.toString(),
        string: userData.string,
        integer: userData.integer,
        float: userData.float,
        date: userData.date,
        boolean: userData.boolean,
      }
      
    }

    tampil.push(tambah)

    const stringifyData = JSON.stringify(tampil, null, 3)
    fs.writeFileSync('data.json', stringifyData)
    res.render("index", { title: "Express", content: tampil });

  })
})



router.post("/submiteditt/:id", (req, res) => {
  const dataBody = req.body
  // console.log("body", dataBody);
  const userId = req.params["id"];



  fs.readFile("data.json", "utf8", (err, data) => {
    let tampil = JSON.parse(data)
    for(let i=0; i<tampil.length; i++){
      if(tampil[i].id == userId){
        tampil[i].id = userId;
        tampil[i].string = dataBody.string;
        tampil[i].integer = dataBody.integer;
        tampil[i].float = dataBody.float;
        tampil[i].date = dataBody.date;
        tampil[i].boolean = dataBody.boolean;
      }
    }
    const stringifyData = JSON.stringify(tampil, null, 3)
    fs.writeFileSync('data.json', stringifyData)
    res.render("index", { title: "Express", content: tampil });
  })
});

router.get("/submitdel/:id", (req, res) => {
  const userId = req.params["id"];
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) throw err;
    let tampil = JSON.parse(data);
    for(let i=0; i<tampil.length; i++){
      if(tampil[i].id === userId){
        tampil.splice(i, 1);
              i--;
        num = Number(tampil[i].id)
        if(num > userId){
          num = num + 1;
          tampil[i].id = num;
        }
      }
    }
    const stringifyData = JSON.stringify(tampil, null, 3)
    fs.writeFileSync('data.json', stringifyData)
    res.render("index", { title: "Express", content: tampil });

  })

});



module.exports = router;
