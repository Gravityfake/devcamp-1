import React from "react";
import axios from "axios";
import { Button, Form, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { editProduct } from "./productReducer";
import MyUpload from "./MyUpload";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditProduct = () => {
  const navigate = useNavigate();
  const params = useParams();

  const productlist = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    dispatch(editProduct(values));
    await axios.put(`/api/product/${params.id}`, {
      name: values.name,
      stock: values.stock,
      category: values.category,
    });
    // form.resetFields(); // ตอนแรกติดตัวนี้เลยไม่ยอมกลับไปหน้าแรก
    navigate("/");
  };

  const index = productlist.productData.findIndex((obj) => obj.id == params.id);
  console.log(productlist.productData[index].id);

  return (
    <>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space>
          <Form
            form={form}
            // ใช้แบบนี้ไม่ได้เพราะจะได้เป็นค่านี้ตลอดตอนกดส่ง(ค่าจะไม่เปลี่ยนแปลง) ต้องไปใช้ initialValues
            // fields={[
            //   {
            //     name: "name",
            //     value: productlist.productData[index].name,
            //   },
            //   {
            //     name: "stock",
            //     value: productlist.productData[index].stock,
            //   },
            //   {
            //     name: "category",
            //     value: productlist.productData[index].category,
            //   },
            // ]}
            initialValues={{
              name: productlist.productData[index].name,
              stock: productlist.productData[index].stock,
              category: productlist.productData[index].category,
            }}
            onFinish={onFinish}
          >
            {/* <h2>Product ID: {id}</h2> */}
            <h2 style={{ textAlign: "center" }}>
              Product ID: {productlist.productData[index].id}
            </h2>
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
            </Form.Item>{" "}
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
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </>
  );
};

export default EditProduct;
