const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/product", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });
  connection.connect();
  connection.query(
    `insert into product (product_name, stock_left, category) values ('${req.body.product_name}' , '${req.body.stock_left}', '${req.body.category}')`,
    (err, rows, field) => {
      res.json({ ID: rows.insertId, new_product: rows });
    }
  );
  connection.end();
});

app.put("/api/product/:id", (req, res) => {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "stock",
    port: 3306,
  });
  connection.connect();
  connection.query(
    `update product set product_name = '${req.body.product_name}' , stock_left = ${req.body.stock_left}, category = '${req.body.category}' where id = ${req.params.id}`,
    (err, rows, field) => {
      if (rows.affectedRows == 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("ID does not exist in database");
      }
    }
  );
  connection.end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
