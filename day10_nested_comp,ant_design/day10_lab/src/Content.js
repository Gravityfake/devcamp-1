import { Row, Col } from "antd";
import TableComp from "./Table";
import FormComp from "./Form";

const ContentComp = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <TableComp />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <FormComp />
        </Col>
      </Row>
      <Row>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
    </>
  );
};

export default ContentComp;
