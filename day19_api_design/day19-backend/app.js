const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mysql = require("mysql2");
const cors = require("cors");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post("/store-data", (req, res, next) => {
  console.log(req.body);
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "day19",
    port: 3306,
  });
  connection.connect();

  let data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    address: req.body.address,
    subdistrict: req.body.subdistrict,
    district: req.body.district,
    province: req.body.province,
    postal_code: req.body.postal_code,
    ident_num: req.body.ident_num,
  };
  console.log(data);

  let sql = "INSERT INTO person SET ?";
  connection.query(sql, data, (p_err, p_rows) => {
    // res.json(p_rows);
    // if (err) throw err;
    // console.log(p_rows.insertId);
    // const id = p_rows.insertId;

    let data2 = {
      person_id: p_rows.insertId,
      company_name: req.body.company_name,
      company_address: req.body.company_address,
      position: req.body.position,
      working_year: req.body.working_year,
    };
    console.log(data2.person_id);
    let sql2 = "INSERT INTO company SET ?";
    connection.query(sql2, data2, (err, rows) => {
      console.log(err);
      res.json(rows);
    });

    connection.end();
  });
});

app.post("/test-data", (req, res, next) => {
  console.log(req.body);
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "day19",
    port: 3306,
  });
  connection.connect();
  connection.end();
  res.json("ok");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
