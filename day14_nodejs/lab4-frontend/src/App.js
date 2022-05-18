import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const columns = [
    {
      title: "State",
      dataIndex: "State",
      key: "State",
    },
    {
      title: "Year",
      dataIndex: "Year",
      key: "Year",
    },
    {
      title: "Population",
      dataIndex: "Population",
      key: "Population",
    },
  ];
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/populations").then((result) => {
      setData(result.data);
    });
  }, []);
  return <Table dataSource={data} columns={columns} pagination={false} />;
}
