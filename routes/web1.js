const express = require('express');
const router = express.Router();
const controller = require('./controller');
const validate = require('./validate');

router.get('/', controller.displayPage);
router.post('/', validate.validateInfo(), controller.saveInfoInDb);

module.exports = router;
