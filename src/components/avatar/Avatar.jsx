import React from "react";
import dummyImg from "../../assets/images/dummy-img.jpg";

const Avatar = ({ size, ind, border }) => {
  return (
    <img
      width={size}
      height={size}
      src={dummyImg}
      className={`rounded-full border-2 ${
        border ? `border-[${border}]` : "border-inherit"
      } ${ind !== 0 && `relative right-${ind * 2} `}`}
      alt="profile"
    />
  );
};

export default Avatar;
