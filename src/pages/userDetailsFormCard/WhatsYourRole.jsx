import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserRole } from "../../features/userDetailsSlice";
import formAvatar from "../../assets/images/formavtar.svg";
import ButtonLoader from "../../components/smallComponents/buttonLoader/ButtonLoader";

import { setTrackRolePage } from "../../features/trackProgressbarSlice";

import { IoMdCheckmark } from "react-icons/io";

const WhatsYourRole = () => {
  const userRole = useSelector((state) => state.userDetails.role);
  const flagWebsitePage = useSelector(
    (state) => state.flagPage.flagWebsitePage
  );
  // console.log(flagWebsitePage);
  const dispatch = useDispatch();

  const [role, setRole] = useState(userRole || "");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  // handler
  const handleContinue = () => {
    if (role) {
      setError("");
      console.log(role);
      dispatch(setTrackRolePage(true));
      dispatch(setUserRole(role));
      setLoader(true);

      if (flagWebsitePage) {
        setLoader(true);
        navigate("/user-website-link");
      } else {
        setLoader(true);
        navigate("/review-details");
      }
    } else {
      setError("Please select a role");
    }
  };

  return (
    <>
      <UserDetailsFromLayout>
        <div className="bg-[#0000008A] rounded-[25px] p-4 mt-10">
          <div className="flex items-center justify-between">
            <p className="text-[18px] text-[#FFF5D9] leading-[26px]">
              Hire an onboarding manager for faster account setup! 👩🏽‍💼
            </p>
            <img src={formAvatar} alt="" />
          </div>
          <h3 className="text-[#FFF5D9] text-[14px] leading-[18px] mt-4">
            Know more
          </h3>
        </div>
        <div className="px-[2rem]">
          <div className="text-center mb-4">
            <h2 className="f-HelveticaNeueRoman text-[#FFF5D9] text-[20px] leading-[25px] mt-[35px]">
              What’s your role
            </h2>
            <div className="flex justify-start items-center my-2 mt-[1.5rem]">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={role} // Bind the selected value to the state
                  onChange={(e) => setRole(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="Marketing Manager"
                    control={
                      <Radio
                        icon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full">
                            {/* Empty circle when unchecked */}
                          </span>
                        }
                        checkedIcon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D]  rounded-full">
                            <IoMdCheckmark
                              className="text-[#E1FF26]"
                              size={12}
                            />
                            {/* Icon when checked */}
                          </span>
                        }
                      />
                    }
                    label="Marketing Manager"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] !text-[10px] leading-[14px]"
                  />
                  <FormControlLabel
                    value="Design Head"
                    control={
                      <Radio
                        icon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full ">
                            {/* Empty circle when unchecked */}
                          </span>
                        }
                        checkedIcon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full">
                            <IoMdCheckmark
                              className="text-[#E1FF26]"
                              size={12}
                            />
                            {/* Icon when checked */}
                          </span>
                        }
                      />
                    }
                    label="Design Head"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] !text-[10px] leading-[14px]"
                  />
                  <FormControlLabel
                    value="Human Resource"
                    control={
                      <Radio
                        icon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full ">
                            {/* Empty circle when unchecked */}
                          </span>
                        }
                        checkedIcon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full">
                            <IoMdCheckmark
                              className="text-[#E1FF26]"
                              size={12}
                            />
                            {/* Icon when checked */}
                          </span>
                        }
                      />
                    }
                    label="Human Resource"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] !text-[10px] leading-[14px]"
                  />
                  <FormControlLabel
                    value="Executive Position"
                    control={
                      <Radio
                        icon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full ">
                            {/* Empty circle when unchecked */}
                          </span>
                        }
                        checkedIcon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full">
                            <IoMdCheckmark
                              className="text-[#E1FF26]"
                              size={12}
                            />
                            {/* Icon when checked */}
                          </span>
                        }
                      />
                    }
                    label="Executive Position"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] !text-[10px] leading-[14px]"
                  />
                  <FormControlLabel
                    value="Director/Founder"
                    control={
                      <Radio
                        icon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full ">
                            {/* Empty circle when unchecked */}
                          </span>
                        }
                        checkedIcon={
                          <span className="h-5 w-5 flex items-center justify-center bg-[#3D3D3D] rounded-full">
                            <IoMdCheckmark
                              className="text-[#E1FF26]"
                              size={12}
                            />
                            {/* Icon when checked */}
                          </span>
                        }
                      />
                    }
                    label="Director/Founder"
                    className="f-HelveticaNeueRoman text-[#FFF5D9] !text-[10px] leading-[14px]"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>

          {/* Display error if no role is selected */}
          {error && (
            <p className="text-red-500 text-[12px] leading-[14px] mb-[10px]">
              {error}
            </p>
          )}

          {loader ? (
            <button className="f-HelveticaNeueRoman flex justify-center items-center w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26]  leading-[12px] rounded-full px-4 py-4">
              <ButtonLoader />
              {/* Loading */}
            </button>
          ) : (
            <button
              onClick={handleContinue}
              className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
            >
              Continue
            </button>
          )}
        </div>
      </UserDetailsFromLayout>
    </>
  );
};

export default WhatsYourRole;
