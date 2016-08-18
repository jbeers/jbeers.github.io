var express = require( 'express' );
var app = express();

app.get('/index', function (req, res) {
  res.send( '<h1>It\'s working!' );
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});