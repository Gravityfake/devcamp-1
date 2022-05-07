import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Table, Tag, Space } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";

const { Header, Content, Footer } = Layout;

const key = "updatable";

const openNotification = () => {
  notification.open({
    key,
    message: "Notification Title",
    description: "description.",
  });
  setTimeout(() => {
    notification.open({
      key,
      message: "New Title",
      description: "New description.",
    });
  }, 1000);
};

const columns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: (pic) => (
      <Avatar
        size={{
          xs: 24,
          sm: 32,
          md: 40,
          lg: 64,
          xl: 80,
          xxl: 100,
        }}
        icon={<AntDesignOutlined />}
      />
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },

  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: "Notification",
    dataIndex: "notification",
    key: "notification",
    render: (button) => (
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    ),
  },
];

const data = [
  {
    key: "1",
    avatar: "",
    name: "John Brown",
    notification: "",
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    avatar: "",
    name: "Jim Green",
    notification: "",
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    avatar: "",
    name: "Joe Black",
    notification: "",
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TableComp = () => {
  return <Table columns={columns} dataSource={data} />;
};

function App() {
  let menu = ["Home", "Portfolio", "Contact", "About Us"];
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={menu.map((x) => {
            return { key: x, label: x };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <TableComp />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
