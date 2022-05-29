var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const validate = require("./validate");

router.get("/", validate, function (req, res) {
  let token = req.headers.authorization;
  console.log(token);
  res.send([{ item: "Product A selected" }, { item: "Product B selected" }]);
});

module.exports = router;
