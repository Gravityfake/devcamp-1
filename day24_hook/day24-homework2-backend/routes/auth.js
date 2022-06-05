var express = require("express");
var router = express.Router();

// const mysql = require("mysql2/promise");
const pool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// (POST) /api/auth/token
router.post("/token", async function (req, res) {
  const { username, password } = req.body; // รับ post json object

  const result = await pool.query(
    `SELECT * FROM user3 WHERE username='${username}'`
  );
  // ปิด connection
  // await connection.end();
  console.log(result[0]);
  console.log(result[0][0]);
  // พบ record
  if (result[0].length > 0) {
    const passwordMatch = await bcrypt.compare(password, result[0][0].password);
    if (passwordMatch) {
      // JWT implementation here
      // const token = "";
      // res.json({ token: token });
      const privateKey = "codecamp_very_$secr3T!";
      const token = jwt.sign(
        {
          id: result[0][0].id,
          username: result[0][0].username,
          // firstname: result[0][0].firstname,
          // lastname: result[0][0].lastname,
          // email: result[0][0].email,
        },
        privateKey,
        { expiresIn: "300000ms" }
      );
      res.json({ token: token, username: result[0][0].username });
    } else {
      res.status(401).send({ error: "invalid credential" });
      return;
    }
  } else {
    res.status(401).send({ error: "user not found" });
    return;
  }
});

module.exports = router;
