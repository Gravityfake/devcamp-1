const express = require("express");
const app = express();

// เอาไปใส่ใน users.js แล้ว
// var router = express.Router();
// router.get("/", async (req, res, next) => {
//   console.log("set variable");
//   req.myJSON = { a: 1, b: 2 }; // assume variable
//   next();
// });

// router.get("/hello", async (req, res, next) => {
//   console.log("set variable");
//   req.myJSON = { hello: 1, hello2: 2 }; // assume variable
//   next();
// });

const router = require("./routes/users");

// app.use(async function (req, res, next) {
//   next();
// });

app.use("/", router);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    thisTime:
      myDate.getDate() + "/" + myDate.getMonth() + "/" + myDate.getFullYear(),
    data: req.myJSON,
    userId: 1,
  };
  res.json(additionJSON);
}); // Stop and send Forbidden

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
