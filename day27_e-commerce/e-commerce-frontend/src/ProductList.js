import React from "react";
import "./App.css";
import "./index.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Table, Avatar, Button } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initState, deleteProduct } from "./productReducer";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.product);

  const getData = async () => {
    const result = await axios.get("/api/product");
    // console.log(result.data.products);
    dispatch(initState(result.data.products));
  };

  useEffect(() => {
    getData();
  }, [productlist.productData]);

  // const edit = (e, i) => {
  //   console.log(data[i]);
  //   let { id, photo, name, stock, category } = data[i];
  //   localStorage.setItem("id", id);
  // };

  // const index = productlist.productData.findIndex((obj) => obj.id == params.id);
  // console.log(productlist.productData[index].id);

  const deleteFunc = async (e, i) => {
    console.log(productlist.productData[i].id);
    await axios.delete(`/api/product/${productlist.productData[i].id}`);
    dispatch(deleteProduct(productlist.productData[i].id));
  };

  const key = "updatable";

  const columns = [
    {
      title: "Photo",
      dataIndex: "photo",
      key: "photo",
      render: (t, r) => (
        <a onClick={(e) => navigate(`/view-product/${r.id}`)}>
          <div>
            {/* <img
              style={{ width: "180px" }}
              src={`http://localhost:3000/static/upload-files/${r.photo}`}
            /> */}
            <Avatar
              src={`http://localhost:3000/static/upload-files/${r.photo}`}
            />
          </div>
        </a>
      ),
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text, r) => (
        <a onClick={(e) => navigate(`/view-product/${r.id}`)}>{text}</a>
      ),
    },

    {
      title: "Stock Left",
      dataIndex: "stock",
      key: "stock",
      render: (text, r) => (
        <a onClick={(e) => navigate(`/view-product/${r.id}`)}>{text}</a>
      ),
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
      render: (text, r) => (
        <a onClick={(e) => navigate(`/view-product/${r.id}`)}>{text}</a>
      ),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (t, r) => (
        <div>
          <Button
            style={{ marginRight: "20px" }}
            type="primary"
            onClick={() => navigate(`/edit-product/${r.id}`)}
          >
            {/* <Button type="primary" onClick={(e) => edit(e, r)}> */}
            Edit
          </Button>

          <Button
            type="danger"
            onClick={(e) => deleteFunc(e, productlist.productData.indexOf(r))}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ margin: "5%" }}>
      <Table
        columns={columns}
        dataSource={productlist.productData}
        pagination={false}
      />
      <div style={{ float: "right", margin: "20px" }}>
        <a href="/new-product">
          <Button type="primary">Create</Button>
        </a>
      </div>
      {/* {JSON.stringify(productlist)} */}
    </div>
  );
};

export default ProductList;
