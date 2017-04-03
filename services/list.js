var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var result = [
    {
      id: '1',
      title: ' Christmas Feast',
      location: 'Stuttgart',
      organizer: 'dhbw@bisswanger.de',
      start: '2014-12-24T18:00',
      end: '2014-12-24T23:00',
      status: 'Busy',
      allday: '0',
      webpage: 'http://www.bisswanger.de/',
      imageurl: 'http://bisswanger.de/logo.png',
      categories: [
        {
          id: '1',
          name: 'Private',
        },
        {
          id: '5',
          name: 'DHBW',
        },
      ],
    },
    {
      id: '18',
      title: 'New Year\'s Eve',
      location: '',
      organizer: 'hans@maier.com',
      start: '2014-12-24T18:00',
      end: '2014-12-24T23:30',
      status: 'Busy',
      allday: '0',
      webpage: 'http://www.test.de/',
      imageurl: '',
      categories: [
        {
          id: '1',
          name: 'Family',
        },
        {
          id: '3',
          name: 'Private',
        },
      ],
    },
  ];

  res.json(result);
});

module.exports = router;
