import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setTimeSlot } from "../../features/briefingCallSlice";

function TimeSlotSelector({ flagSelectSlot, setFlagSelectSlot }) {
  const times = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
  ];

  // Define slots you want disabled by default
  const disabledSlots = ["13:30", "15:00", "16:30"];

  // Track selected slot
  const [selectedSlot, setSelectedSlot] = useState(null);
  const dispatch = useDispatch();

  const handleSlotClick = (time) => {
    setFlagSelectSlot(true);
    setSelectedSlot(time);
    dispatch(setTimeSlot(time));
    // console.log("Selected Time:", time);
  };

  return (
    <div className="">
      <p className="f-HelveticaNeueLight text-[1rem] text-[#FCFCD8] mb-[0.5rem]">
        Friday, August 25
      </p>
      <div className="flex flex-col gap-[5px]">
        {times.map((time, index) => (
          <button
            key={index}
            onClick={() => handleSlotClick(time)}
            disabled={disabledSlots.includes(time)}
            className={`w-[15rem] px-4 py-2 border border-[#E1FF2621] text-[#E1FF26] 
              rounded-md text-[12px] focus:outline-none transition-all 
              ${
                selectedSlot === time
                  ? "bg-[#E1FF26] text-black" // Highlight selected slot
                  : "hover:bg-[#E1FF26] hover:text-black"
              } 
              ${
                disabledSlots.includes(time)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }
            `}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeSlotSelector;
