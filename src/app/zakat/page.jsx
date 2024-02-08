import BannerWithhadith from "@/components/BannersComp/BannerWithhadith";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import Calculator from "@/components/Zakaat/Calculator";
import Link from "next/link";
import React from "react";

const Zakat = () => {
  return (
    <div>
      {/* <BannerWithhadith
        page={"Zakat"}
        image={"/zakaat-and-sadaqah/zakaat.webp"}
        hadith={`One who pays Zakat, Allah will make their wealth increase” (Sahih Bukhari)`}
      /> */}
      <CommonBanner page={"Zakaat"} image={"/zakaat-and-sadaqah/zakaat.webp"} />
      <div className="p-5 py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-10 w-full">
        <div className="w-full lg:w-[60%] space-y-5 my-auto">
          <div className="space-y-2">
            {/* <h2 className="text-3xl lg:text-4xl uppercase text-left font-semibold text-gray-800">
              Zakat <span className="text-aqua">Hadith</span>
            </h2> */}
            <p>
              "Charity does not decrease wealth, no one forgives another except
              that Allah increases his honor, and no one humbles himself for the
              sake of Allah except that Allah raises his status." <span className="text-aqua">(Sahih Muslim)</span>
            </p>
          </div>
          <div className="space-y-2">
            {/* <h2 className="text-3xl lg:text-4xl uppercase text-left font-semibold text-gray-800">
              Zakat <span className="text-aqua">Aayat</span>
            </h2> */}
            <p>
              "Take, [O, Muhammad], from their wealth a charity by which you
              purify them and cause them increase, and invoke [ Allah 's
              blessings] upon them. Indeed, your invocations are reassurance for
              them. And Allah is Hearing and Knowing." <span className="text-aqua">(Quran, 9:103)</span>
            </p>
          </div>
          <div className="">
            <Link href={"/about-us"}>
              <button className="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-lg md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Donate Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/zaqaat.webp"
            alt="Old Masjid Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <Calculator />
    </div>
  );
};

export default Zakat;
