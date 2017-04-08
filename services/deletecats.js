var express = require('express');
var router = express.Router();
var util = require('util');
var db = require('../db').db;

router.post('/', function (req, res, next) {
    util.log(util.format('/services/deletecats/ - POST - Request: %j', req.body));

    var categories = db.collection('Categories');
    categories.remove(req.body, function (error, result) {
        res.send('Successfully deleted');
    });
});

module.exports = router;
