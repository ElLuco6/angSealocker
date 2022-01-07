const express = require("express");
const router = express.Router();
const partnaireCtrl = require('../controller/board');


router.get('/findPartnaire', partnaireCtrl.findPartnaire);
//router.post('/addBoard', boardCtrl.addBoard);




module.exports = router;
