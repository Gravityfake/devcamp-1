import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Button, Form, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./productReducer";
import LocaleProvider from "antd/lib/locale-provider";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = () => {
  let navigate = useNavigate();

  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [stock, setStock] = useState();
  const [category, setCategory] = useState("");

  useEffect(() => {
    // setID(localStorage.getItem("id"));
    // setName(localStorage.getItem("name"));
    // setStock(localStorage.getItem("stock"));
    // setCategory(localStorage.getItem("category"));
  }, []);

  console.log(id, name, stock, category);

  const updateProduct = async () => {
    await axios.put(`/api/product/${id}`, { name, stock, category });
    // navigate("/myupload");
  };

  const [form] = Form.useForm();
  // const dispatch = useDispatch();

  // const onFinish = () => {
  //   dispatch(addProduct(values));
  // };

  // const productlist = useSelector((state) => state.product);
  // console.log(productlist.productData);

  return (
    <>
      {/* <h1>Product ID: {productlist.productData[0].key}</h1> */}
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space>
          <Form
            form={form}
            onFinish={updateProduct}
            fields={[
              {
                name: "name",
                value: name,
              },
              {
                name: "stock",
                value: stock,
              },
              {
                name: "category",
                value: category,
              },
            ]}
          >
            <h2>Product ID: {id}</h2>
            <Form.Item
              name="name"
              label="Product Name"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="stock"
              label="Stock Left"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input onChange={(e) => setStock(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="category"
              label="Category"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input onChange={(e) => setCategory(e.target.value)} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Link to="/">
                <Button type="primary" htmlType="submit">
                  Edit
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </>
  );
};

export default EditProduct;
