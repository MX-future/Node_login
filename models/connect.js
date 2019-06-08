var mongoose = require('mongoose');
var connentURL  = "mongodb://localhost:27017/Bahe";
mongoose.connect(connentURL,function(err){
    if(err){
        console.log('连接失败');
    }else{
        console.log('连接成功！');
    }
});
module.exports = mongoose;