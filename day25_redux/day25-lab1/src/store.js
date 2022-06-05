import { configureStore } from "@reduxjs/toolkit";
import calculateReducer from "./calculateReducer";
import profileReducer from "./profileReducer";

const store = configureStore({
  reducer: {
    counter: calculateReducer,
    profile: profileReducer,
  },
});

export default store;
