import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import DonateUsButton from "../DonateUsButton";

const CommonBanner = ({ page, image }) => {
  return (
    <div
      className=" bg-bottom h-auto text-white px-5 md:px-10 lg:px-16 py-14 md:py-24 lg:py-32 relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "scroll",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="flex flex-col md:flex-row gap-7 w-full items-center relative z-10">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl text-left lg:text-5xl uppercase font-semibold">
            {page}
          </h2>
          <ul className="flex items-center text-sm justify-start gap-1 pt-2">
            <li className="font-medium text-gray-100">Home</li>
            <ChevronRight size={19} className="" />
            <li className="text-aqua font-medium">{page}</li>
          </ul>
        </div>
        <div className="w-full md:w-1/2">
          <div className=" w-full flex flex-col space-y-2 md:space-y-5 items-center justify-center">
            <h2 className="text-[1.5rem] md:text-[2rem] text-left md:text-center  lg:text-[2.5rem] w-full font-extrabold text-white drop-shadow-lg leading-none">
              <span className="text-aqua">SUPPORT US,</span>
              <br />
              WE NEED YOUR HELP.
            </h2>
            <div className="py-1 lg:text-center w-full">
              <DonateUsButton text={"Donate Us"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
