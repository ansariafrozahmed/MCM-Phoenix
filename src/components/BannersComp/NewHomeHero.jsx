"use client";
import { Carousel } from "@material-tailwind/react";
import React from "react";
import PrayerTable from "../PrayerTimingTable/PrayerTable";
import Link from "next/link";

const NewHomeHero = () => {
  return (
    <div className="relative w-full">
      <Carousel
        prevArrow={false}
        loop={true}
        autoplayDelay={5000}
        autoplay={true}
        nextArrow={false}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        className="relative h-[90svh] md:h-[60svh] lg:h-[88svh]"
      >
        <img
          src="/banner/1.webp"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="/banner/2.webp"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="/banner/3.webp"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="p-5 absolute top-0 left-0 w-[100%] h-[100%] z-50 flex flex-col md:flex-row items-center justify-around">
        <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
          <PrayerTable />
        </div>
        <div className="hidden lg:block w-full md:w-1/3"></div>
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col space-y-5 items-center justify-center">
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

export default NewHomeHero;
