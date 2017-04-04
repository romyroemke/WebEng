var util = require('util');
var tingodb = require('tingodb')();
var path = require('path');

// Initialize a new SQLite DB in memory
var db = new tingodb.Db(path.join(__dirname, '/db'), {});

var events = db.collection('Events');

events.insert({
  title: 'Christmas Feast',
  location: 'Stuttgart',
});

events.insert({
  title: 'New Years Eve',
  location: null,
});

exports.db = db;
