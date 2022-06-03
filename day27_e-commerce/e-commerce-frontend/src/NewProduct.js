import React from "react";
import axios from "axios";
import { Button, Form, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "./productReducer";
import { useNavigate } from "react-router-dom";
import MyUpload from "./MyUpload";

const NewProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post("/api/product/add", {
        name: values.name,
        stock: values.stock,
        category: values.category,
        // photo:
      });
    } catch (e) {
      console.error(e);
    }
    dispatch(addProduct(values));
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
            <Form.Item
              name="photo"
              label="Photo"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <MyUpload />
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
