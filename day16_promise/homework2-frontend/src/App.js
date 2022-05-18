import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      //  key: 'avatar',
      render: (t, r) => <img src={"/" + r.avatar} />,
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("/api/users");
      console.log(data);
      const json = data.data.users;
      console.log(json);
      setData(json);
    };
    fetchData();
    console.log("fetch data", fetchData());
  }, []);
  return <Table dataSource={data} columns={columns} pagination={false} />;
}
