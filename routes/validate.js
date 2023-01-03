const { body } = require('express-validator');

const validate = {};
validate.validateInfo = function () {
  return [
    body('field1')
      .notEmpty()
   
      .isNumeric()
      .withMessage('field1 must fill and be Number'),
    body('field2')
      .optional({ checkFalsy: true })
      .isString()
      .matches(/^[(a-zA-Z) | (\u0600-\u06FF\s)]+$/)
      .withMessage('field2 must be English or Persian Character'),
    body('field3')
      .optional({ checkFalsy: true })
      .isString()
      .matches(/^[(a-zA-Z) | (\u0600-\u06FF\s)]+$/)
      .withMessage('field3 must be English or Persian Character'),
    body('field4')
      .optional({ checkFalsy: true })
      .isNumeric()
      .withMessage('field4 must be Number'),
  ];
};

module.exports = validate;
