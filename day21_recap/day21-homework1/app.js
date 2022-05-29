const express = require("express");
const app = express();

const router = require("./routes/users");

// app.use(async function (req, res, next) {
//   next();
// });

app.use("/", router);

app.use(async function (req, res, next) {
  const myDate = new Date();
  const additionJSON = {
    data: res.myJSON,
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
}); // Stop and send Forbidden

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
