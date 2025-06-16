import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  confirmationResult: null,
  mobileNumber: "+917677749075",
};

const accountInfoSlice = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {
    setConfirmationResult: (state, action) => {
      console.log(action.payload);
      state.confirmationResult = action.payload;
    },
    setMobileNumber: (state, action) => {
      console.log(action.payload);
      state.mobileNumber = action.payload;
    },
  },
});

export const { setConfirmationResult, setMobileNumber } =
  accountInfoSlice.actions;

export default accountInfoSlice.reducer;
