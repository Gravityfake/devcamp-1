const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// custom 404 page
app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.get("/test", (req, res) => {
  res.send("this is test page");
});

// .listen นี้ต้องอยู่ล่างสุดเสมอ
app.listen(3000, () => {
  console.log("server started on port 3000!");
});
