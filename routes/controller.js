const controller = {};
const db = require('../model/connect-db');
const Pr_10 = require('../model/phase1-models');
const { validationResult } = require('express-validator');

controller.displayPage = (req, res) => {
  res.render('index', {
    field1Err: null,
    field2Err: null,
    field3Err: null,
    field4Err: null,
    successMsg: null,
    url: req.originalUrl,
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
        url: req.originalUrl,
      });
    }

    const url = req.originalUrl;
    console.log(url);
    console.log(typeof url);
    const field5 = url.split('-')[0].split('/')[1]
    const field6 = url.split('-')[1];
    console.log(field5, field6);

    console.log('req.originalUrl', req.originalUrl);
    const pr_10 = new Pr_10();
    (pr_10.field1 = req.body.field1),
      (pr_10.field2 = req.body.field2),
      (pr_10.field3 = req.body.field3),
      (pr_10.field4 = req.body.field4),
      (pr_10.field5 = field5),
      (pr_10.field6 = field6),
      (pr_10.field7 = `Web2.ir${req.originalUrl}`);

    await pr_10.save();
    console.log(pr_10);
    return res.render('index', {
      field1Err: null,
      field2Err: null,
      field3Err: null,
      field4Err: null,
      successMsg: 'Data saved in Database Successfully',
      url: req.originalUrl,
    });
  } catch (e) {
    console.log(e);
    return res.render('index', {
      field1Err: null,
      field2Err: null,
      field3Err: null,
      field4Err: null,
      successMsg: e,
      url: req.originalUrl,
    });
  }
};

module.exports = controller;
