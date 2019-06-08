
var mongoose = require('./connect');
var Schema = mongoose.Schema;
//新建用户表
var UserSchema = new Schema({
    username:String,
    password:String
});
module.exports = mongoose.model('User', UserSchema);