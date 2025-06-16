import React from "react";

import penIcon from "../../assets/images/penIcon.svg";
import verifiedbgIcon from "../../assets/images/verifiedbgIcon.svg";
import verifiedtickIcon from "../../assets/images/verifiedtickIcon.svg";

function LoginSecurity() {
  return (
    <div className="w-[80%] h-full">
      {/* Login */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Login
          </h4>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Password
          </h4>
          <div className="w-[500px]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              To add a password to your account for the first time, you will
              need to use the password reset page so we can verify your
              identity.
            </span>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#FFFFFF17] my-[1.5rem]"></div>

      {/* Security */}
      <div className="flex items-center justify-between px-[1.5rem]">
        <div>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Security
          </h4>
          <h4 className="f-HelveticaNeueLight text-[#fcfcd8] text-[16px] mb-[0.5rem]">
            Sign out from all devices
          </h4>
          <div className="w-[500px]">
            <span className="f-HelveticaNeueLight text-[#fcfcd8]/50 text-[16px]">
              logged in on a shared device but forgot to sign out ? End all
              sessions by signing out from all devices.
            </span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-[1.5rem] mt-[2rem] flex items-center gap-[2rem]">
        <button className="flex items-center gap-[0.5rem] hover:bg-[#171717]/60 px-[0.8rem] py-[0.8rem] rounded-[16px] bg-[#171717]">
          <span className="f-HelveticaNeueLight text-[#fcfcd8] text-[14px]">
            Sign out from all devices
          </span>
        </button>
        <button className="flex items-center gap-[0.5rem] hover:bg-[#171717]/60 px-[0.8rem] py-[0.8rem] rounded-[16px] bg-[#171717]">
          <span className="f-HelveticaNeueLight text-[#FF8E8E] text-[14px]">
            Delete your account
          </span>
        </button>
      </div>
    </div>
  );
}

export default LoginSecurity;
