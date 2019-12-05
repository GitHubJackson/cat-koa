const mongoose = require('../utils/db')

// 用户表
var demoSchema = mongoose.Schema({
  id: String,
  name: String,
  _otherModel: {
    type: Schema.Types.ObjectId,
    ref: 'other' // 对应 model 名，关联其他数据表
  }
});
demoSchema.methods.speak = function () {
  var greeting = this.name
    ? "my girlfriend's name is " + this.name
    : "I don't have a girlfriend";
  console.log(greeting);
}

var demoModel = mongoose.model('demo', demoSchema);

// 其他表

module.exports = {
  demoModel
}
