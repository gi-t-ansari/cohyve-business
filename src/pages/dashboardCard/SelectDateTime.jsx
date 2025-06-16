import React, { useEffect, useState } from "react";
import DashboardLayoutSecond from "../../components/dashboard/dashboardLayout/DashbordLayoutSecond";
import { useNavigate, useLocation } from "react-router-dom";

// components
import TimeSlotSelector from "../../components/smallComponents/TimeSlotSelector";

// Calendar
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, CssBaseline } from "@mui/material";
import dayjs from "dayjs";
import { darkTheme } from "../../utils/custom.style";

// Timezone
import Select from "react-select";
import { FaGlobe } from "react-icons/fa";
import moment from "moment-timezone";
import { customStyles } from "../../utils/custom.style";

// Images
import circleLogo from "../../assets/images/circleLogo.svg";
import clockVector from "../../assets/images/clock-vector.svg";
import videoVector from "../../assets/images/video-vector.svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  briefingCallSelector,
  setDate,
  setTimeZone,
  setDateTime,
} from "../../features/briefingCallSlice";

function SelectDateTime() {
  const timezones = moment.tz.names().map((tz) => ({
    value: tz,
    label: `${tz} (${moment().tz(tz).format("h:mm A")})`,
  }));

  // state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimezone, setSelectedTimezone] = useState(timezones[0]);
  const [flagSelectSlot, setFlagSelectSlot] = useState(false);
  const { duration } = useSelector(briefingCallSelector);
  // console.log(duration);

  // redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const unavailableDates = [
    dayjs("2024-10-28"),
    dayjs("2024-10-29"),
    dayjs("2024-10-30"),
  ];

  const disableUnavailableDates = (date) => {
    return unavailableDates.some((unavailableDate) =>
      date.isSame(unavailableDate, "day")
    );
  };

  // Time Zone
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedTimezone((prev) => ({
        ...prev,
        label: `${prev.value} (${moment().tz(prev.value).format("h:mm A")})`,
      }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handlers
  const handleDate = (newValue) => {
    setSelectedDate(newValue);
    dispatch(setDate(newValue.format("dddd, MMMM D, YYYY")));
    dispatch(setDateTime(newValue.format("ddd MMM D YYYY")));
    // console.log("Selected Date:", newValue.format("ddd MMM D YYYY"));
  };

  const handleTimeZone = (timezone) => {
    setSelectedTimezone(timezone);
    dispatch(setTimeZone(timezone.value));
    // console.log("Selected Timezone:", timezone.value);
  };

  const handleProceed = () => {
    navigate("/briefing-call");
  };

  // Check if all selections are made
  const isProceedEnabled = selectedDate && selectedTimezone && flagSelectSlot;

  return (
    <DashboardLayoutSecond>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="w-full h-full flex">
          {/* section-1 */}
          <div className="w-[25%] h-full px-[2rem] ml-[1rem] py-[3rem] border-r border-[#7B7B7B17]/20">
            <div className="w-[3rem] h-[3rem] flex justify-center items-center border border-[#7B7B7B17]/20 rounded-full">
              <img src={circleLogo} className="w-[1.7rem] h-[1.7rem]" alt="" />
            </div>

            <p className="f-HelveticaNeueLight mt-[1.2rem] text-[#FCFCD8] text-[11px]">
              Account name
            </p>

            <h3 className="f-HelveticaNeueLight text-[#FCFCD8] text-[21px]">
              Design Consultation
            </h3>

            <div className="relative flex items-center mt-[1rem]">
              <img src={clockVector} className="w-[15px] h-[15px]" alt="" />
              <span className="absolute top-[0.7px] f-HelveticaNeueLight ml-[1.5rem] text-[#FCFCD8] text-[11px]">
                {duration || 30} min
              </span>
            </div>

            <div className="relative flex items-center mt-[0.7rem]">
              <img src={videoVector} className="w-[15px] h-[15px]" alt="" />
              <p className="pr-[1rem] f-HelveticaNeueLight ml-[0.6rem] text-[#FCFCD8] text-[11px]">
                Web conferencing details provided upon confirmation.
              </p>
            </div>
          </div>

          {/* section-2 */}
          <div className="w-[40%] h-full px-[2rem] ml-[1rem] py-[3rem] border-r border-[#7B7B7B17]/20">
            <p className="f-HelveticaNeueLight text-[#FCFCD8] text-[1.2rem]">
              Select a Date & Time
            </p>

            <div className="flex justify-start mt-[1rem]">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  openTo="day"
                  value={selectedDate}
                  onChange={(newValue) => handleDate(newValue)}
                  shouldDisableDate={disableUnavailableDates}
                />
              </LocalizationProvider>
            </div>

            {/* Time Zone */}
            <div>
              <p className="f-HelveticaNeueLight text-[#FCFCD8]">Time zone</p>
              <div className="flex items-center">
                <FaGlobe color="#FCFCD8" />
                <Select
                  options={timezones}
                  value={selectedTimezone}
                  onChange={(timezone) => handleTimeZone(timezone)}
                  styles={customStyles}
                  isSearchable={false}
                  menuPlacement="top"
                  components={{ IndicatorSeparator: () => null }}
                />
              </div>
            </div>

            <button
              onClick={handleProceed}
              disabled={!isProceedEnabled}
              className={`px-[2rem] py-[0.5rem] mt-[1.5rem] rounded-xl border border-[#E1FF26] 
              f-HelveticaNeueLight text-[#FCFCD8] ${
                isProceedEnabled
                  ? "hover:bg-[#E1FF26] hover:text-black"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Proceed
            </button>
          </div>

          {/* section-3 */}
          <div className="w-[35%] h-full py-[3rem] flex justify-center">
            {selectedDate && (
              <TimeSlotSelector
                flagSelectSlot={flagSelectSlot}
                setFlagSelectSlot={setFlagSelectSlot}
              />
            )}
          </div>
        </div>
      </ThemeProvider>
    </DashboardLayoutSecond>
  );
}

export default SelectDateTime;
