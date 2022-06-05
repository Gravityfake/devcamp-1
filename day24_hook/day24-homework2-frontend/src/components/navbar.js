import React, { useContext, useState, useEffect } from "react";
import AuthContext from "./auth-context";
import jwt_decode from "jwt-decode";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useModalForm } from "sunflower-antd";
import { Modal, Input, Button, Form, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { Header, Content, Footer } = Layout;

const Navbar = () => {
  const [form] = Form.useForm();
  let navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const { modalProps, formProps, show, formLoading, defaultFormValuesLoading } =
    useModalForm({
      defaultVisible: false,
      autoSubmitClose: true,
      form,
      async submit(values) {
        try {
          const result = await axios.post("/api/auth/token", {
            username: values.username,
            password: values.password,
          });
          localStorage.setItem("token", result.data.token);
          authCtx.login(result.data.token);
          // navigate("/");
        } catch (e) {
          form.setFields([
            {
              name: "username",
              errors: [e.response.data.error],
            },
          ]);
        }
      },
    });

  const isLoggedIn = authCtx.isLoggedIn;
  const name = authCtx.name;

  function handleLogout() {
    localStorage.removeItem("token");
    authCtx.logout();
    navigate("/");
  }

  return (
    <>
      {/* <nav className="navbar">
        <div className="navbar-right">
          {console.log(isLoggedIn)}
          <ul>
            {!isLoggedIn ? (
              <>
                <li>Dashboard</li>
                <Demo />
              </>
            ) : (
              <div>
                <h1>Hello {name}</h1>
                <li>Dashboard</li>
                <li>Stock</li>
                <li>Warehouse</li>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            )}
          </ul>
        </div>
      </nav> */}

      <Modal {...modalProps} title="Log In" okText="submit" width={600}>
        <Spin spinning={formLoading}>
          <>
            <Form layout="inline" {...formProps}>
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input username" }]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input password",
                    type: "password",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
            </Form>
          </>
        </Spin>
      </Modal>
      {/* <Button onClick={show}>show</Button> */}

      <Layout>
        <Header
          style={{
            position: "fixed",
            // zIndex: 1,
            width: "100%",
          }}
        >
          {!isLoggedIn ? (
            <Menu theme="dark" mode="horizontal">
              <NavLink to="/">
                <Menu.Item key="dashboard">Dashboard</Menu.Item>
              </NavLink>
              <Menu.Item key="login" onClick={show}>
                Log In
              </Menu.Item>
            </Menu>
          ) : (
            <Menu theme="dark" mode="horizontal">
              <NavLink to="/">
                <Menu.Item key="dashboard">Dashboard</Menu.Item>
              </NavLink>
              <NavLink to="/stock">
                <Menu.Item key="stock">Stock Management</Menu.Item>
              </NavLink>
              <NavLink to="/warehouse">
                <Menu.Item key="warehouse">Warehouse Management</Menu.Item>
              </NavLink>
              <Menu.Item key="logout" onClick={handleLogout}>
                Log Out
              </Menu.Item>
              <Menu.Item key="username">Hello {name}</Menu.Item>
            </Menu>
          )}
        </Header>
      </Layout>
    </>
  );
};

export default Navbar;
