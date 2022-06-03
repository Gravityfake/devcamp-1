import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Descriptions, Button } from "antd";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.product);

  const index = productList.productData.findIndex((obj) => obj.id == params.id);
  console.log(productList.productData[index].id);

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Descriptions title="View Product" layout="vertical" bordered>
        <Descriptions.Item label="Photo :">
          <img
            style={{ width: "200px" }}
            src={`http://localhost:3000/static/upload-files/${productList.productData[index].photo}`}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Product ID :">
          {productList.productData[index].id}
        </Descriptions.Item>
        <Descriptions.Item label="Product Name :">
          {productList.productData[index].name}
        </Descriptions.Item>
        <Descriptions.Item label="Category :">
          {productList.productData[index].category}
        </Descriptions.Item>
        <Descriptions.Item label="Stock Left :">
          {productList.productData[index].stock}
        </Descriptions.Item>
      </Descriptions>
      <div>
        <Button type="primary" onClick={() => navigate("/")}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default ViewProduct;
