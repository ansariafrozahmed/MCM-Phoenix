import Link from "next/link";
import React from "react";
import PrayerTable from "../PrayerTimingTable/PrayerTable";

const HomeHero = () => {
  return (
    <div
      className="h-[89svh] md:h-[65svh] lg:h-[89svh] relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("/banner/homeBanner.webp")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col-reverse md:flex-row w-[100%]">
        <div className="w-full md:w-[50%] p-5  lg:p-10">
          <PrayerTable />
        </div>
        <div className="w-full md:w-[15%]"></div>
        <div className="p-5 lg:p-10 w-full md:w-[35%] flex flex-col space-y-5 items-center justify-center">
          <h2 className="text-[2rem] text-center lg:text-left lg:text-[2.5rem] w-full font-extrabold text-white drop-shadow-lg leading-none">
            <span className="text-aqua">SUPPORT US,</span>
            <br />
            WE NEED YOUR HELP.
          </h2>
          <div className="py-1 text-center lg:text-left w-full">
            <Link href={"/about-us"}>
              <button class="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-lg md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Donate Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
