const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/data", (req, res) => {
  res.render("result", { dataResult: `result from ${req.query.name}` });
});

app.get("/api/populations", (req, res) => {
  res.json([
    {
      "ID State": "04000US01",
      State: "Alabama",
      "ID Year": 2019,
      Year: "2019",
      Population: 4903185,
      "Slug State": "alabama",
    },
    {
      "ID State": "04000US02",
      State: "Alaska",
      "ID Year": 2019,
      Year: "2019",
      Population: 731545,
      "Slug State": "alaska",
    },
    {
      "ID State": "04000US04",
      State: "Arizona",
      "ID Year": 2019,
      Year: "2019",
      Population: 7278717,
      "Slug State": "arizona",
    },
  ]);
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
