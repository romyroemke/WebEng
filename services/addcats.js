var express = require('express');
var router = express.Router();
var util = require('util');
var db = require('../db').db;
var validator = require('jsonschema').Validator;

// Json Schema for adding categories into the database
var v = new validator();

var schemaCats = {
    "id": "/AddCat",
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "location": {"type": "string"},

    },
    "required": ["category", "color"]
};

// Post request to add a category
router.post('/', function (req, res, next) {
  util.log(util.format('/services/addcats/ - POST - Request: %j', req.body));

  var categories = db.collection('Categories');
    // Only if the jason Request is valid, insert the request into the database
    if (v.validate(req.body, schemaCats).valid) {
      categories.insert(req.body, function (error, result) {
          res.send('Successfully added');
      });
    } else {
      res.send('Wrong schema');
    }
});

module.exports = router;
