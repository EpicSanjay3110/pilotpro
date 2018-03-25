var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appUserSchema = new Schema({
  firstName:{ type: String, min: 5, required: [true,"UserName required"]},
  lastName:{  type: String, required: [true,'Name is required']},
  user_phone_no: { type: String, required: true, unique: true },
  user_emailid: { type: String, required: true, unique: true, lowercase:true, required: [true, 'Email is required']},
  authToken:{ type:String},
  password:{  type: String, min: 8, required: [true,'Password required'] },
  
  });

module.exports = mongoose.model('appUser',appUserSchema);
