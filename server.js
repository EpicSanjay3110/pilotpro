var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');
var config = require('./config');
var routescan = require('express-routescan');
app.set('port', (process.env.PORT_NODEJS || 8080));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/apidoc'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
//views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('debug-Mode',false);
//app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({ type: 'application/json' }));
app.use(cookieParser());
mongoose.Promise = global.Promise;
mongoose.connect(config.database)
routescan(app, {
    directory: [
        './routes'
    ]
});

/*fs.readdirSync(__dirname + '/DBModels').forEach(function(filename) {
  if (~filename.indexOf('.js')) require(__dirname + '/DBModels/' + filename)
});
*/

/*app.use(function(req, res, next) {
    if (req.url == "/apidoc"){
        fs.readFile(__dirname + '/apidoc/index.html', function(err, page) {
        //res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(page);
        res.end();
    });
    }else{
  var err = new Error('Not Found');
  err.status = 404;
    res.json({
      success: false,
      message: 'Route Unavailable!',
    });
}
});*/


var server=app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port =server.address().port;
  console.log('apns server running on https://localhost:'+port);
});
