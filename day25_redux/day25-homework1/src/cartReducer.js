import { CloseSquareFilled } from "@ant-design/icons";
import { createSlice } from "@reduxjs/toolkit";

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState: {
    productAdded: [],
    productInCart: 0,
  },
  reducers: {
    // increase: (state) => {
    //   state.number = state.productList.length;
    // },
    addProductToCart: (state, action) => {
      let check = false; // ยังไม่มีสินค้าในตะกร้า
      console.log(state.productAdded.length); // เริ่มแรกเป็น 0 เพราะยังไม่มีสินค้าในตะกร้าเลย
      for (let i = 0; i < state.productAdded.length; i++) {
        if (state.productAdded[i][0] == action.payload) {
          console.log(state.productAdded[i][0]); // product id
          // มีสินค้าในตะกร้าแล้ว
          check = true;
          state.productAdded[i][1] += 1;
          break;
        }
      }
      console.log(state.productAdded.length);
      console.log(!check); // true ตอนกดแอดครั้งแรก
      // หมายถึงยังไม่มีสินค้าในตะกร้า ก็ push เข้าไป
      if (!check) {
        state.productAdded.push([action.payload, 1]);
        console.log(state.productAdded.length);
        // console.log(action.payload); // id สินค้าที่กดแอด
        state.productInCart = state.productAdded.length;
        // check = false;
      }
    },
  },
});

export default cartReducer.reducer;
export const { addProductToCart } = cartReducer.actions;
