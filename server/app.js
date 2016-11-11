var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.use(bodyParser.urlencoded({ extended: true }));


//Static Files
app.use('/', index);

// Set port to listen on
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  console.log('server is listening on port ' + app.get('port'));
});
