var config = require('../config');
var jwt = require('jsonwebtoken');

var middleware=function(req, res, next) {

  var token = req.headers['auth-token'];
  if (token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if (err) {
        return res.status(428).json({ Success: false, Message: 'Failed to authenticate token.',
          Data:null,
          Error:err
         });
      } else {
        req.decoded = decoded;
        next();
      }
    });

  } else {
    return res.status(401).json({
        Success: false,
        Message: 'No auth provided.',
        Data:null,
        Error:null
    });
  }
}
exports.middleware=middleware;
