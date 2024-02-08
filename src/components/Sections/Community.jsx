import Link from "next/link";
import React from "react";

const Community = () => {
  return (
    <div className="px-5 py-10 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
      <div className="w-full lg:w-[60%] space-y-3 pb-5 md:space-y-5 my-auto">
        <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
          More Than A Masjid
          <br />
          <span className="text-aqua">A Community</span>
        </h2>
        <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
          <p>
            There were several sites considered but the Tall Somalian (Farah
            Awad) got his heart stuck to the land at 32nd street and McDowell.
            There was no Muslim population around, so everybody said, “WHO IS
            GOING TO PRAY THERE.” Do you recall that is what Hazrat Ibraheim
            said to Allah when he was asked to build in Mecca, OH ALLAH WHO WILL
            COME HERE TO WORSHIP? Anyway, it was bought and first Jumma was
            performed in hot month of June holding umbrellas because there was
            no building.
          </p>
          <p>
            Soon, a wooden box building was bought and placed over it. Soon
            Allah mobilizing people who will worship there. The political
            turmoil in Africa resulted in refugees from Somalia and Sudan,
            September 11, 2001 refugees from Afghanistan, Iraq and later from
            Burma were all inhabited around this area.
          </p>
        </div>
        <div className="py-2">
          <Link href={"/about-us"}>
            <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Know More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <img
          src="/community.webp"
          alt="Old Masjid Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Community;
