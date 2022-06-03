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
      // debugger;
      const index = state.productData.findIndex(
        (obj) => obj.id == action.payload.id
      );
      // console.log(action);
      // console.log(index);
      state.productData[index] = action.payload;
    },
    deleteProduct: (state, action) => {
      const index = state.productData.findIndex(
        (obj) => obj.id == action.payload.id
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default productReducer.reducer;
export const { initState, addProduct, editProduct, deleteProduct } =
  productReducer.actions;
