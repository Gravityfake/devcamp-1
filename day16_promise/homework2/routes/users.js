var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "", // <== ระบุให้ถูกต้อง
    database: "apiusers", // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  try {
    const users = await connection.query("SELECT * from user");

    res.json({
      users: users[0],
    });

    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
