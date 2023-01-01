const express = require('express');
const router = express.Router();
const web1 = require('./web1');

router.use('/SHZ1-010101m1234-hfoww', web1);

module.exports = router;
