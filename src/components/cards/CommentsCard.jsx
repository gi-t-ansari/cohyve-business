import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import { LuReply } from "react-icons/lu";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";

const COMMENTS_DUMMY_DATA = [
  {
    id: 1,
    author: "John Doe",
    content: "This is a great post! Thanks for sharing.",
    timestamp: "2024-11-26T10:30:00Z",
    replies: [
      {
        id: 2,
        author: "Jane Smith",
        content: "I agree! Very insightful.",
        timestamp: "2024-11-26T11:00:00Z",
      },
    ],
  },
  {
    id: 3,
    author: "Alice Johnson",
    content: "Can you provide more details about the topic?",
    timestamp: "2024-11-26T12:15:00Z",
    replies: [],
  },
  {
    id: 4,
    author: "Bob Williams",
    content: "I have a question about one of the points mentioned.",
    timestamp: "2024-11-26T12:10:00Z",
    replies: [
      {
        id: 5,
        author: "John Doe",
        content: "Sure, what do you need help with?",
        timestamp: "2024-11-26T13:30:00Z",
      },
    ],
  },
];

const getRelativeTime = (timestamp) => {
  const now = moment();
  const time = moment(timestamp);
  const diffInSeconds = now.diff(time, "seconds");

  if (diffInSeconds < 60) {
    return `${
      diffInSeconds === 1 ? "1 second" : `${diffInSeconds} seconds`
    } ago`;
  }

  const diffInMinutes = now.diff(time, "minutes");
  if (diffInMinutes < 60) {
    return `${
      diffInMinutes === 1 ? "1 minute" : `${diffInMinutes} minutes`
    } ago`;
  }

  const diffInHours = now.diff(time, "hours");
  if (diffInHours < 24) {
    return `${diffInHours === 1 ? "1 hour" : `${diffInHours} hours`} ago`;
  }

  const diffInDays = now.diff(time, "days");
  if (diffInDays < 7) {
    return `${diffInDays === 1 ? "1 day" : `${diffInDays} days`} ago`;
  }

  const diffInWeeks = now.diff(time, "weeks");
  if (diffInWeeks < 4) {
    return `${diffInWeeks === 1 ? "1 week" : `${diffInWeeks} weeks`} ago`;
  }

  const diffInMonths = now.diff(time, "months");
  if (diffInMonths < 12) {
    return `${diffInMonths === 1 ? "1 month" : `${diffInMonths} months`} ago`;
  }

  const diffInYears = now.diff(time, "years");
  return `${diffInYears === 1 ? "1 year" : `${diffInYears} years`} ago`;
};

const CommentsCard = ({ setShowComments, setSelectedDesign, showComments }) => {
  const [searchParams] = useSearchParams();
  const [commentsData, setCommentsData] = useState(COMMENTS_DUMMY_DATA || []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseCommentSection = (e) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("comments");
    navigate(`/analytics?${newSearchParams.toString()}`);
    setSelectedDesign(null);
    setShowComments(false);
  };

  const commentsRef = useRef(null);

  const schema = yup.object().shape({
    comment: yup
      .string()
      .required("Please write a comment")
      .max(100, "Max 100 words are allowed"),
  });

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
    control,
    resetField,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handlePostComment = (data) => {
    console.log("Comment -->", data);

    setCommentsData((prev) => [
      ...prev,
      {
        id: prev.length + 1, // Unique ID
        author: "Anonymous", // Replace with dynamic user data
        content: data.comment, // New comment content
        timestamp: new Date().toISOString(), // Current timestamp
        replies: [],
      },
    ]);

    // Reset the comment field
    reset({ comment: "" });

    // Scroll to the bottom to show the latest comment
    setTimeout(() => {
      if (commentsRef.current) {
        commentsRef.current.scrollTo({
          top: commentsRef.current.scrollHeight,
          behavior: "smooth", // Smooth scrolling
        });
      }
    }, 100); // Small delay to ensure DOM updates
  };

  useEffect(() => {
    if (commentsRef.current) {
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
    }
  }, [showComments, location?.search?.includes("comments")]);
  return (
    <div
      className={`${
        location?.pathname?.includes("design")
          ? "w-full h-full flex flex-col"
          : "w-[60%] h-full flex flex-col bg-[#0B0B0BB5]  border-[1px] border-[#FFFFFF08]  backdrop-blur rounded-[20px] overflow-hidden absolute top-0 -right-2 "
      } transition-all duration-300 ease-linear transform ${
        location?.search?.includes("comments") || showComments
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div className="flex text-xl justify-between items-center w-full h-fit p-4">
        <h5 className="text-lg">Comments</h5>
        {!location?.pathname?.includes("design") && (
          <IoMdClose
            size={17}
            className="text-[#e1ff26] cursor-pointer"
            onClick={handleCloseCommentSection}
          />
        )}
      </div>
      <div className="flex-1 w-full flex flex-col flex-grow justify-end pl-5 pr-2 pb-1 overflow-hidden">
        <div
          className="flex flex-col overflow-y-auto custom-scrollbar scrollbar-sm pr-2"
          ref={commentsRef}
        >
          {commentsData?.map((ele, ind) => (
            <div
              className={`w-full py-4 ${
                ind < commentsData?.length - 1 &&
                "border-b-[1px] border-[#8282821C]"
              }`}
            >
              <h6 className="flex gap-x-4 items-center">
                <span className="font-thin">{ele.author}</span>
                <span className="opacity-55 font-thin text-sm">
                  {getRelativeTime(ele.timestamp)}
                </span>
                <LuReply className="opacity-50 cursor-pointer" />
              </h6>
              <p className="font-thin opacity-50 leading-tight my-2">
                {ele.content}
              </p>
              {ele.replies?.length > 0 && (
                <span className="text-[#e1ff26] opacity-40 font-thin text-sm cursor-pointer">
                  {ele.replies?.length}{" "}
                  {ele.replies?.length === 1 ? "Reply" : "Replies"}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <footer className={` w-full h-fit  p-4 border-t-[1px] border-[#1B1D1D] `}>
        <form
          onSubmit={handleSubmit(handlePostComment)}
          className="relative w-full h-fit flex items-center"
        >
          <Controller
            name="comment"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                className="w-full placeholder:opacity-50 p-4 pr-32 rounded-[16.5px] placeholder:text-[#fcfcd8] placeholder:text-[15px] bg-[#0c0c0c] focus:outline-none"
                placeholder="Add comment..."
                {...field}
              />
            )}
          />
          <button
            className={`absolute right-2 bg-[#161616] text-[#e1ff26] rounded-[10px] px-5 py-2 ${
              watch("comment")?.length <= 0 && "cursor-not-allowed"
            }`}
            type="submit"
            disabled={watch("comment")?.length <= 0}
          >
            Comment
          </button>
        </form>
        {errors?.comment && (
          <p className="text-xs text-red-500 ">{errors?.comment?.message}</p>
        )}
      </footer>
    </div>
  );
};

export default CommentsCard;
