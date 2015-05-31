var express = require('express');
var router = express.Router();

var bacmaName = 'Bay Area Chinese Musician Association';

router.get('/', function(req, res, next) {
  res.render('index', { title: bacmaName, name: bacmaName });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
