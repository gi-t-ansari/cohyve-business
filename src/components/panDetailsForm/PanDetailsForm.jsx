import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const PanDetailsForm = () => {
  const navigate = useNavigate();

  const panSchema = yup.object().shape({
    firstPart: yup
      .string()
      .required("PAN is required")
      .matches(/^[A-Za-z0-9]+$/, "Only letters and numbers are allowed")
      .min(5, "Must be exactly 5 characters")
      .max(5, "Must be exactly 5 characters"),
    secondPart: yup
      .string()
      .required("PAN is required")
      .matches(/^[A-Za-z0-9]+$/, "Only letters and numbers are allowed")
      .min(4, "Must be exactly 4 characters")
      .max(4, "Must be exactly 4 characters"),
    lastPart: yup
      .string()
      .required("PAN is required")
      .matches(/^[A-Za-z0-9]+$/, "Only letters and numbers are allowed")
      .min(1, "Must be exactly 1 characters")
      .max(1, "Must be exactly 1 characters"),
    panName: yup
      .string()
      .required("PAN name is required")
      .matches(
        /^[A-Za-z]+( [A-Za-z]+)*$/,
        "Only alphabetic characters and single spaces between words are allowed"
      )
      .min(6, "PAN name cannot be less than 6 characters")
      .max(50, "PAN name cannot exceed 50 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(panSchema),
  });

  const submitPanDetails = (data) => {
    navigate("/credits/congratulations");
    console.log("Credits PAN Data", data);
    reset();
  };

  return (
    <form
      className="text-[#fff5d9] bg-[#050505] rounded-[30px] p-6 px-10 w-[80%]"
      onSubmit={handleSubmit(submitPanDetails)}
    >
      <h5 className="text-2xl">What’s your business PAN?</h5>
      <p className="text-sm opacity-45 font-thin tracking-tight my-3">
        Make sure to enter your name exactly as it appears on the given PAN
        card: AAJCC7944C
      </p>
      <div className="w-full flex gap-x-3 mt-6">
        <div className="w-[30%]">
          <input
            {...register("firstPart")}
            type="text"
            className="bg-[#0e0e0e] w-full placeholder-[#373737] text-gray-400 uppercase tracking-[1.4rem] rounded-xl py-3 px-4"
            placeholder="XXXXX"
          />
        </div>

        <div className="w-[25%]">
          <input
            {...register("secondPart")}
            type="text"
            className="bg-[#0e0e0e] w-full placeholder-[#373737] text-gray-400 uppercase tracking-[1.4rem] rounded-xl py-3 px-4"
            placeholder="XXXX"
          />
        </div>

        <div className="w-[10%]">
          <input
            {...register("lastPart")}
            type="text"
            className="bg-[#0e0e0e] w-full text-center placeholder-[#373737] text-gray-400 uppercase rounded-xl py-3 px-4"
            placeholder="X"
          />
        </div>
      </div>

      {/* Single error message for PAN parts */}
      {(errors.firstPart || errors.secondPart || errors.lastPart) && (
        <span className="text-xs text-red-500 mt-2 block">
          {errors.firstPart?.message ||
            errors.secondPart?.message ||
            errors.lastPart?.message}
        </span>
      )}

      <h5 className="text-2xl mt-5">What’s your business PAN name?</h5>
      <p className="text-sm opacity-45 tracking-tight mb-5 font-thin">
        We require this to verify your identity
      </p>
      <div className="flex flex-col">
        <input
          {...register("panName")}
          type="text"
          className="bg-[#0e0e0e] w-[68%] placeholder-[#373737] text-gray-400 uppercase rounded-xl py-3 px-4"
          placeholder="Your PAN Name"
        />
        {errors.panName && (
          <span className="text-xs text-red-500">{errors.panName.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-[68%] py-3 px-4 mt-10 text-center rounded-xl text-[#e1ff26] bg-[#0e0f06]"
      >
        Proceed
      </button>
    </form>
  );
};

export default PanDetailsForm;
