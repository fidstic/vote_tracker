'user_strict';

var http = require('http');

var express = require('express');
var app = express();

app.use(express.static('Kitten_Folder'));



app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/secret', function (req, res, next) {
  res.send('Accessing the secret section ...');
  next(); // pass control to the next handler
});

app.use('/', function (req, res, next) {

  var options = {
    root: __dirname + '/Kitten_Folder/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  res.sendFile('./404.html', options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:','./404.html');
    }
  });

})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
