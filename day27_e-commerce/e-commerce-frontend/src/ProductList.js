import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import "./index.css";
import { Table, Tag, Space } from "antd";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { initState, addProduct } from "./productReducer";

const ProductList = () => {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.product);
  // const productlist = useSelector((state) => state.product);
  // console.log(productlist.productData);
  // const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/product");
      console.log(result.data.products);
      // const result = data.data.products;
      // setData(result);
      dispatch(initState(result.data.products));
    })();
    // getData();
    // console.log(getData());
  }, []);

  // const edit = (e, i) => {
  //   console.log(data[i]);
  //   let { id, photo, name, stock, category } = data[i];
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("photo", photo);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("stock", stock);
  //   localStorage.setItem("category", category);
  // };

  // const view = (e, i) => {
  //   console.log(data[i]);
  //   let { id, photo, name, stock, category } = data[i];
  //   localStorage.setItem("id", id);
  //   localStorage.setItem("photo", photo);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("stock", stock);
  //   localStorage.setItem("category", category);
  // };

  // const OnDelete = async (e, i) => {
  //   console.log(data[i]);
  //   await axios.delete(`/api/product/${data[i].id}`);
  // };

  const key = "updatable";

  const onClickFunc = (e, i) => {
    // navigate("/edit-product", {
    //   replace: true,
    //   state: data[i],
    // });
  };

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (pic, r) => (
        <Link to="/view-product">
          {/* <a onClick={(e) => view(e, data.indexOf(r))}> */}
          <a>
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
          </a>
        </Link>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text, r) => (
        <Link to="/view-product">
          <a>{text}</a>
        </Link>
      ),
    },

    {
      title: "Stock Left",
      dataIndex: "stock",
      key: "stock",
      render: (text, r) => (
        <Link to="/view-product">
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: (text, r) => (
        <Link to="/view-product">
          <a>{text}</a>
        </Link>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (t, r) => (
        <div>
          <Link to="/edit-product">
            <Button
              type="primary"

              // onClick={(e) => onClickFunc(e, data.indexOf(r))}
            >
              Edit
            </Button>
          </Link>{" "}
          <Button>Delete</Button>
        </div>
      ),
    },
  ];

  console.log(productlist.productData);

  return (
    <div style={{ margin: "5%" }}>
      <Table columns={columns} dataSource={productlist.productData} />
      <NavLink to="/new-product">
        <button style={{ float: "right", fontSize: "20px" }}>Create</button>
      </NavLink>
    </div>
  );
};

export default ProductList;
