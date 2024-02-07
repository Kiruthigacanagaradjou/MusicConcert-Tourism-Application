const mongoose = require('mongoose');

const schema = mongoose.Schema;

const userSchema = new schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  country:{ type: String},
  state:{type:String},
  role: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date}
});

module.exports = mongoose.model('user', userSchema);
