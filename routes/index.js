var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {


  // grab the data from the database

  // pass that to the html view


  res.render('index', {title: 'Express'});
});

/* GET home page. */
router.post('/', function (req, res, next) {
  console.log('req', req.body);
  res.end("yes");
});

module.exports = router;
