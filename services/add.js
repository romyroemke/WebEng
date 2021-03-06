var express = require('express');
var router = express.Router();
var util = require('util');
var db = require('../db').db;

router.post('/', function (req, res, next) {
  util.log(util.format('/services/add/ - POST - Request: %j', req.body));

  var events = db.collection('Events');
  events.insert(req.body, function (error, result) {
    res.send('Successfully added');
  });
});

module.exports = router;
