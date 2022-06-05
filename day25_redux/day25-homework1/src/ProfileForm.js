import React from "react";
import { Button, Form, Input, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastname, changeAge } from "./profileReducer";
import NavbarMenu from "./Navbar";

const ProfileForm = () => {
  const profileDetail = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(changeName(values.name));
    dispatch(changeLastname(values.lastname));
    dispatch(changeAge(values.age));
    form.resetFields();
  };
  return (
    <>
      <NavbarMenu />
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Name"
              labelCol={{ span: 8 }}
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
              name="lastname"
              label="Lastname"
              labelCol={{ span: 8 }}
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
              name="age"
              label="Age"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </>
  );
};

export default ProfileForm;
