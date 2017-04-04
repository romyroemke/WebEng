var express = require('express');
var db = require('../db').db;

var router = express.Router();

router.get('/', function (req, res, next) {
  var events = db.collection('Events');
  events.find().toArray(function (error, list) {
    res.json(list);
  });
});

module.exports = router;
