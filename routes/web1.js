const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

/* GET users listing. */
router.get("/", (req, res) => {
  res.render("index", {
    field1Err: null,
    field2Err: null,
    field3Err: null,
    field4Err: null,
    successMsg: null,
  });
});

router.post(
  "/",
  body("field1").notEmpty().withMessage("field1 must fill").isNumeric().withMessage("field1 must be Number"),
  body("field2").isAlpha().withMessage("field2 must be Character"),
  body("field3").isAlpha().withMessage("field3 must be Character"),
  body("field4").isNumeric().withMessage("field4 must be Number"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      let field1Err, field2Err, field3Err, field4Err;
      for (const err of errors.errors) {
        if (err.param === "field1") field1Err = err.msg;
        if (err.param === "field2") field2Err = err.msg;
        if (err.param === "field3") field3Err = err.msg;
        if (err.param === "field4") field4Err = err.msg;
      }
      return res.status(400).render("index", {
        field1Err,
        field2Err,
        field3Err,
        field4Err,
        successMsg: null,
      });
    }
    return res.render("index", {
      field1Err: null,
      field2Err: null,
      field3Err: null,
      field4Err: null,
      successMsg: "Data saved in Database Successfully",
    });
  }
);

module.exports = router;
