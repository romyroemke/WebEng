var express = require('express');
var db = require('../db').db;

var router = express.Router();

router.get('/', function (req, res, next) {
    var categories = db.collection('Categories');
    categories.find().toArray(function (error, list) {
        res.json(list);
    });
});

module.exports = router;