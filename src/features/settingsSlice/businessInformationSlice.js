import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fulladdressInfo: [
    {
      address:
        "307, Chincholi Bunder Rd, Malad, Rajan Pada, Mindspace, Malad West",
      state: "Mumbai",
      city: "Maharashtra",
      pincode: "400064",
      addressType: "Business Address",
    },
  ],
};

// Create array

const businessInformationSlice = createSlice({
  name: "businessInformation",
  initialState,
  reducers: {
    setAddNewAddress: (state, action) => {
      console.log(action.payload);
      state.fulladdressInfo = [...state.fulladdressInfo, action.payload];
    },
    setAddressUpdate: (state, action) => {
      const { index, updatedAddress } = action.payload;
      state.fulladdressInfo[index] = updatedAddress;
    },
  },
});

export const { setAddNewAddress, setAddressUpdate } =
  businessInformationSlice.actions;

export default businessInformationSlice.reducer;
