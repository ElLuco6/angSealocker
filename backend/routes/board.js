const express = require("express");
const router = express.Router();
const boardCtrl = require('../controller/board');


router.get('/findBoard', boardCtrl.findBoard);
//router.post('/addBoard', boardCtrl.addBoard);



module.exports = router;


