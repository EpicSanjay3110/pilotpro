const config = require('../../config');
const appUser = require('../DBModels/appUser');
const mongoose = require('mongoose');
const responseHandler = require('../../Library/responceHandler');


let createAppUser = function (req, res){
    let fields  =  req.body;

    let newUser = new appUser({
    firstName:fields.firstName,
    lastName:fields.lastName,
    user_phone_no: fields.phone,
    user_emailid: fields.email,
    password: fields.password,
    imageUrl: fields.imageUrl
  });
      newUser.save(function(err,docs){
        if(err){
          console.log(err);
          res.json(responseHandler.responseFailure("appUser creation failed",err));
        }
        else{
            res.json(responseHandler.responseSuccess("appUser Created",docs));
        }
      })
}

  exports.createAppUser = createAppUser
