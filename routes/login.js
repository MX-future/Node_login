var express = require('express');
var router = express.Router();
var User = require('../api/user');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login',{ title: '登录' })
});
router.post('/',User.userLogin);

module.exports = router;
