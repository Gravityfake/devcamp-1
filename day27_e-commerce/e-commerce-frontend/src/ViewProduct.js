import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Form, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./productReducer";
import LocaleProvider from "antd/lib/locale-provider";
import { useNavigate } from "react-router-dom";
import { Descriptions, Badge } from "antd";

const ViewProduct = () => {
  let navigate = useNavigate();

  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [stock, setStock] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setStock(localStorage.getItem("stock"));
    setCategory(localStorage.getItem("category"));
  }, []);

  console.log(id, name, stock, category);

  // const updateProduct = async () => {
  //   await axios.put(`/api/product/${id}`, { name, stock, category });
  //   navigate("/");
  // };

  // const [form] = Form.useForm();
  // const dispatch = useDispatch();

  // const onFinish = () => {
  //   dispatch(addProduct(values));
  // };

  // const productlist = useSelector((state) => state.product);
  // console.log(productlist.productData);

  return (
    <div
      style={{
        marginTop: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Descriptions title="View Product" layout="vertical" bordered>
        {/* <Descriptions.Item label="Status" span={3}>
          <Badge status="processing" text="Running" />
        </Descriptions.Item> */}
        <Descriptions.Item label="Product ID :">{id}</Descriptions.Item>
        {/* <Descriptions.Item label="Photo :">photo</Descriptions.Item> */}
        <Descriptions.Item label="Product Name :">{name}</Descriptions.Item>
        <Descriptions.Item label="Category :">{category}</Descriptions.Item>
        <Descriptions.Item label="Stock Left :">{stock}</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ViewProduct;
