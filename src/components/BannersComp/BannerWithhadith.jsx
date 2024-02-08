import Zakat from "@/app/zakat/page";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const BannerWithhadith = ({ page, hadith, image }) => {
  return (
    <div
      className=" bg-bottom h-auto text-white px-5 md:px-10 lg:px-16 py-14 md:py-24 object-cover relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: "fixed",
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
            <h2 className="text-[0.9rem] md:text-[1rem] text-left md:text-center  lg:text-[1.2rem] w-full font-light capitalize text-white drop-shadow-lg leading-snug">
              {/* <span className="text-aqua">SUPPORT US,</span> */}
              <br />
              {hadith}
            </h2>
            <div className="py-1 text-left md:text-center w-full">
              <Link href={"/about-us"}>
                <button class="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-lg md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                  Donate Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerWithhadith;
