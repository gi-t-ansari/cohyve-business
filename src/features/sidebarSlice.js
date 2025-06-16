import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setIsSidebarOpen } = sidebarSlice.actions;

export const sidebarSelector = (state) => state.sidebar;

export default sidebarSlice.reducer;
