var util = require('util');
var tingodb = require('tingodb')();
var path = require('path');

// Initialize a new SQLite DB in memory
var db = new tingodb.Db(path.join(__dirname, '/db'), {});

var events = db.collection('Events');
var categories = db.collection('Categories');

events.insert({
  title: 'Christmas Feast',
  location: 'Stuttgart',
});

events.insert({
  title: 'New Years Eve',
  location: null,
});

categories.insert({
    category: 'Holiday',
    color: 'blue',
});

exports.db = db;
