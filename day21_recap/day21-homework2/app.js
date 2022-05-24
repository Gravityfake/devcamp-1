const express = require("express");
const app = express();
const userRouter = require("./model/from_user");
const studentRouter = require("./model/from_student");

app.use(async function (req, res, next) {
  next();
});

app.use("/", userRouter);
app.use("/", studentRouter);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    data: [req.myJSON],
    additionalData: {
      userId: 1,
      dateTime:
        myDate.getDate() +
        "/" +
        myDate.getMonth() +
        "/" +
        myDate.getFullYear() +
        " " +
        myDate.getHours() +
        ":" +
        myDate.getMinutes() +
        ":" +
        myDate.getSeconds(),
    },
  };
  res.json(additionJSON);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
