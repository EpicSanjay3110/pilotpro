const config = require('../../config');
const appUser = require('../DBModels/appUser');
const mongoose = require('mongoose');
const responseHandler = require('../../Library/responceHandler');
const jwt = require('jsonwebtoken');

let appLogin  = function(req,res){
  let fields  = req.body;
  let password  = fields.password;
  let emailId = fields.email;

console.log(fields);
  appUser.findOne({user_emailid:emailId,password:password},function(err,resP){
      if (err){
          res.json(responseHandler.responseFailure("Login Failed",err));
      }else{
          if (resP == null){
              res.json(responseHandler.responseFailure("Invalid User",err));
          }else{
            updateUserToken(emailId,function(callback,result){
              console.log(result)
              res.json(responseHandler.responseSuccess("Login success",result ));
            });
          }
       }
  });
}

function updateUserToken(email,callback){

var supersecret = config.secret
var jwtToken= jwt.sign(email,supersecret);
console.log(jwtToken);


  console.log(email+"phone.....")
//userModal.update({phone:phone},{$set:{auth_token:jwtToken}}, function(error,result){
appUser.update({user_emailid:email},{$set:{authToken:jwtToken}}, function(error,result){
  if(error){
    return callback(error)}
    else{
callback(null,result)}

});
}




exports.appLogin  = appLogin
