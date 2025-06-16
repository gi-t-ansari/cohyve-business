import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsFromLayout from "../../components/userDetailsForm/UserDetailsFromLayout";
import congratesLogo from "../../assets/images/congrates.svg";
import congratesBgLogo from "../../assets/images/congrates-bg.svg";
import Loader from "../loader/Loader";

const Congratulations = () => {
  const [loading, setLoading] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleExploreDashboard = () => {
    setLoading(true);
    setLoader(true);
    setTimeout(() => {
      setLoading(false);
      // Redirect to the dashboard after loading
      navigate("/create-project");
    }, 5000);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <UserDetailsFromLayout>
          <div className="px-[2rem] flex flex-col items-center">
            <div>
              <img
                src={congratesBgLogo}
                alt=""
                className="absolute z-20 left-[205px] top-[55px]"
              />
              <img
                src={congratesLogo}
                alt=""
                className="absolute z-20 left-[216px] top-[70px]"
              />
            </div>
            <div className="w-full">
              <h2 className="f-HelveticaNeueLight text-[25px] text-[#FFF5D9] leading-[35px] text-center mt-20">
                Congratulations, <br />
                Your profile is verified!
              </h2>
              <div className="my-10">
                <p className="f-HelveticaNeueLight text-center text-[#FFF5D975] text-[14px] leading-[19px] max-w-[400px]">
                  Thank you for submitting your details. Your profile has been
                  verified and you can start creating projects right away.
                </p>
                <p className="f-HelveticaNeueLight text-center text-[#FFF5D975] text-[14px] leading-[19px] max-w-[400px] mt-4">
                  In the meantime, you can also proceed with your KYB to enjoy a
                  hassle-free experience with us, or you can choose to do this
                  later.
                </p>
              </div>
              <button className="f-HelveticaNeueRoman w-full bg-transparent text-[#FFF5D959] text-[16px] leading-[12px] rounded-full px-4 py-[18px] border-[1px] border-[#FFFFFF29] mb-3">
                Complete KYB
              </button>
            </div>
            {loader ? (
              <button
                onClick={handleExploreDashboard}
                type="button"
                className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
              >
                Loading...
              </button>
            ) : (
              <button
                onClick={handleExploreDashboard}
                type="button"
                className="f-HelveticaNeueRoman w-full hover:bg-[#00000063] bg-[#000000B5] text-[#E1FF26] text-[15px] leading-[12px] rounded-full px-4 py-[18px]"
              >
                Explore Dashboard
              </button>
            )}
          </div>
        </UserDetailsFromLayout>
      )}
    </>
  );
};

export default Congratulations;
