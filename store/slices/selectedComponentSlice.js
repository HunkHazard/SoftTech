import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    changeSelectedComponent: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const { changeSelectedComponent } = selectedComponentSlice.actions;

export default selectedComponentSlice.reducer;