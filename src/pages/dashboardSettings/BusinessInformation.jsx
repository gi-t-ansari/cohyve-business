import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

// Icons
import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";
import plusIcon from "../../assets/images/plusIcon.svg";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  setAddressUpdate,
  setAddNewAddress,
} from "../../features/settingsSlice/businessInformationSlice";

function BusinessInformation() {
  const fullAddressInfo = useSelector(
    (state) => state.businessInformation.fulladdressInfo
  );

  console.log(fullAddressInfo.length);

  const [addresses, setAddresses] = useState([...fullAddressInfo]);
  const [editIndex, setEditIndex] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [isAddnewAddressVisible, setIsAddnewAddressVisible] = useState(true);
  const [isAddressModal, setIsAddressModal] = useState(false);

  const dispatch = useDispatch();

  // Handler to enter edit mode
  const handleAddressEdit = (index) => {
    setEditIndex(index);
    setEditFormData({ ...addresses[index] });
    setIsAddnewAddressVisible(false);
  };

  // Handle changes in the edit form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Save updated address and exit edit mode
  const handleUpdateAddress = () => {
    const updatedAddresses = [...addresses];
    updatedAddresses[editIndex] = editFormData;
    setAddresses(updatedAddresses);

    // Dispatch the updated address to the Redux store
    dispatch(
      setAddressUpdate({
        index: editIndex,
        updatedAddress: editFormData,
      })
    );
    setIsAddnewAddressVisible(true);
    setEditIndex(null);
  };

  // Handler New Address
  const handleNewAddress = () => {
    setIsAddnewAddressVisible(false);
    setIsAddressModal(true);
  };
  const handleSaveNewAddress = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newAddress = {
      address: formData.get("address"),
      city: formData.get("city"),
      pincode: formData.get("pincode"),
      state: formData.get("state"),
      addressType: formData.get("addressType"),
    };

    // Dispatch the new address to the Redux store
    dispatch(setAddNewAddress(newAddress));

    // Add the new address to the component's state
    setAddresses((prev) => [...prev, newAddress]);

    // Reset modal visibility
    setIsAddressModal(false);
    setIsAddnewAddressVisible(true);
  };

  return (
    <div className="w-[80%] h-full overflow-y-auto custom-scrollbar scrollbar-sm px-[1.5rem]">
      {/* Business Name */}
      <div className="flex items-center justify-between ">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Business Name
          </h4>
          <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
            Cooasis Creative Studios Pvt. Ltd
          </span>
        </div>
      </div>

      {/* Line Border */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Business Pan */}
      <div className="flex items-center justify-between ">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Business PAN
          </h4>
          <div className="flex items-center gap-[1rem]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              AAJCC6966B
            </span>
            <div className="flex relative items-center px-[0.5rem] py-[0.2rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
              <div className="relative flex items-center">
                <img src={verifiedbgIcon} alt="" />
                <img
                  src={verifiedtickIcon}
                  className="absolute right-[5px] "
                  alt=""
                />
              </div>
              <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                verified
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Line Border */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* GST Number */}
      <div className="flex items-center justify-between ">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            GST Number
          </h4>
          <div className="flex items-center gap-[1.5rem]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              22AAAAA0000A1Z5
            </span>
            <div className="flex relative items-center px-[0.5rem] py-[0.2rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
              <div className="relative flex items-center">
                <img src={verifiedbgIcon} alt="" />
                <img
                  src={verifiedtickIcon}
                  className="absolute right-[5px] "
                  alt=""
                />
              </div>
              <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                verified
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Address Section */}
      {addresses.map((address, index) => (
        <div
          key={index}
          className="flex items-start justify-between  mb-[1rem]"
        >
          {editIndex === index ? (
            <div className="w-full">
              <form className="flex flex-col gap-[0.7rem]">
                <div className="flex gap-[0.7rem]">
                  <textarea
                    name="address"
                    value={editFormData.address || ""}
                    onChange={handleInputChange}
                    className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border-none focus:outline-none resize-none"
                    rows="3"
                    cols="30"
                    placeholder="full Address"
                  />
                  <div className="flex flex-col gap-[0.4rem]">
                    <input
                      type="text"
                      name="city"
                      value={editFormData.city || ""}
                      onChange={handleInputChange}
                      placeholder="city"
                      className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                    />
                    <input
                      type="text"
                      name="pincode"
                      value={editFormData.pincode || ""}
                      onChange={handleInputChange}
                      placeholder="pincode"
                      className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-[0.7rem]">
                  <input
                    type="text"
                    name="state"
                    value={editFormData.state || ""}
                    onChange={handleInputChange}
                    placeholder="State"
                    className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                  />

                  <div className="w-[320px] relative inline-block overflow-hidden text-[15px] bg-[#000000B5] bg-opacity-70 rounded-[16px]">
                    <select
                      name="addressType"
                      value={editFormData.addressType || ""}
                      onChange={handleInputChange}
                      className="f-HelveticaNeueLight text-[16px] text-[#FCFCD8] bg-[#000000B5] px-[1rem] py-[0.7rem] pr-10 rounded-[16px] appearance-none w-full cursor-pointer focus:outline-none"
                    >
                      <option value="Business Address">Business Address</option>
                      <option value="Communication Address">
                        Communication Address
                      </option>
                    </select>
                    <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none">
                      <RiArrowDownSLine size={20} className="text-[#FCFCD8]" />
                    </span>
                  </div>
                </div>

                {/* Submit button */}
                <div className="mt-[1rem]">
                  <button
                    type="button"
                    onClick={handleUpdateAddress}
                    className="flex items-center gap-[0.5rem] hover:bg-[#171717]/60 px-[0.8rem] py-[0.8rem] rounded-[16px] bg-[#171717]"
                  >
                    <img src={plusIcon} alt="" />
                    <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                      Update Address
                    </span>
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <>
              <div>
                <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                  {address.addressType}
                </h4>
                <div className="flex items-center gap-[1.5rem]">
                  <span className="w-[250px] f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
                    {address.address}, {address.state}, {address.city}{" "}
                    {address.pincode}
                  </span>
                </div>
              </div>
              <div
                onClick={() => handleAddressEdit(index)}
                className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]"
              >
                <img src={penIcon} alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
                  Edit
                </span>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Button */}
      {isAddnewAddressVisible && (
        <div className=" mt-[1rem]">
          <button
            onClick={handleNewAddress}
            className={`flex items-center gap-[0.5rem] hover:bg-[#171717]/60 px-[0.8rem] py-[0.8rem] rounded-[16px] bg-[#171717] ${
              fullAddressInfo.length === 2 && "opacity-50 cursor-not-allowed"
            }`}
          >
            <img src={plusIcon} alt="" />
            <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
              Add New Address
            </span>
          </button>
        </div>
      )}

      {isAddressModal && (
        <div className="w-full ">
          <form
            className="flex flex-col gap-[0.7rem]"
            onSubmit={handleSaveNewAddress} // Handle form submission
          >
            <div className="flex gap-[0.7rem]">
              <textarea
                name="address"
                className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border-none focus:outline-none resize-none"
                rows="3"
                cols="30"
                placeholder="full Address"
                required
              />
              <div className="flex flex-col gap-[0.4rem]">
                <input
                  type="text"
                  name="city"
                  placeholder="city"
                  className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                  required
                />
                <input
                  type="text"
                  name="pincode"
                  placeholder="pincode"
                  className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="flex gap-[0.7rem]">
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-[320px] bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.9rem] rounded-[16px] border-none focus:outline-none"
                required
              />

              <div className="w-[320px] relative inline-block overflow-hidden text-[15px] bg-[#000000B5] bg-opacity-70 rounded-[16px]">
                <select
                  name="addressType"
                  className="f-HelveticaNeueLight text-[16px] text-[#FCFCD8] bg-[#000000B5] px-[1rem] py-[0.7rem] pr-10 rounded-[16px] appearance-none w-full cursor-pointer focus:outline-none"
                  required
                >
                  <option value="Business Address">Business Address</option>
                  <option value="Communication Address">
                    Communication Address
                  </option>
                </select>
                <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none">
                  <RiArrowDownSLine size={20} className="text-[#FCFCD8]" />
                </span>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-[1rem]">
              <button
                type="submit"
                className="flex items-center gap-[0.5rem] hover:bg-[#171717]/60 px-[0.8rem] py-[0.8rem] rounded-[16px] bg-[#171717]"
              >
                <img src={plusIcon} alt="" />
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
                  Save
                </span>
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="mt-[5rem]"></div>
    </div>
  );
}

export default BusinessInformation;
