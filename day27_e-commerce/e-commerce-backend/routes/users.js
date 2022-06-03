var express = require("express");
var router = express.Router();
const pool = require("../config/database");

// Show all products in table
router.get("/", async function (req, res) {
  // const [rows, fields] = await pool.query(`SELECT * from user where id = ?`, [
  //   req.params.id,
  // ]);
  const rows = await pool.query(`Select * from product`);
  res.status(200);
  res.json({
    products: rows[0],
  });
});

// use for upload photo and add photo's filename to database
let filename;

// upload photo to folder (backend)
router.post("/upload", (req, res) => {
  const newpath = __dirname + "/../public/upload-files/";
  const file = req.files.file;
  filename = Date.now() + "--" + file.name;

  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed" });
    } else {
      // insert photo's filename to database
      pool.query(`insert into product (photo) values ('${filename}')`);
      // response
      res.status(200).send({ message: "File Uploaded", filename: filename });
    }
  });
});

// add(update) name, stock, category to database
router.post("/add", async function (req, res) {
  const rows = await pool.query(
    `update product set name = '${req.body.name}' , stock = ${req.body.stock}, category = '${req.body.category}' where photo = '${filename}'`
  );
  res.json(rows[0]);
});

// router.post("/add", async function (req, res) {
//   const rows = await pool.query(
//     `insert into product (name, stock, category, photo) values ('${req.body.name}' , ${req.body.stock}, '${req.body.category}', '${req.body.photo}')`
//   );
//   res.json(rows[0]);
// });

// update name, stock, category in database
router.put("/:id", async function (req, res) {
  const rows = await pool.query(
    `update product set name = '${req.body.name}' , stock = ${req.body.stock}, category = '${req.body.category}' where id = ${req.params.id}`
  );
  res.json(rows[0]);

  // console.log("rows", rows);
  // if (rows.affectedRows == 1) {
  //   res.status(200).json(rows);
  // } else {
  //   res.status(400).send("ID does not exist in database");
  // }
});

router.delete("/:id", async function (req, res) {
  const deletedProduct = await pool.query(
    `delete from product where id = ${req.params.id}`
  );
  console.log(deletedProduct[0]);
  if (deletedProduct[0].affectedRows == 1) {
    res.status(200).json(deletedProduct[0]);
  } else {
    res.status(400).send("CANNOT DELETE. No product in database");
  }
});

module.exports = router;
