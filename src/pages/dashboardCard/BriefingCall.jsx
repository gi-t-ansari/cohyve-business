import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import LoaderSecond from "../../components/smallComponents/loaderSecond/LoaderSecond";
import { useSelector, useDispatch } from "react-redux";

// Images
import circleLogo from "../../assets/images/circleLogo.svg";
import clockVector from "../../assets/images/clock-vector.svg";
import videoVector from "../../assets/images/video-vector.svg";
import calendarVector from "../../assets/images/calendar-vector.svg";
import globeVector from "../../assets/images/globe-vector.svg";

import { gapi } from "gapi-script";
import { setGoogleMeetingLink } from "../../features/briefingCallSlice";

const clientId =
  "135526554091-qrhd49iftfs63qn0p614qbij818q86bo.apps.googleusercontent.com";

function BriefingCall() {
  const date = useSelector((state) => state.briefingCall.date);
  const timeSlot = useSelector((state) => state.briefingCall.timeSlot);
  const timeZone = useSelector((state) => state.briefingCall.timeZone);

  // for Google meet
  const dateTime = useSelector((state) => state.briefingCall.dateTime);
  const time = useSelector((state) => state.briefingCall.timeSlot);

  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("rishirajanand5@gmail.com");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Button hander
  const handleAddGuest = () => {
    setGuest(email);
  };

  useEffect(() => {
    if (loading) {
      // Set a timer to show the loader for 3 seconds
      const timer = setTimeout(() => {
        setLoading(false);
        navigate("/briefing-call-details");
      }, 3000);

      // Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [loading, navigate]);

  // For Google Meet API
  useEffect(() => {
    function initClient() {
      gapi.client
        .init({
          clientId: clientId,
          scope: "https://www.googleapis.com/auth/calendar.events",
        })
        .then(() => {
          return gapi.client.load("calendar", "v3");
        })
        .then(() => {
          console.log("Google Calendar API loaded.");
        })
        .catch((error) => {
          console.error("Error loading GAPI client for API", error);
        });
    }
    gapi.load("client:auth2", initClient);
  }, []);

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignoutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  // Handler
  const handleScheduleEvent = async () => {
    setLoading(true);
    if (!gapi.client.calendar) {
      console.error("Google Calendar API is not loaded.");
      return;
    }

    // Combine date and time from Redux
    const startTime = new Date(`${dateTime} ${time}`);
    console.log(startTime);
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + 30); // 30 minutes meeting duration

    const event = {
      summary: "Scheduled Meeting",
      description: "This meeting is created via Google Calendar API.",
      start: {
        dateTime: startTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: "Asia/Kolkata",
      },
      // add email
      attendees: [{ email: guest }],
      conferenceData: {
        createRequest: {
          requestId: `meet_${Math.random().toString(36).substring(2)}`,
          conferenceSolutionKey: { type: "hangoutsMeet" },
        },
      },
    };

    try {
      const response = await gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
        conferenceDataVersion: 1,
        sendUpdates: "all",
      });
      // console.log("Meeting link:", response.result.hangoutLink);
      dispatch(setGoogleMeetingLink(response.result.hangoutLink));
      // alert(`Meeting link created: ${response.result.hangoutLink}`);
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <>
      {loading ? (
        <LoaderSecond />
      ) : (
        <DashboardLayoutSecond>
          <div className="w-full h-full flex">
            {/* section-1 */}
            <div className="w-[25%] h-full px-[2rem] ml-[1rem] py-[3rem] border-r border-[#7B7B7B17]/20">
              <div className="w-[3rem] h-[3rem] flex justify-center items-center border border-[#7B7B7B17]/20 rounded-full">
                <img
                  src={circleLogo}
                  className="w-[1.7rem] h-[1.7rem]"
                  alt=""
                />
              </div>

              <p className="f-HelveticaNeueLight mt-[1.2rem] text-[#FCFCD8] text-[11px]">
                Account name
              </p>

              <h3 className="f-HelveticaNeueLight text-[#FCFCD8] text-[21px]">
                Event title
              </h3>

              <div className="relative flex items-center mt-[1rem]">
                <img src={clockVector} className="w-[15px] h-[15px]" alt="" />
                <span className="absolute top-[0.7px] f-HelveticaNeueLight ml-[1.5rem] text-[#FCFCD8] text-[11px]">
                  30 min
                </span>
              </div>

              <div className="relative flex items-center mt-[0.7rem]">
                <img src={videoVector} className="w-[15px] h-[15px]" alt="" />
                <p className="pr-[1rem] f-HelveticaNeueLight ml-[0.6rem] text-[#FCFCD8] text-[11px]">
                  Web conferencing details provided upon confirmation.
                </p>
              </div>

              <div className="relative flex items-center mt-[1rem]">
                <img
                  src={calendarVector}
                  className="w-[15px] h-[15px]"
                  alt=""
                />
                <span className="absolute top-[0.7px] f-HelveticaNeueLight ml-[1.5rem] text-[#FCFCD8] text-[11px]">
                  {timeSlot}, {date}
                </span>
              </div>

              <div className="relative flex items-center mt-[1rem]">
                <img src={globeVector} className="w-[15px] h-[15px]" alt="" />
                <span className="absolute top-[0.7px] f-HelveticaNeueLight ml-[1.5rem] text-[#FCFCD8] text-[11px]">
                  {timeZone}
                </span>
              </div>
            </div>

            {/* section-2 */}
            <div className="w-[75%] h-full px-[2rem] ml-[1rem] py-[1.5rem] border-r border-[#7B7B7B17]/20">
              <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[1.2rem]">
                Enter details
              </p>

              <div className="mt-[1rem] w-[300px]">
                <div className="mb-[0.7rem]">
                  <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[14px] mb-[0.4rem]">
                    Name
                  </p>
                  {/* Input */}
                  <input
                    type="text"
                    className="w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] px-[1rem] py-[0.7rem] rounded-xl border-none focus:outline-none"
                  />
                </div>
                <div className="mb-[1rem]">
                  <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[14px] mb-[0.4rem]">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    className="w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] px-[1rem] py-[0.7rem] rounded-xl border-none focus:outline-none"
                  />
                </div>

                <button
                  onClick={handleAddGuest}
                  className="f-HelveticaNeueLight text-[#FCFCD8] text-[14px] bg-[#161616] px-[1rem] py-[0.5rem] rounded-2xl"
                >
                  Add Guests
                </button>
              </div>

              <div className="w-[300px] mt-[2rem]">
                <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[14px] mb-[0.4rem]">
                  Please share anything that will help prepare for our meeting.
                </p>
                <input
                  type="text"
                  className="w-full bg-[#040505] f-HelveticaNeueLight text-[#FCFCD8] px-[1rem] py-[0.7rem] rounded-xl border-none focus:outline-none"
                />
              </div>

              <div className="w-[300px] mt-[1.5rem]">
                <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[12px]">
                  By proceeding, you confirm that you have read and agree
                  to&nbsp;
                  <span className="text-[#E1FF26] underline cursor-pointer">
                    Cohyve's Terms of
                  </span>{" "}
                  Use and&nbsp;
                  <span className="text-[#E1FF26] underline cursor-pointer">
                    Privacy Notice.
                  </span>
                </p>
              </div>

              <button
                onClick={handleScheduleEvent}
                className="f-HelveticaNeueLight text-[#E1FF26] text-[1rem] bg-[#161616] mt-[2rem] px-[2.5rem] py-[1rem] rounded-2xl"
              >
                Schedule Event
              </button>
            </div>
          </div>
        </DashboardLayoutSecond>
      )}
    </>
  );
}

export default BriefingCall;
