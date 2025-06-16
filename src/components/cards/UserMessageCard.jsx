import React from "react";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../features/sidebarSlice";
import Chip from "../chip/Chip";

const UserMessageCard = ({
  name,
  image,
  lastMessage,
  lastMessageTime,
  selectedChat,
  setSelectedChat,
  ind,
}) => {
  const { isSidebarOpen } = useSelector(sidebarSelector);
  return (
    <div
      className={`w-full h-fit p-3 rounded-2xl cursor-pointer flex justify-between gap-x-2 ${
        selectedChat === ind && "bg-[#141414]"
      } transition-all duration-300 ease-linear`}
      onClick={() => setSelectedChat(ind)}
    >
      <div className="w-[3.1rem] h-[3.1rem] rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>

      <div className="basis-[75%]">
        <div className="flex justify-between items-center">
          <h6 className="text-sm">
            {name?.length > 20 ? `${name?.slice(0, 20)}...` : name}
          </h6>
          <p className="text-xs opacity-55">{lastMessageTime}</p>
        </div>
        <p className="text-xs opacity-55">
          {isSidebarOpen
            ? lastMessage?.length > 23
              ? `${lastMessage?.slice(0, 23)}...`
              : lastMessage
            : lastMessage?.length > 25
            ? `${lastMessage?.slice(0, 25)}...`
            : lastMessage}
        </p>
        <div className="mt-2.5">
          <Chip text={"Request"} bgCol={"#e1ff26"} textCol={"#014f59"} />
        </div>
      </div>
    </div>
  );
};

export default UserMessageCard;
