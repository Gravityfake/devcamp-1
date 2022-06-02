import "./App.css";
import React from "react";
import ProductList from "./ProductList";
import NewProduct from "./NewProduct";
import { Routes, Route, Link } from "react-router-dom";
import EditProduct from "./EditProduct";
import ViewProduct from "./ViewProduct";
import MyUpload from "./MyUpload";

function App() {
  // const arr = [1, 2, 3, 4, 5];
  // arr.findIndex((element) => element == 2); // ก็จะได้ 2

  // // array of object มี id กับ name
  // update: (state, action) => {
  //   const index = state.findIndex((obj) => obj.id == action.payload.id);
  //   console.log(index);
  //   state[index] = action.payload;
  // };

  // arr.splice(2, 1); // คือลบ index ตัวที่ 3 ไป 1 ตัว

  // del: (state, action) => {
  //   const index = state.findIndex((obj) => obj.id == action.payload.id);
  //   if (index !== 1) {
  //     state.splice(index, 1);
  //   }
  // };

  // initState: (state, action) => {
  //   state = action.payload;
  // };

  // initialState: {
  //   data: [];
  // }

  return (
    // <div>
    //   <ProductList />
    //   <NewProduct />
    // </div>
    <Routes>
      <Route index element={<ProductList />} />
      <Route path="/new-product" element={<NewProduct />} />
      <Route path="/edit-product" element={<EditProduct />} />
      <Route path="/view-product" element={<ViewProduct />} />
      <Route path="/myupload" element={<MyUpload />} />
    </Routes>
  );
}

export default App;
