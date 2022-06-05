import React from "react";
import "antd/dist/antd.css";
import { Modal, Layout, Menu, Input } from "antd";
import ProfileForm from "./ProfileForm";
import ProductListComp from "./ProductListComp";
import { useSelector, useDispatch } from "react-redux";
import { Space } from "antd";
import { createFromIconfontCN } from "@ant-design/icons";
import { Badge, Avatar } from "antd";

import { NavLink } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: [
    "//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js", // icon-javascript, icon-java, icon-shoppingcart (overrided)
    "//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js", // icon-shoppingcart, icon-python
  ],
});

const NavbarMenu = () => {
  const profileDetail = useSelector((state) => state.profile);
  const addProduct = useSelector((state) => state.cart);

  // const centerStyle = {
  //   position: "relative",
  //   display: "flex",
  //   justifyContent: "center",
  //   backgroundColor: "salmon",
  // };

  const rightStyle = { position: "absolute", top: 0, right: 30 };
  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100vw",
          padding: "0",
        }}
      >
        <Menu
          // style={centerStyle}
          // theme="light"
          mode="horizontal"
          // defaultSelectedKeys={["2"]}
        >
          <Menu.Item>
            <NavLink to="/product">Product List</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/cart">Cart</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
          <div style={rightStyle}>
            <Menu.Item style={{ float: "right" }}>
              Hello {profileDetail.name} {profileDetail.lastname}
            </Menu.Item>
            <Menu.Item style={{ float: "right" }}>
              <NavLink to="/cart">
                <Space>
                  <Badge count={addProduct.productInCart}>
                    <IconFont
                      style={{ fontSize: "180%" }}
                      type="icon-shoppingcart"
                    />
                  </Badge>
                </Space>
              </NavLink>
            </Menu.Item>
          </div>
        </Menu>
      </Header>
    </Layout>
  );
};

export default NavbarMenu;
