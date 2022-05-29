var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");

router.get("/from-user/:id", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "codecamp",
    port: 3306,
  });
  try {
    // console.log(
    //   await connection.query(`SELECT * from user where id = ${req.params.id}`)
    // );
    const users = await connection.query(
      `SELECT * from user where id = ${req.params.id}`
    );
    console.log(users[0]);
    res.myJSON = users[0];
    next();
    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

router.get("/from-student/:id", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "codecamp",
    port: 3306,
  });
  try {
    const stuents = await connection.query(
      `SELECT * from students where id = ${req.params.id}`
    );
    console.log(stuents[0]);
    req.myJSON = stuents[0];
    next();
    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
