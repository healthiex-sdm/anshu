var express = require('express');
var router = express.Router();
const auth = require('../auth');
/* GET users listing. */
const usersController = require('../../controllers/users/usersController');


router.post('/adduser',auth.optional,usersController.adduser);

router.post('/login',auth.optional,usersController.login);


module.exports = router;
