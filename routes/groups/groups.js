var express = require('express');
var router = express.Router();
const auth = require('../auth');
/* GET users listing. */
const groupsController = require('../../controllers/groups/groupsController');


router.post('/addgroups',auth.optional,groupsController.addgroups);




module.exports = router;
