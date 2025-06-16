import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  emailOpt: "",
  comName: "",
  comFlag: "",
  companyPassword: "",
};

const userSlice = createSlice({
  name: "userContext",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setEmailOpt: (state, action) => {
      state.emailOpt = action.payload;
    },
    setComName: (state, action) => {
      state.comName = action.payload;
    },
    setComFlag: (state, action) => {
      state.comFlag = action.payload;
    },
    setCompanyPassword: (state, action) => {
      state.companyPassword = action.payload;
    },
  },
});

export const {
  setEmail,
  setEmailOpt,
  setComName,
  setComFlag,
  setCompanyPassword,
} = userSlice.actions;

export default userSlice.reducer;
