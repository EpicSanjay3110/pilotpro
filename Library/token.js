var config = require('../config');
var jwt = require('jsonwebtoken');

var generatetoken = function (user){
    var token = jwt.sign(user, config.secret);
    return token
}
var gettokendetails = function(req,res){
    jwt.verify(req.headers.token, config.secret, function(err, decoded) {
        if (err){
            res.status(500).send(err);
        }else{
        res.send(decoded);
    }
    });
}
exports.generatetoken = generatetoken;
exports.gettokendetails = gettokendetails;
