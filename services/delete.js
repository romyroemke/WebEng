var express = require('express');
var router = express.Router();
var util = require('util');
var db = require('../db').db;

router.post('/', function (req, res, next) {
    util.log(util.format('/services/delete/ - POST - Request: %j', req.body));

    var events = db.collection('Events');
    events.remove(req.body, function (error, result) {
        res.send('Successfully deleted');
    });
});

module.exports = router;
