var express = require('express');
var router = express.Router();
var User = require('../api/user');

/* GET users listing. */
router.get('/',function(req, res, next) {
    res.render('register',{ title:'新用户注册' });
});

router.post('/',User.userReg);

module.exports = router;
