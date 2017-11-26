var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var exports = module.exports = {};

app.get('/', function(req, res) {
  res.render('../views/partials/home.handlebars');
});
var server = app.listen(3000, function(){
  console.log('Magic is happening on port 3000');
});

exports.closeServer = function() {  // this close server function shuts down the
  //server we open whe our code is run.  However, closing server from this file will cause
  // issues when deploying porduction code, so we need to export it and add it to the spec file.
  server.close();
};
