import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
  // ชื่อตัว Reducer
  name: "profileReducer",
  // ชื่อตัว ค่าเริ่มต้นของ State
  initialState: {
    firstname: "Steve",
    lastname: "Roger",
  },
  // ชื่อ Action ใน Reducer
  reducers: {
    changeName: (state, firstname) => {
      state.firstname = firstname.payload;
    },
    changeLastname: (state, lastname) => {
      state.lastname = lastname.payload;
    },
  },
});
// Export Reducer
export default profileReducer.reducer;
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { changeName, changeLastname } = profileReducer.actions;
