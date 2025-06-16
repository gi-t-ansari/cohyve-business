import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    setMeeting: (state, action) => {
      state.data = { ...action.payload };
    },
  },
});

export const { setMeeting } = meetingSlice.actions;

export const meetingSelector = (state) => state.meeting;

export default meetingSlice.reducer;
