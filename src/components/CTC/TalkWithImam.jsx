import Link from "next/link";
import React from "react";

const TalkWithImam = () => {
  return (
    <div className="p-10 md:px-20 md:py-10 bg-[#ccfff8] text-center">
      <h2 className="text-3xl md:text-4xl font-semibold">Talk With Imam</h2>
      <h3 className="text-lg md:text-xl font-medium text-gray-800">
        Office Hours Appointments
      </h3>
      <div className="pt-3 md:pt-5">
        <Link href={"/about-us"}>
          <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Schedule
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TalkWithImam;
