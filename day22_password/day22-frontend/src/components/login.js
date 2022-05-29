import { Button, Form, Input, Space } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form] = Form.useForm();
  let navigate = useNavigate();
  const onFinish = async (values) => {
    // call backend here
    try {
      const result = await axios.post("/api/auth/token", {
        username: values.username,
        password: values.password,
      });
      localStorage.setItem("token", result.data.token);
      navigate("/profile");
    } catch (e) {
      form.setFields([
        {
          name: "username",
          errors: [e.response.data.error],
        },
      ]);
    }
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
