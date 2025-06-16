import React, { useState } from "react";

import { RiArrowDownSLine } from "react-icons/ri";

import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";
import crossIcon from "../../assets/images/crossIcon.svg";
import plusIcon from "../../assets/images/plusIcon.svg";
import shareIcon from "../../assets/images/shareIcon.svg";
import { useDispatch } from "react-redux";
import {
  setInvitePeople,
  setRemoveInvitePeople,
} from "../../features/settingsSlice/rolesPermissionsSlice";

import { useSelector } from "react-redux";

function RolesPermissions() {
  const pendingStateUsers = useSelector(
    (state) => state.rolesPermissions.invitePeople
  );

  const [fields, setFields] = useState([{ email: "", role: "Manager" }]);
  const [userList, setUserList] = useState([...pendingStateUsers]);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  // Helper function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Add a new field
  const addField = () => {
    // Check if the last field has a valid email
    const lastField = fields[fields.length - 1];
    if (!validateEmail(lastField.email)) {
      setError(true);
      return;
    }
    // Reset error state if validation passes
    setError(false);
    const newFields = [...fields, { email: "", role: "Manager" }];
    setFields(newFields);
  };

  // Remove a field
  const removeField = (index) => {
    const newFields = fields.filter((_, i) => i !== index);
    setFields(newFields);
  };

  // Update field data
  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  // Handler
  const handleShareAccess = () => {
    const allValid = fields.every((field) => validateEmail(field.email));
    if (!allValid) {
      setError(true);
      return;
    }
    // Reset error state if validation passes
    setError(false);
    dispatch(setInvitePeople(fields));
    setFields([{ email: "", role: "Manager" }]);
    setUserList((prevData) => [...prevData, ...fields]);
  };

  const handleRemoveUser = (email) => {
    dispatch(setRemoveInvitePeople(email));
    setUserList((prevList) => prevList.filter((user) => user.email !== email));
  };

  return (
    <div className="w-[80%] h-full overflow-y-auto custom-scrollbar scrollbar-sm">
      {/* Account Access */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Account Access
          </h4>
          <div className="flex items-center gap-[1.5rem]">
            <div>
              <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                rupesh@cooasis.in
              </span>
            </div>
            <div className="flex items-center px-[1rem] py-[0.1rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
              <span className="f-HelveticaNeueLight text-[#FCFCD880] text-[14px]">
                Super admin
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]">
          <img src={penIcon} alt="" />
          <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[13px]">
            Edit
          </span>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Your Team */}
      <div className="px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Your Team
          </h4>
          <div className="flex items-center gap-[1rem]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              Share account access with your team members by adding it your team
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[1.5rem]">
          <div className="flex items-center gap-[1.5rem]">
            <div>
              <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                akshay@cooasis.in
              </span>
            </div>
            <div className="flex items-center px-[1rem] py-[0.1rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
              <span className="f-HelveticaNeueLight text-[#FCFCD880] text-[14px]">
                Admin
              </span>
            </div>
          </div>

          <div className="flex items-center gap-[0.5rem]">
            {/* Change role */}
            <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#FFE67B12]/10">
              <span className="f-HelveticaNeueLight text-[#FFE67B] text-[13px]">
                Change Role
              </span>
            </div>
            {/* Remove */}
            <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]">
              <img src={crossIcon} alt="" />
              <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[13px]">
                Remove
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Border */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Design */}
      <div className="mt-[1.5rem] px-[1.5rem]">
        {userList.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-[1rem]"
          >
            <div className="flex items-center gap-[1.5rem]">
              <div>
                <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
                  {user.email}
                </span>
              </div>
              <div className="flex items-center px-[1rem] py-[0.1rem] border border-[#FFFFFF17] bg-[#171717] gap-[5px] rounded-3xl">
                <span className="f-HelveticaNeueLight text-[#FCFCD880] text-[14px]">
                  {user.role}
                </span>
              </div>
            </div>

            {/* buttons */}
            <div className="flex items-center gap-[0.5rem]">
              {/* Pending invite */}
              <div className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#FFE67B12]/10">
                <span className="f-HelveticaNeueLight text-[#FFE67B] text-[13px]">
                  Pending Invite
                </span>
              </div>

              {/* Remove */}
              <button
                onClick={() => handleRemoveUser(user.email)}
                className="flex items-center gap-[3px] px-[0.6rem] py-[0.2rem] rounded-[9px] cursor-pointer bg-[#171717]"
              >
                <img src={crossIcon} alt="Remove Icon" />
                <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[13px]">
                  Remove
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Border */}
      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Invite More People */}
      <div className="px-[1.5rem]">
        <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[1rem]">
          Invite More People
        </h4>

        {/* Form Fields */}
        <div>
          {fields.map((field, index) => (
            <div
              key={index}
              className="w-[680px] flex justify-between items-center mb-[0.8rem]"
            >
              <div className="flex items-center gap-[0.5rem]">
                {/* Email Input */}
                <div className="w-[320px]">
                  <input
                    type="text"
                    name="email"
                    value={field.email}
                    onChange={(e) => handleInputChange(index, e)}
                    placeholder="manager@cooasis.in"
                    className={`w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] placeholder-[#FCFCD8]/50 px-[1rem] py-[0.7rem] rounded-[16px] border ${
                      error ? "border-red-500" : "border-[#040505]"
                    } focus:outline-none`}
                  />
                </div>

                {/* Role Select */}
                <div className="w-[200px] relative inline-block overflow-hidden text-[15px] bg-[#000000B5] bg-opacity-70 rounded-[16px]">
                  <select
                    name="role"
                    value={field.role}
                    onChange={(e) => handleInputChange(index, e)}
                    className="f-HelveticaNeueLight text-[16px] text-[#E1FF26] bg-inherit px-[1rem] py-[0.7rem] pr-10 rounded-[16px] appearance-none w-full cursor-pointer"
                  >
                    <option value="Manager">Manager</option>
                    <option value="Admin">Admin</option>
                    <option value="Content">Content</option>
                  </select>
                  <span className="absolute inset-y-0 right-4 top-1 flex items-center pointer-events-none">
                    <RiArrowDownSLine size={20} className="text-[#e1ff26]" />
                  </span>
                </div>
              </div>

              {/* Remove Button */}
              <div
                onClick={() => removeField(index)}
                className="flex items-center gap-[10px] px-[1rem] py-[0.7rem] rounded-[16px] cursor-pointer bg-[#171717]"
              >
                <img
                  src={crossIcon}
                  className="w-[1rem] h-[1rem]"
                  alt="Remove"
                />
                <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[16px]">
                  Remove
                </span>
              </div>
            </div>
          ))}

          {/* Add More Button */}
          <div className="w-[680px] flex justify-between items-center">
            <div className="flex items-center gap-[0.5rem]">
              <div
                onClick={addField}
                className="flex items-center gap-[10px] px-[1rem] py-[0.7rem] rounded-[16px] cursor-pointer bg-[#171717]"
              >
                <img
                  src={plusIcon}
                  className="w-[0.7rem] h-[0.7rem]"
                  alt="Add More"
                />
                <span className="f-HelveticaNeueLight text-[#FCFCD8] text-[16px]">
                  Add More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="w-[730px] px-[1.5rem] my-[1.8rem]">
        <p className="f-HelveticaNeueLight text-[#FCFCD880]/50 text-[14px]">
          They will receive an email with the link to accept invite. Please
          accept the invite before the expiry time. The expiry time for the
          invite is 7 days.
        </p>
      </div>

      {/* Share Access Button */}
      <div className="px-[1.5rem] flex">
        <div
          onClick={handleShareAccess}
          className="flex items-center gap-[10px] px-[1rem] py-[0.7rem] rounded-[16px] cursor-pointer bg-[#171717]"
        >
          <img src={shareIcon} className="w-[1rem] h-[1rem]" alt="" />
          <span className="f-HelveticaNeueLight text-[#E1FF26] text-[16px]">
            Share Access
          </span>
        </div>
      </div>

      <div className="mb-[5rem]"></div>
    </div>
  );
}

export default RolesPermissions;
