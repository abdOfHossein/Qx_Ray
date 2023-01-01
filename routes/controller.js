const controller = {};
const db = require('../model/connect-db');
const Phase1 = db.Phase_1;
const { validationResult } = require('express-validator');

controller.displayPage = (req, res) => {
  res.render('index', {
    field1Err: null,
    field2Err: null,
    field3Err: null,
    field4Err: null,
    successMsg: null,
  });
};

controller.saveInfoInDb = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      let field1Err, field2Err, field3Err, field4Err;
      for (const err of errors.errors) {
        if (err.param === 'field1') field1Err = err.msg;
        if (err.param === 'field2') field2Err = err.msg;
        if (err.param === 'field3') field3Err = err.msg;
        if (err.param === 'field4') field4Err = err.msg;
      }
      return res.status(400).render('index', {
        field1Err,
        field2Err,
        field3Err,
        field4Err,
        successMsg: null,
      });
    }
    const phase1 = Phase1.create({
      field1: req.body.field1,
      field2: req.body.field2,
      field3: req.body.field3,
      field4: req.body.field4,
      field5: 'SHZ1',
      field6: '010101m1234',
      field7: 'Web2.ir/SHZ1-010101m1234-hfoww',
    });
    console.log(phase1);
    return res.render('index', {
      field1Err: null,
      field2Err: null,
      field3Err: null,
      field4Err: null,
      successMsg: 'Data saved in Database Successfully',
    });
  } catch (e) {
    console.log(e);
    return res.render('index', {
      field1Err: null,
      field2Err: null,
      field3Err: null,
      field4Err: null,
      successMsg: e,
    });
  }
};

module.exports = controller;
