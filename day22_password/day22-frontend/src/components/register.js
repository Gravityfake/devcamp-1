import { Button, Form, Input, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    // call backend here
    axios
      .post("/api/users", {
        username: values.username,
        password: values.password,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    form.resetFields();
  };

  return (
    <div
      style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
    >
      <Space>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="username"
            label="Username"
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
            name="password"
            label="Password"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="firstname"
            label="Firstname"
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
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
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
  );
}
