import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const columns = [
    {
      title: "Course ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Course",
      dataIndex: "course_name",
      key: "course_name",
    },
    {
      title: "Instructor",
      dataIndex: "instruction_name",
      key: "instruction_name",
    },
    // {
    //   title: "Avatar",
    //   dataIndex: "avatar",
    //   //  key: 'avatar',
    //   render: (t, r) => <img src={"/" + r.avatar} />,
    // },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/users");
      //console.log(data);
      const json = data.data.courses;
      //console.log(json);
      setData(json);
    };
    fetchData();
  }, []);

  const columns2 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "No. of students",
      dataIndex: "students",
      key: "students",
    },
  ];

  const [data2, setData2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data2 = await axios.get("/api/users");
      console.log(data2);
      const json = data2.data.enrolls;
      console.log(json);
      setData2(json);
    };
    fetchData();
  }, []);

  const columns3 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
  ];

  const [data3, setData3] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data3 = await axios.get("/api/users");
      console.log(data3);
      const json = data3.data.not_enrolls;
      console.log(json);
      setData3(json);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>แสดงชื่อคอร์สและชื่อผู้สอน</h2>
      <Table dataSource={data} columns={columns} pagination={false} />
      <h2>แสดงชื่อคอร์สที่มีนักเรียนลงเรียน และจำนวนนักเรียน</h2>
      <Table dataSource={data2} columns={columns2} pagination={false} />
      <h2>แสดงชื่อคอร์สที่ไม่มีนักเรียนลงเรียน</h2>
      <Table dataSource={data3} columns={columns3} pagination={false} />
    </div>
  );
}
