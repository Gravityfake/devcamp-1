var express = require("express");
var router = express.Router();
// const mysql = require("mysql2/promise");
const pool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/", async function (req, res) {
  const { username, password, firstname, lastname, email } = req.body; // รับ post json object
  const hashedPassword = await bcrypt.hash(password, 10); // เข้ารหัส password ที่ส่งเข้ามา ก่อนลง db

  const result = await pool.execute(
    `INSERT INTO user3 (username, password, firstname, lastname, email ) VALUES (?, ?, ?, ?, ?)`,
    [username, hashedPassword, firstname, lastname, email]
  ); // insert ข้อมูล

  // ปิด connection
  // await connection.end();

  // ตอบกลับ client เป็น id ของ user ที่ insert
  res.send({ id: result[0].insertId });
});

router.get("/mycart", async function (req, res) {
  res.send([{ item: "Product A selected" }, { item: "Product B selected" }]);
});

module.exports = router;
