import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invitePeople: [{ email: "design@cooasis.in", role: "Content" }],
};

const rolesPermissionsSlice = createSlice({
  name: "rolesPermissions",
  initialState,
  reducers: {
    setInvitePeople: (state, action) => {
      console.log(action.payload);
      state.invitePeople = [...state.invitePeople, ...action.payload];
    },
    setRemoveInvitePeople: (state, action) => {
      state.invitePeople = state.invitePeople.filter(
        (user) => user.email !== action.payload
      );
    },
  },
});

export const { setInvitePeople, setRemoveInvitePeople } =
  rolesPermissionsSlice.actions;

export default rolesPermissionsSlice.reducer;
