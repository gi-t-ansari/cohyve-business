import React from "react";
import DashboardLayout from "../../components/dashboard/dashboardLayout/DashboardLayout";

import businesslogo from "../../assets/images/businesslogo.svg";

function FindBestTalent() {
  return (
    <DashboardLayout>
        
       <div className="flex flex-col items-center  mt-52 ">
        <img src={businesslogo} alt="Business Logo" />
        <h2 className="text-[#FCFCD8] f-HelveticaNeueRoman"> Finding the best talent for you</h2>
      </div>
    </DashboardLayout>
  );
}

export default FindBestTalent;
