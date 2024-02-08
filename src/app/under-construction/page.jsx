import BannerWithhadith from "@/components/BannersComp/BannerWithhadith";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import UnderNew from "@/components/UnderConstruction/UnderNew";
import UnderOld from "@/components/UnderConstruction/UnderOld";
import UnderProgress from "@/components/UnderConstruction/UnderProgress";
import TwodPlan from "@/components/plan/TwodPlan";
import Link from "next/link";
import React from "react";

const UnderConstruction = () => {
  return (
    <div>
      <BannerWithhadith
        page={"New Construction"}
        hadith={`Prophet Muhammad (pbuh) is reported to have said: "He who builds a mosque for Allah, Allah will build for him likewise in Paradise."(Sahih Muslim)`}
        image={"/banner/new-construction.webp"}
      />
      {/* <CommonBanner
        page={"New Construction"}
        image={"/banner/new-construction.webp"}
      /> */}
      <UnderOld />
      <UnderNew />
      <UnderProgress />
      <TwodPlan />
      {/* <div className="p-5 md:p-10 text-center space-y-2">
        <h2 className="text-4xl lg:text-5xl uppercase font-semibold text-gray-800">
          Get your <span className="text-aqua">Part in Masjid</span>
        </h2>
        <div className="py-2">
          <Link href={"/gallery"}>
            <button className="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Donate Now!
            </button>
          </Link>
        </div>
      </div> */}
      <div className="px-5 py-10 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
        <div className="w-full lg:w-[60%] pb-5 space-y-3 my-auto">
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            Help Us Build Hope:
            <span className="text-aqua"> Support Our MCM</span>
          </h2>
          <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
            <p>
              Whoever builds a mosque for the sake of Allah, like a sparrow’s
              nest for Allah or even smaller, Allah will build for him a house
              in Paradise.” 
              <br />
              <span className="text-aqua">(Sunan Ibn Majah, Kitab al-Masajid wal Jamaah,
              Hadith 738)</span>
            </p>
          </div>
          <div className="py-2">
            <Link href={"/"}>
              <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Sponsor A Musalla For $2,000
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/musalla.webp"
            alt="Old Masjid Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
