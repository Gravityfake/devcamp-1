// Lab1 - 1. Nesting without using children/props
// import "./App.css";

// function App() {
//   return <TodoListComp />;
// }

// function TodoListComp() {
//   return (
//     <>
//       <p>Todo List No.1</p>
//       <p>Todo List No.2</p>
//       <p>Todo List No.3</p>
//       <TodoFormComp />
//     </>
//   );
// }

// function TodoFormComp() {
//   return <input type="text" name="todoForm" />;
// }

// export default App;

// Lab1 - 2. Nesting using children
// import "./App.css";

// function App() {
//   return (
//     <TodoListComp>
//       <TodoFormComp />
//     </TodoListComp>
//   );
// }

// function TodoListComp(props) {
//   return (
//     <>
//       <p>Todo List No.1</p>
//       <p>Todo List No.2</p>
//       <p>Todo List No.3</p>
//       {props.children}
//     </>
//   );
// }

// function TodoFormComp() {
//   return <input type="text" name="todoForm" />;
// }

// export default App;

// Lab1 - 3. Nesting using props
// import "./App.css";

// function App() {
//   return <TodoListComp form={TodoFormComp} />;
// }

// function TodoListComp(props) {
//   return (
//     <>
//       <p>Todo List No.1</p>
//       <p>Todo List No.2</p>
//       <p>Todo List No.3</p>
//       <props.form />
//     </>
//   );
// }

// function TodoFormComp() {
//   return <input type="text" name="todoForm" />;
// }

// export default App;

// Lab2 - antd
import "./App.css";
import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import ContentComp from "./Content";

const { Header, Content, Footer } = Layout;

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
          // items={new Array(15).fill(null).map((_, index) => {
          //   const key = index + 1;
          //   return {
          //     key,
          //     label: `nav ${key}`,
          //   };
          // })}
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
          <ContentComp />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Dev Camp ©2022 Created by Bow
      </Footer>
    </Layout>
  );
}

export default App;
