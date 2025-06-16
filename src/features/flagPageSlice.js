import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flagMobileNumberPage: true,
  flagOtpPage: true,
  flagNamePage: true,
  flagRolePage: true,
  flagWebsitePage: true,
  flagBusinessTypePage: true,
};

const flagPageSlice = createSlice({
  name: "flagPage",
  initialState: initialState,
  reducers: {
    setFlagMobileNumberPage: (state, action) => {
      state.flagMobileNumberPage = action.payload;
    },
    setFlagOtpPage: (state, action) => {
      state.flagOtpPage = action.payload;
    },
    setFlagNamePage: (state, action) => {
      state.flagNamePage = action.payload;
    },
    setFlagRolePage: (state, action) => {
      state.flagRolePage = action.payload;
    },
    setFlagBusinessTypePage: (state, action) => {
      state.flagBusinessTypePage = action.payload;
    },
    setFlagWebsitePage: (state, action) => {
      state.flagWebsitePage = action.payload;
    },
  },
});

export const {
  setFlagMobileNumberPage,
  setFlagOtpPage,
  setFlagNamePage,
  setFlagRolePage,
  setFlagBusinessTypePage,
  setFlagWebsitePage,
} = flagPageSlice.actions;

export default flagPageSlice.reducer;
