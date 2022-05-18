var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");

// lab1
// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root", // <== ระบุให้ถูกต้อง
//     password: "", // <== ระบุให้ถูกต้อง
//     database: "codecamp", // <== ระบุ database ให้ถูกต้อง
//     port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
//   });

//   // เปิด connection ไปที่ database
//   connection.connect();

//   console.log("start query at: " + new Date().getTime());
//   connection.query("SELECT * from user", (err, rows, fields) => {
//     if (err) throw err;

//     console.log("end query at: " + new Date().getTime());
//     res.json(rows);
//   });

//   // ปิด connection
//   connection.end();
// });

// lab2
// router.get("/", function (req, res, next) {
//   mysql
//     .createConnection({
//       host: "localhost",
//       user: "root", // <== ระบุให้ถูกต้อง
//       password: "", // <== ระบุให้ถูกต้อง
//       database: "codecamp", // <== ระบุ database ให้ถูกต้อง
//       port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
//     })
//     .then((connection) => {
//       const userPromise = connection.query("SELECT * from user");
//       const classroomPromise = connection.query("SELECT * from classroom");

//       Promise.all([userPromise, classroomPromise])
//         .then((rows) => {
//           res.json({
//             users: rows[0][0],
//             classsrooms: rows[1][0],
//           });
//         })
//         .catch((err) => {
//           res.json({ error: err });
//         });

//       // ปิด connection
//       connection.end();
//     });
// });

// lab3
/* GET users listing. */
router.get("/", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "", // <== ระบุให้ถูกต้อง
    database: "codecamp", // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  try {
    const users = await connection.query("SELECT * from user");
    const classsrooms = await connection.query("SELECT * from classroom");
    res.json({
      users: users[0],
      classsrooms: classsrooms[0],
    });
    await connection.end();
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;
