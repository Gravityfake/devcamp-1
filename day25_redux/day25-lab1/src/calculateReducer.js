import { createSlice } from "@reduxjs/toolkit";
export const calculateReducer = createSlice({
  // ชื่อตัว Reducer
  name: "calculateSalary",
  // ชื่อตัว ค่าเริ่มต้นของ State
  initialState: {
    salary: 18000,
  },
  // ชื่อ Action ใน Reducer
  reducers: {
    increment: (state) => {
      state.salary += 1000;
    },
    decrement: (state) => {
      state.salary -= 1000;
    },
    setDefault: (state, value) => {
      console.log(value);
      state.salary = value.payload;
    },
  },
});
// Export Reducer
export default calculateReducer.reducer;
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { increment, decrement, setDefault } = calculateReducer.actions;
