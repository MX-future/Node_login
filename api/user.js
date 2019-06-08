
var User = require('../models/user')
//注册
module.exports.userReg = function (req,res,next){
    var regUser = new User({
        username:req.body.username,
        password:req.body.password
    });
    regUser.save(function (err,content){
        if(err){
            return res.send({status: 0, msg: err || '注册失败'});
        }else{
            return res.send({status: 1, msg: '注册成功!'});
        }
    });
}

//登录
module.exports.userLogin = function(req,res,next){
    var loginname = req.body.username;
    var loginpwd = req.body.password;
    User.findOne({ username: loginname },function(err,content){
        if(content==null){
            return res.send({ status: 0, msg: err || '登录失败，用户不存在！'})
        }else{
            var pwd = content.password;
            if(loginpwd==pwd){
                return res.send({ status: 1, msg: '登录成功!'})
            }else{
                return res.send({ status: 0, msg: err || '密码错误，登录失败!'})
            }
        }
    });
}

