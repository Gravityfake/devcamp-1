import React from "react";

import productList from "./product";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCart } from "./cartReducer";
import NavbarMenu from "./Navbar";

const css = {
  display: "inline-block",
  width: "22%",
  margin: "1%",
  backgroundColor: "white",
};

const ProductListComp = () => {
  const dispatch = useDispatch();

  function addToCartFunc(x) {
    dispatch(addProductToCart(x));
  }
  const product = productList.map((x) => {
    return (
      <div style={css} key={x.id}>
        <div style={{ padding: "10px" }}>
          <img style={{ maxWidth: "100%" }} src={x.img} alt={x.name} />
          <p>{x.name}</p>
          <p>ราคาขาย {x.sellPrice} บาท</p>
          <p>
            ส่วนลด{" "}
            {Math.round(((x.normalPrice - x.sellPrice) / x.normalPrice) * 100)}{" "}
            %
          </p>
          {x.quantity !== 0 ? (
            <button onClick={() => addToCartFunc(x.id)}>Add to Cart</button>
          ) : (
            <p>Sold-out</p>
          )}
        </div>
      </div>
    );
  });
  return (
    <div>
      <NavbarMenu />
      <div style={{ marginTop: "80px" }}>{product}</div>
    </div>
  );
};

export default ProductListComp;
