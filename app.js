var express = require('express');
var http = require('http');
var util = require('util');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./db').db;

var app = express();

var httpPort = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  // Enable CORS for local testing
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Cache-Control, Pragma');

  // Disable caching
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', 0);
  res.setHeader('Last-Modified', (new Date()).toUTCString());

  // intercept OPTIONS method
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Services defined in specific routes files
app.use('/services/list', require('./services/list'));
app.use('/services/add', require('./services/add'));
app.use('/services/delete', require('./services/delete'));

// Cookie Handling
app.get('/set-cookie', function (req, res) {
  res.cookie('test-name', '123456');
  res.send('Cookie has been set');
});

app.get('/list-cookie', function (req, res) {
  res.send(util.format('Available cookies: %j', req.cookies));
});

app.get('/', function (req, res) {
  var result = '<html><head><title>Web Server</title></head><body><div>Hello World</div></body></html>';
  res.send(result);
});

// Any request which is not mapped to a specific service will be looked up in the frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Default fallback rule which is just printing a log information
app.use(function (req, res, next) {
  util.log(util.format('ERROR: Received unsupported request: URL=%s, Method=%s', req.url, req.method));
  next();
});

// Start the Web Server
var server = http.createServer(app);
server.listen(httpPort, function () {
  var host = server.address().address;
  var port = server.address().port;

  util.log(util.format('Web Server listening at http://%s:%s', host, port));
});

module.exports = app;
