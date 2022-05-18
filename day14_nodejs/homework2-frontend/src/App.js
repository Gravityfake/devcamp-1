import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
// import { Card } from "antd";

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
      // key: "avatar",
      render: (t, x) => <img src={x.avatar} />,
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/users").then((result) => {
      setData(result.data);
    });
  }, []);
  return <Table dataSource={data} columns={columns} pagination={false} />;

  // return (
  //   <div className="site-card-border-less-wrapper">
  //     <Card title="Card title" bordered={false} style={{ width: 300 }}>
  //       {data.map((x) => [x.first_name, <img src={x.avatar} />])}
  //       {/* {data[0].first_name} */}
  //     </Card>
  //   </div>
  // );
}
