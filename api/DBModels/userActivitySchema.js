var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userActivittySchema = new mongoose.Schema({
  activityId: { type:String,required:true,unique:true},
  userId:{ type:Schema.types.ObjectId,
          ref:"appUser",
          index:true
      },
  storeId:{ type:Schema.types.ObjectId,
        ref:"store",
        index:true
      },
  tableId:{ type:Schema.types.ObjectId,
        ref:"tables",
        index:true
      },
   date:{ type:Date, default: Date.now },
   time:{ type:Date, default: (new Date()).getTime()  },
   statusId:{ type: Schema.types.ObjectId,
        ref:"statusCodes",
        index:true
   }

})
