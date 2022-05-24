const express = require("express");
const app = express();

app.use(async (req, res, next) => {
  console.log(req.path + " : 1");
  next();
});
app.use(async (req, res, next) => {
  console.log("2");
  res.send("End Middleware");
  // next();
});
app.use(async (req, res, next) => {
  console.log("3");
  next();
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
