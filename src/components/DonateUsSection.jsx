import Link from "next/link";
import React from "react";

const DonateUsSection = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("/donation.webp")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="text-white px-5 md:px-10 lg:px-20 py-16 lg:py-24 flex w-full"
    >
      <div className="w-full md:w-[75%] lg:w-1/2 space-y-3 lg:space-y-5">
        {/* <img src="/bismillah-white.webp" className="" alt="Bismillah" /> */}
        <h2 className="text-4xl font-bold leading-none uppercase">
          <span className="text-aqua">Would Your Like To</span>
          <br />
          Support Students to enroll in ?
        </h2>
        <p className="text-[0.95rem] tracking-wide font-normal">
          May Allah bless you! Thank you. Those who (in charity) spend of their
          goods by night and by day, in secret and in public, have their reward
          with their Lord
        </p>
        <div className="py-2">
          <Link href={"/about-us"}>
            <button className="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Donate Us
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden md:w-[25%] lg:w-1/2"></div>
    </div>
  );
};

export default DonateUsSection;
