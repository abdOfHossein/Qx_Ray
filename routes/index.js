const express = require('express');
const router = express.Router();
const web1 = require('./web1');
/* GET home page. */
router.use('/SHZ1-010101M1234-HFOWW',web1);

module.exports = router;
