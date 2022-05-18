import axios from "axios";
import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAns = async () => {
      let res = await axios.get("/api/users");
      await setData(res.data);
      console.log(data);
    };
    getAns();
  }, []);

  return (
    <Row>
      {data.map((x) => {
        return (
          // <div className="site-card-wrapper">
          <Col span={4} key={x.first_name}>
            <Card>
              <p>{x.first_name}</p>
              <p>{x.email}</p>
              <img src={x.avatar} />
            </Card>
          </Col>
          // </div>
        );
      })}
    </Row>
  );
}

export default App;
