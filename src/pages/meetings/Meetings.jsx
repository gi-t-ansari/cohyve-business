import React, { useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import ScheduleMeetingModal from "../../components/modals/ScheduleMeetingModal";
import MeetingScheduledModal from "../../components/modals/MeetingScheduledModal";

const Meetings = () => {
  const [openScheduleMeeting, setOpenScheduleMeeting] = useState(false);
  const [openMeetingSuccess, setOpenMeetingSuccess] = useState(false);
  const [meetingData, setMeetingData] = useState(null);
  return (
    <DashboardLayoutSecond>
      <div className="p-4">
        <button
          className="px-4 py-3 bg-[#151515] rounded-2xl"
          onClick={() => setOpenScheduleMeeting(true)}
        >
          Create
        </button>
      </div>
      <ScheduleMeetingModal
        open={openScheduleMeeting}
        onClose={() => setOpenScheduleMeeting(false)}
        setOpenMeetingSuccess={setOpenMeetingSuccess}
        setMeetingData={setMeetingData}
      />
      <MeetingScheduledModal
        open={openMeetingSuccess}
        onClose={() => setOpenMeetingSuccess(false)}
        meetingData={meetingData}
      />
    </DashboardLayoutSecond>
  );
};

export default Meetings;
