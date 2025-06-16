import React from "react";
import { MdBolt } from "react-icons/md";
import tickIcon from "../../assets/images/tic-icon.svg";

const ServiceCard = ({ service, watch, register }) => {
  return (
    <label
      className={`relative flex flex-col justify-end w-[23%] h-48 rounded-2xl  cursor-pointer overflow-hidden  bg-cover bg-center ${
        watch("selectedService") === service?.name && "ring-4 ring-[#292929]"
      }`}
      style={{
        backgroundImage: `url(${service.image})`,
      }}
    >
      <input
        type="radio"
        value={service?.name}
        {...register("selectedService")}
        className="hidden"
      />
      <div
        className="absolute inset-0 flex justify-end"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 29.36%, rgba(0, 0, 0, 0.64) 63.68%, #000000 100%)",
        }}
      >
        {watch("selectedService") === service?.name && (
          <div className="h-[19px] w-[19px] flex justify-center items-center rounded-full bg-[#111111] mt-2 mr-2">
            <img src={tickIcon} alt="tick" />
          </div>
        )}
      </div>
      <div className="flex justify-between items-end px-4 pb-3 sticky bottom-0">
        <h6 className="text-sm flex flex-col">
          <span>{service?.name}</span>
          <span>Design</span>
        </h6>
        {service?.isFastDelivery && (
          <p className="text-[10px] flex items-center gap-x-1 mb-1 bg-[#3a3a3a]/60 px-3 py-2 rounded-lg">
            <MdBolt className="text-[#e1ff26]" />
            <span>fast delivery</span>
          </p>
        )}
      </div>
    </label>
  );
};

export default ServiceCard;
