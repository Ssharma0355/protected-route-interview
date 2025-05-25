import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //actions
    increment: (state) => {
      state.value += 1;
    },
    //actions
    decrement: (state) => {
      state.value -= 1;
    },
    //actions
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
