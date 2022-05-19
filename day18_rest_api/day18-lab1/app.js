// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const mysql = require("mysql2");
// const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // example 1
// // app.get("/api/users", (req, res) => {
// //   //console.log("test");
// //   res.status(400).send("Bad Request");
// // });

// // example 2
// // app.post("/api/users", (req, res) => {
// //   let name = req.body.name;
// //   console.log(name);
// //   if (name == undefined) {
// //     res.status(404).send("Not found");
// //   } else {
// //     res.status(200).send("OK " + name);
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}`);
// // });

// // example 3
// // let users = require("./user.json");

// // app.get("/user", function (req, res, next) {
// //   return res.status(200).json({
// //     code: 1,
// //     message: "OK",
// //     data: users,
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}`);
// // });

// // example 4
// // let users = require("./user.json");

// // app.post("/user", function (req, res, next) {
// //   let user = {};
// //   user.id = users.length + 1;
// //   user.name = req.body.name;
// //   user.age = Number(req.body.age);
// //   user.movie = req.body.movie;
// //   users.push(user);
// //   console.log("Users :", user.name, "Created!");
// //   return res.status(201).json({
// //     code: 1,
// //     message: "OK",
// //     data: users,
// //   });
// // });

// // app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}`);
// // });

// // example 4 with sql
// //let users = require("./user.json");

// const connection = await mysql.createConnection({
//   host: "localhost",
//   user: "root", // <== ระบุให้ถูกต้อง
//   password: "", // <== ระบุให้ถูกต้อง
//   database: "day18", // <== ระบุ database ให้ถูกต้อง
//   port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
// });

// app.post("/user", function (req, res, next) {
//   let user = {};
//   user.id = users.length + 1;
//   user.name = req.body.name;
//   user.age = Number(req.body.age);
//   user.movie = req.body.movie;
//   // users.push(user);
//   console.log("Users :", user.name, "Created!");
//   connection.connect();
//   connection.query(
//     "insert into user (name, age, movie) values ('" +
//       req.body.name +
//       "' , '" +
//       req.body.age +
//       "' , '" +
//       req.body.movie +
//       "')",
//     (err, rows, fields) => {
//       if (err) throw err;
//       res.json(rows);
//     }
//   );
//   connection.end();
// });

// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });

//example 5
let users = require("./user.json");

app.put("/user/:id", function (req, res, next) {
  const replaceId = req.params.id;
  const position = users.findIndex(function (val) {
    return val.id == replaceId;
  });
  console.log(users[position]);
  try {
    users[position].name = req.body.name;
    users[position].age = Number(req.body.age);
    users[position].movie = req.body.movie;
    return res.status(200).json({
      code: 1,
      message: "OK",
      data: users,
    });
  } catch (error) {
    res.status(404).send("Not Found");
  }
});

// // app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}`);
// // });

// // example 6
// // let users = require("./user.json");

// // app.delete("/user/:id", function (req, res, next) {
// //   const removeId = req.params.id;
// //   try {
// //     const position = users.findIndex((val) => {
// //       return val.id == removeId;
// //     });
// //     users.splice(position, 1);
// //     return res.status(200).json({
// //       code: 1,
// //       message: "OK",
// //       data: users,
// //     });
// //   } catch (error) {
// //     res.status(404).send("Not Found");
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Listening at http://localhost:${port}`);
// // });

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require("./user.json");

app.post("/user", function (req, res, next) {
  let user = {};
  //   user.id = users.length + 1;
  user.name = req.body.name;
  user.age = Number(req.body.age);
  user.movie = req.body.movie;
  //   users.push(user);
  console.log("Users :", user.name, "Created!");
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "", // <== ระบุให้ถูกต้อง
    database: "day18",
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  connection.connect();

  connection.query(
    " insert into users (name, age, movie) values ('" +
      req.body.name +
      "' , '" +
      req.body.age +
      "', '" +
      req.body.movie +
      "' )",
    (err, rows, fields) => {
      if (err) throw err;

      // return response กลับไปหา client โดยแปลง record เป็น json array
      res.json(rows);
    }
  );

  connection.end();
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
