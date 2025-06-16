import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobileNumber: "",
  otp: "",
  userName: {
    fName: "",
    lName: "",
  },
  userRole: "",
  userWebsite: "",
  userBusinessType: "",
  userIndividualBusinessType: "",
  userRegisteredBusinessType: "",
  panNumer: "",
  panCardName: "",
  confirmationResult: null,
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: initialState,
  reducers: {
    setMobileNumber: (state, action) => {
      console.log(action.payload);
      state.mobileNumber = action.payload;
    },
    setMobileOTP: (state, action) => {
      state.otp = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = { ...state.userName, ...action.payload };
    },
    setUserWebsite: (state, action) => {
      state.userWebsite = action.payload;
    },
    setUserRole: (state, action) => {
      console.log(action.payload);
      state.userRole = action.payload;
    },
    setIndividualBusinessType: (state, action) => {
      console.log(action.payload);
      state.userIndividualBusinessType = action.payload;
    },
    setRegisteredBusinessType: (state, action) => {
      console.log(action.payload);
      state.userRegisteredBusinessType = action.payload;
    },
    setPanNumber: (state, action) => {
      state.panNumer = action.payload;
    },
    setPanCardName: (state, action) => {
      state.panCardName = action.payload;
    },
    setConfirmationResult: (state, action) => {
      // New action to update confirmationResult
      state.confirmationResult = action.payload;
    },
    setUserBusinessType: (state, action) => {
      // New action to update confirmationResult
      console.log(action.payload);
      state.userBusinessType = action.payload;
    },
  },
});

export const {
  setMobileNumber,
  setMobileOTP,
  setUserName,
  setUserWebsite,
  setUserRole,
  setIndividualBusinessType,
  setRegisteredBusinessType,
  setPanNumber,
  setPanCardName,
  setConfirmationResult,
  setUserBusinessType,
} = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
