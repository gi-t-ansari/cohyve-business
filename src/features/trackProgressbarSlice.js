import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trackMobileNumberPage: false,
  trackOtpPage: false,
  trackNamePage: false,
  trackRolePage: false,
  trackWebsitePage: false,
  trackBusinessTypePage: false,
};

const trackProgressbarSlice = createSlice({
  name: "trackProgressbar",
  initialState: initialState,
  reducers: {
    setTrackMobileNumberPage: (state, action) => {
      console.log(action.payload);
      state.trackMobileNumberPage = action.payload;
    },
    setTrackOtpPage: (state, action) => {
      console.log(action.payload);
      state.trackOtpPage = action.payload;
    },
    setTrackNamePage: (state, action) => {
      console.log(action.payload);
      state.trackNamePage = action.payload;
    },
    setTrackRolePage: (state, action) => {
      console.log(action.payload);
      state.trackRolePage = action.payload;
    },
    setTrackBusinessTypePage: (state, action) => {
      console.log(action.payload);
      state.trackBusinessTypePage = action.payload;
    },
    setTrackWebsitePage: (state, action) => {
      state.trackWebsitePage = action.payload;
    },
  },
});

export const {
  setTrackMobileNumberPage,
  setTrackOtpPage,
  setTrackNamePage,
  setTrackRolePage,
  setTrackBusinessTypePage,
  setTrackWebsitePage,
} = trackProgressbarSlice.actions;

export default trackProgressbarSlice.reducer;
