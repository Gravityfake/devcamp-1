const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "codecamp",
});

async function myQuery() {
  let [rows, fields] = await pool.query("SELECT * FROM user");
  console.log("The solution is: ", rows);
}
myQuery();

app.get("/user/:id", async function (req, res, next) {
  const [rows, fields] = await pool.query(
    `SELECT * FROM user WHERE id= ${req.params.id}`
  );
  res.status(200).json(rows[0]);
});

app.put("/user/:id", async function (req, res, next) {
  const [rows, fields] = await pool.query(
    `UPDATE user SET firstname = '${req.body.firstname}' WHERE id = ${req.params.id}`
  );
  res.status(200).json(rows);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
