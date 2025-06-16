import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: "Thursday, November 14, 2024",
  timeZone: "12:00",
  timeSlot: "Asia/Kolkata",
  duration: 30,
  dateTime: "",
  googleMeetingLink: "",
};

const briefingCallSlice = createSlice({
  name: "briefingCall",
  initialState: initialState,
  reducers: {
    setDate: (state, action) => {
      console.log(action.payload);
      state.date = action.payload;
    },
    setTimeZone: (state, action) => {
      console.log(action.payload);
      state.timeZone = action.payload;
    },
    setTimeSlot: (state, action) => {
      console.log(action.payload);
      state.timeSlot = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    setDateTime: (state, action) => {
      console.log(action.payload);
      state.dateTime = action.payload;
    },
    setGoogleMeetingLink: (state, action) => {
      console.log(action.payload);
      state.googleMeetingLink = action.payload;
    },
  },
});

export const {
  setDate,
  setTimeZone,
  setTimeSlot,
  setDuration,
  setDateTime,
  setGoogleMeetingLink,
} = briefingCallSlice.actions;

export const briefingCallSelector = (state) => state.briefingCall;

export default briefingCallSlice.reducer;
