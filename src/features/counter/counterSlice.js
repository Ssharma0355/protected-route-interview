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
       reset:(state)=>{
        state.value = 0;
    },
    //actions
    incrementByAmount: (state, action) => {
      //   state.value += action.payload; // it was taking as string
        state.value += Number(action.payload);
    },
 
  },
});
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
