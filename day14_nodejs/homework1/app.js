const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.json());
app.use(express.static("public"));

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/index", (req, res) => {
  res.render("index");
});
app.get("/skill", (req, res) => {
  res.render("skill");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/portfolio", (req, res) => {
  res.render("portfolio");
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
