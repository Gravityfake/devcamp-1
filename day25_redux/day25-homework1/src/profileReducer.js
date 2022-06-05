import { createSlice } from "@reduxjs/toolkit";
export const profileReducer = createSlice({
  name: "profileReducer",
  initialState: {
    name: "Stephen",
    lastname: "Strange",
    age: 45,
  },
  reducers: {
    changeName: (state, name) => {
      state.name = name.payload;
    },
    changeLastname: (state, lastname) => {
      state.lastname = lastname.payload;
    },
    changeAge: (state, age) => {
      state.age = age.payload;
    },
  },
});
export default profileReducer.reducer;
export const { changeName, changeLastname, changeAge } = profileReducer.actions;
