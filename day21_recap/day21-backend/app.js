// const myModule = require("./my_module");
// console.log(myModule); // จะออกทั้งหมดที่เรา exports
// console.log(myModule.myProperty); // test1
// myModule.func1(); // test myFunc

// console.log(myModule.myVar); // Hello World
// console.log(myModule.myVar2.prop1); // 1

// const myVar2 = require("./my_module");
// console.log(myVar2.myVar2.prop1); // 1

// const { myVar3 } = require("./my_module");
// console.log(myVar3.prop4); // 4

// console.log(myModule.func1()); // func1
// console.log(myModule.func2()); // func2

// const myModule2 = require("./my_module")("Input");
// myModule2.func3();
// myModule2.func4();

const express = require("express");
const app = express();
const pool = require("./config/database");

const myModule = require("./model/my_module")(pool);

app.get("/user/:id", async function (req, res, next) {
  console.log(await myModule.getUserId(req.params.id));
  console.log(await myModule.getStudentId(req.params.id));
  res.send("Hello World");
  next();
});
app.listen(3000);
