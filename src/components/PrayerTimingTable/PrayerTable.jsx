"use client";
import React, { useEffect, useState } from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

const PrayerTable = () => {
  const [prayerTiming, setPrayerTiming] = useState(null);

  useEffect(() => {
    const fetchPrayerTiming = async () => {
      const response = await fetch(
        "https://masjidal.com/api/v1/time/range?masjid_id=MA58R8Lr"
      );
      const result = await response.json();
      setPrayerTiming(result.data);
    };

    fetchPrayerTiming();
  }, []);

  const { salah, iqamah } = prayerTiming || {};
  // console.log("SALAH", salah, "IQAMAH", iqamah);

  const renderDate = () => {
    if (!salah || salah.length === 0) {
      return <p className="text-[0.8rem]">No data available</p>;
    }

    return (
      <div className="text-[0.8rem] font-medium flex items-center gap-2 justify-center">
        <span>{salah[0].date}</span> |{" "}
        <span>
          {salah[0].hijri_month} {salah[0].hijri_date}
        </span>
      </div>
    );
  };

  return (
    <div
      className="bg-gray-100 rounded-md p-3 w-[100%] md:w-[350px] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
      style={{
        backgroundImage: 'url("/mcm-pattern.png")',
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="pb-2 space-y-1 text-center">
        <h2 className="text-2xl font-semibold">Prayer Timings</h2>
        {renderDate()}
        {/* <h3 className="text-[0.8rem] font-medium">
      Monday, Jan 29 | Rajab 17
    </h3> */}
      </div>
      <div className="flex items-center bg-aqua text-white rounded-lg p-2 w-full justify-between">
        <span className="w-1/3">TIME</span>
        <span className="w-1/3">ATHAN</span>
        <span className="w-1/3">IQAMAH</span>
      </div>
      <div className="flex items-center w-full justify-between">
        <div className="w-1/3 flex flex-col space-y-2 p-2 font-medium text-[0.9rem]">
          <span>Fajr</span>
          <span>Duhar</span>
          <span>Asr</span>
          <span>Maghrib</span>
          <span>Isha</span>
          <span>Jumu'ah</span>
        </div>
        {salah?.map((item, index) => (
          <div
            key={index}
            className=" w-1/3 flex flex-col space-y-2 p-2 font-medium text-[0.9rem]"
          >
            <span>{item.fajr}</span>
            <span>{item.zuhr}</span>
            <span>{item.asr}</span>
            <span>{item.maghrib}</span>
            <span>{item.isha}</span>
            <span>12:30 PM</span>
          </div>
        ))}
        {iqamah?.map((item, index) => (
          <div
            key={index}
            className="w-1/3 flex flex-col space-y-2 p-2 font-medium text-[0.9rem]"
          >
            <span>{item.fajr}</span>
            <span>{item.zuhr}</span>
            <span>{item.asr}</span>
            <span>{item.maghrib}</span>
            <span>{item.isha}</span>
            <span>{item.jummah1}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrayerTable;
