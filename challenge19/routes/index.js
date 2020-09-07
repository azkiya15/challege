var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Express' });
});

router.put('/edit', function(req, res, next) {

  
  let data = ['makan', 'belanaja'];
  res.render('edit', { title: 'EDIT TEMP', content: data });
});


module.exports = router;
