var express = require("express");
var router = express.Router();

router.get("/", async (req, res, next) => {
  console.log("set variable");
  req.myJSON = { a: 1, b: 2 }; // assume variable
  next();
});

router.get("/hello", async (req, res, next) => {
  console.log("set variable");
  req.myJSON = { hello: 1, hello2: 2 }; // assume variable
  next();
});

module.exports = router;
