import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productReducer";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
