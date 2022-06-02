import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "productReducer",
  initialState: {
    productData: [],
  },
  reducers: {
    initState: (state, action) => {
      state.productData = action.payload;
    },

    addProduct: (state, action) => {
      state.productData.push(action.payload);
    },

    editProduct: (state, action) => {
      const index = state.productData.findIndex(
        (obj) => obj.id == action.payload.id
      );
      console.log(index);
      state[index] = action.payload;
    },
  },
});

export default productReducer.reducer;
export const { initState, addProduct, editProduct } = productReducer.actions;
