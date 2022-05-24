// module.exports = "test1";

// module.exports = {
//   myProperty: "test1",
//   myFunction: function () {
//     console.log("test myFunc");
//   },
//   func1() {
//     return "func1";
//   },
//   func2() {
//     return "func2";
//   },
//   function(myVar) {
//     return {
//       fun3() {
//         console.log(myVar + ": func3");
//       },
//       func4() {
//         console.log(myVar + ": func4");
//       },
//     };
//   },
// };

// let myVar = "Hello World";
// let myVar2 = { prop1: 1, prop2: 2 };
// let myVar3 = { prop3: 3, prop4: 4 };
// module.exports.myVar = myVar;
// module.exports.myVar2 = myVar2;
// module.exports.myVar3 = myVar3;

module.exports = function (pool) {
  return {
    async getUserId(id) {
      try {
        let [rows, fields] = await pool.query(
          "SELECT * FROM user WHERE id = " + id
        );
        return rows[0] ? rows[0] : {};
      } catch (e) {
        console.error(e);
        return [];
      }
    },
    async getStudentId(id) {
      try {
        let [rows, fields] = await pool.query(
          "SELECT * FROM user WHERE id = " + id
        );
        return rows[0] ? rows[0] : {};
      } catch (e) {
        console.error(e);
        return [];
      }
    },
  };
};
