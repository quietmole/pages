var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
app.use(express.static(__dirname));
app.listen(port, function() {
  var url = 'http://localhost:' + port.toString() + '/index.html';
  console.log('open ' + url);// eslint-disable-line no-console
});
