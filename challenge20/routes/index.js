var express = require("express");
var router = express.Router();

const { json } = require("express");
const { route } = require("./users");
const { FORMERR } = require("dns");
const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./bread.db", (err, rows) => {
  if (err) {
    throw err;
  }
  // console.log("Successful connection to the database 'bread.db'");
});

// const db_name = path.join(__dirname, "data", "bread.db");
// const db = new sqlite3.Database(db_name, err => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log("Successful connection to the database 'bread.db'");
// });


/* GET home page. */
router.get("/", function (req, res, next) {
  let sql = `SELECT * FROM bread`;

  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log(sql);
    res.render("/", { model: rows });
    });
  });
  
  
router.get("/add", function (req, res, next) {
  res.render("add", { title: "Express"})
})

router.get("/editt/:id", function (req, res, next) {
  // const userId = req.params["id"];
  let sql = `SELECT * FROM bread`

  db.all(sql, [], (err, rows) => {
    for(let i=0; i<rows.length; i++){
      let sql = `SELECT id, string, integer, float, date, boolean FROM bread WHERE id = ?`
      const userId = req.params["id"];

      db.get(sql, [userId], (err, row) => {
        if (err) {
          return console.error(err.message);
        }
        
          res.render("editt", { title: "Express", content: row });
      })
    }
  })
        

});


router.post('/submitadd', (req, res) => {
  // let idtinggi = "SELECT max(id) FROM bread"
  // const idbaru = idtinggi + 1;
  // const sql = "INSERT INTO bread (string, integer, float, date, boolean) VALUES (?, ?, ?, ?, ?)";
  // const book = [idbaru, req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean];
  // db.run(sql, book, err => {
  //   // if (err) ...
  //   res.render("index", { content: book });
  // });
  let idtinggi = "SELECT max(id) FROM bread"
  const idbaru = idtinggi + 1;
    // let string = req.body.string;
    // let integer = req.body.integer;
    // let float = req.body.float;
    // let date = req.body.date;
    // let boolean = req.body.boolean;
    // let errors = false;

    
    // // if no error
    // if(!errors) {

    //     var form_data = {
    //         id: idbaru,
    //         string: string,
    //         integer: integer,
    //         float: float,
    //         date: date,
    //         boolean: boolean
    //     }
        
    //     // insert query
    //     db.query('INSERT INTO bread SET ?', form_data, function(err, result) {
    //         //if(err) throw err
    //         if (err) {
    //             req.flash('error', err)
                 
    //             // render to add.ejs
    //             res.render('/add', {
    //               id: idbaru,
    //                 string: form_data.string,
    //                 integer: form_data.integer,
    //                 float: form_data.float,
    //                 date: form_data.date,
    //                 boolean: form_data.boolean                    
    //             })
    //         } else {                
    //             req.flash('success', 'Book successfully added');
    //             res.redirect('/index');
    //         }
    //     })
    // }

    const book = [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean];
    const sql = "INSERT INTO bread(string, integer, float, date, boolean) VALUES(?, ?, ?, ?, ?)";
    db.run(sql, book, err => {
      // if (err) ...
      res.render("index");
    });

})



router.post("/submiteditt/:id", (req, res) => {
  
  const id = req.params.id;
  const book = [req.body.string, req.body.integer, req.body.float, req.body.date, req.body.boolean, id];
  const sql = "UPDATE bread SET string = ?, integer = ?, float = ?, date = ?, boolean = ? WHERE (id = ?)";
  db.run(sql, book, err => {
    // if (err) ...
    res.redirect("index");
  });

});

router.get("/submitdel/:id", (req, res) => {
  const id = req.params.id;
  const sql = "DELETE FROM bread WHERE id = ?";
  db.run(sql, id, err => {
    if (err) {
      return console.error(err.message);
    }
    res.redirect("/");
  });
});



module.exports = router;
