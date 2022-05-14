// พนักงานคนที่ 5 ลาออก ลบข้อมูลคนที่ 5 ออก
// DELETE FROM employee WHERE id_employee = 5

// เจ้าของร้านอยากเก็บที่อยู่พนักงานเพิ่ม ใส่ที่อยู่ให้พนักงานแต่ละคน คนไหนไม่รู้ให้เป็น NULL
// ALTER TABLE employee ADD address VARCHAR(255) NULL AFTER created
// UPDATE employee SET address = 'Bangkok' WHERE id_employee = 1
// UPDATE employee SET address = 'Bangkok' WHERE id_employee = 2
// UPDATE employee SET address = 'Chonburi' WHERE id_employee = 3
// UPDATE employee SET address = 'Bangkok' WHERE id_employee = 4

// หาจำนวนพนักงานทั้งหมดในร้าน
// SELECT COUNT(*) FROM employee

// แสดงรายชื่อพนักงานที่อายุน้อยกว่า 20 ปี
// SELECT firstname from employee WHERE age < 20

// แสดงรายชื่อพนักงานทั้งหมดโดยให้แสดงแค่ field ชื่อจริง และ อายุ
// SELECT firstname, age from employee

// แก้ไขชื่อจริงของพนักงานที่ชื่อ Noah ให้เป็น Neil
// UPDATE employee SET firstname = 'Neil' WHERE firstname = 'Noah'
