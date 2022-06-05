import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileReducer";
import cartReducer from "./cartReducer";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
  },
});

export default store;
