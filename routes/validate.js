const { body } = require('express-validator');

const validate = {};
validate.validateInfo = function () {
  return [
    body('field1')
      .notEmpty()
      .withMessage('field1 must fill')
      .isNumeric()
      .withMessage('field1 must be Number'),
    body('field2').isAlpha().withMessage('field2 must be Character'),
    body('field3').isAlpha().withMessage('field3 must be Character'),
    body('field4').isNumeric().withMessage('field4 must be Number'),
  ];
};

module.exports = validate;
