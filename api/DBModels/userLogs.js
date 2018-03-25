var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userLogSchema = new Schema({

  storeId:{ type: Schema.Types.ObjectId,
           ref: 'resturant',
           index: true
         },
  userId:{  type: Schema.Types.ObjectId,
           ref: 'appUser',
           index: true
         },
  activityId:{  type: Schema.Types.ObjectId,
           ref: 'userActivity',
           index: true

  }




 })
