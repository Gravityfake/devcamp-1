var express = require("express");
var router = express.Router();
const pool = require("../config/database");
const bcrypt = require("bcrypt");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await pool.query(
    `INSERT INTO user3 (username,password) VALUES ('${username}','${hashedPassword}')`
  );
  res.send({ id: result[0].insertId });
});

module.exports = router;
