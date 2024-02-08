"use client";
import React, { useEffect, useState } from "react";
import EventSlider from "./EventSlider";
import { ChevronLeft, ChevronRight } from "lucide-react";

const UpcomingEvents = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  const handleNextMonth = () => {
    if (!isButtonDisabled) {
      setCurrentMonthIndex((prevIndex) => (prevIndex + 1) % 12);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000); // 5000 milliseconds (5 seconds)
    }
  };

  const handlePreviousMonth = () => {
    if (!isButtonDisabled) {
      setCurrentMonthIndex((prevIndex) => (prevIndex - 1 + 12) % 12);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 1000); // 5000 milliseconds (5 seconds)
    }
  };

  const currentMonth = monthNames[currentMonthIndex];

  useEffect(() => {
    setLoading(true);
    const fetchGalleryData = async () => {
      const response = await fetch(`/api/eventData/${currentMonth}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      // console.log(result, "rtytuvbhijnokml,;");
      setEventData(result);
      setLoading(false);
    };
    fetchGalleryData();
  }, [currentMonth]);

  // console.log(currentMonth);

  return (
    <>
      <div className="px-5 md:px-10 lg:px-20 pt-5 md:pt-10 lg:pt-20">
        <h2 className="text-3xl  md:text-4xl lg:text-5xl uppercase text-center font-semibold text-gray-800">
          Upcoming <span className="text-aqua">Events</span>
        </h2>
        {/* ----------- */}
        <div className="flex items-center justify-between py-8">
          <span
            className={`bg-gray-200 px-5 rounded-lg py-2 ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handlePreviousMonth}
          >
            <ChevronLeft
              size={30}
              className={isButtonDisabled ? "text-red-500" : "text-aqua"}
            />
          </span>
          <h2 className="text-gray-800 text-xl capitalize font-semibold">
            {currentMonth}
          </h2>
          <span
            className={`bg-gray-200 px-5 rounded-lg py-2 ${
              isButtonDisabled
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={handleNextMonth}
          >
            <ChevronRight
              size={30}
              className={isButtonDisabled ? "text-red-500" : "text-aqua"}
            />
          </span>
        </div>
        {/* ---------------------Events Slider--------------- */}
      </div>
      <EventSlider data={eventData?.eventData} loading={loading} />
    </>
  );
};

export default UpcomingEvents;
