var express = require('express');
var router = express.Router();
var util = require('util');

router.post('/', function (req, res, next) {
  util.log(util.format('/services/add/ - POST - Request: %j', req.body));

  util.log(req.body.title);

  res.send('Successfully processed');
});

module.exports = router;
