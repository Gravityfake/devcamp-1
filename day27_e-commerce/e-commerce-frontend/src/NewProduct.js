import React from "react";
import { Button, Form, Input, Space } from "antd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./productReducer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    dispatch(addProduct(values));
    try {
      const newProduct = await axios.post("/api/product/add", {
        name: values.name,
        stock: values.stock,
        category: values.category,
      });
    } catch (e) {
      console.error(e);
    }
    form.resetFields();
    navigate("/");
  };

  const productlist = useSelector((state) => state.product);
  console.log(productlist.productData);

  return (
    <>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space>
          <Form form={form} onFinish={onFinish}>
            <h2>New Product</h2>
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
              <Input />
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
              <Input />
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
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Create
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </>
  );
};

export default NewProduct;
