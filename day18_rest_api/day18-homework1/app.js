const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "stock",
  port: 3306,
});

app.get("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });
  connection.connect();
  connection.query(
    `select * from product where id = ${req.params.id}`,
    (err, rows, fields) => {
      if (rows.length !== 0) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("No products in database");
      }
    }
  );
  connection.end();
});

app.delete("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });
  connection.connect();
  connection.query(
    `delete from product where id = ${req.params.id}`,
    (err, rows, fields) => {
      if (rows.affectedRows == 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("CANNOT DELETE. No product in database");
      }
    }
  );
  connection.end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
