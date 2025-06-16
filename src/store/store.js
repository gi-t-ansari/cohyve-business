import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import userDetailsReducer from "../features/userDetailsSlice";
import flagPageReducer from "../features/flagPageSlice";
import briefingCallReducer from "../features/briefingCallSlice";
import sidebarSlice from "../features/sidebarSlice";
import trackProgressbarReducer from "../features/trackProgressbarSlice";
import rolesPermissionsReducer from "../features/settingsSlice/rolesPermissionsSlice";
import meetingSlice from "../features/meetingSlice";
import businessInformationReducer from "../features/settingsSlice/businessInformationSlice";
import accountInfoReducer from "../features/settingsSlice/accountInfoSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userDetails: userDetailsReducer,
    flagPage: flagPageReducer,
    briefingCall: briefingCallReducer,
    sidebar: sidebarSlice,
    trackProgressbar: trackProgressbarReducer,
    rolesPermissions: rolesPermissionsReducer,
    meeting: meetingSlice,
    businessInformation: businessInformationReducer,
    accountInfo: accountInfoReducer,
  },
});

export default store;
