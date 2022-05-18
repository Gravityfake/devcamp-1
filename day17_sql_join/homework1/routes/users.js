var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "", // <== ระบุให้ถูกต้อง
    database: "day17", // <== ระบุ database ให้ถูกต้อง
    port: 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  try {
    const courses = await connection.query(
      "Select c.id, c.name as course_name, i.name as instruction_name From courses as c Left join instructors as I ON i.id = c.teach_by Order by c.id"
    );
    const enrolls = await connection.query(
      "select distinct c.id, c.name, count(e.course_id) as students from enrolls as e left join courses as c on c.id = e.course_id group by e.course_id order by c.id"
    );
    const not_enrolls = await connection.query(
      "SELECT c.id, c.name FROM courses as c WHERE NOT EXISTS (SELECT 1 FROM enrolls as e WHERE e.course_id = c.id) order by c.id;"
    );

    res.json({
      courses: courses[0],
      enrolls: enrolls[0],
      not_enrolls: not_enrolls[0],
    });

    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
