const mongoose = require('mongoose');
const schema = mongoose.Schema;
const masterSchema = new schema({
  contenttype:{type:String},
  content: { }
  // about:{type: String},
  // location:{type: String},
  // contact:{
  //   email:{type: String},
  //   phone:{type: String}
  // },
  // isActive:{type:Boolean,default:true},
  // createdAt:{type:Date,default:Date.now},
  // updatedAt:{type:Date,default:Date.now}

});

module.exports = mongoose.model('Footer', masterSchema);
