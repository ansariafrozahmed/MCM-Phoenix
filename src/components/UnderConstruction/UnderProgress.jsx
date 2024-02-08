"use client";
import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import Link from "next/link";

// const fetchUnderConstructionData = async () => {
//   const response = await fetch(
//     "https://demo-web.live/mcm/wp-json/wp/v2/under-construction?acf_format=standard&_fields=acf,title"
//   );
//   const result = await response.json();
//   return result;
// };

const UnderProgress = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUnderConstructionGallery = async () => {
      try {
        const res = await fetch(
          "https://demo-web.live/mcm/wp-json/wp/v2/under-construction?acf_format=standard&_fields=acf,title&per_page=30"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const result = await res.json();
        // console.log(result, "RESULT");
        setData(result);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchUnderConstructionGallery();
  }, []);
  // const data = await fetchUnderConstructionData();
  return (
    <div>
      <div className="px-5 py-10 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
        <div className="w-full lg:w-[60%] pb-5 space-y-3 my-auto">
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            Work Under<span className="text-aqua"> Progress</span>
          </h2>
          <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
            <p>
              The construction of our new masjid is well underway, and each
              passing day brings us closer to realizing our vision for a modern,
              inclusive, and spiritually uplifting space. Our dedicated team of
              architects, engineers, and builders is working diligently to
              ensure the successful completion of this transformative project.
            </p>
            <p>
              The first phases of construction have focused on laying a strong
              foundation for the new masjid. The framework is taking shape, and
              the architectural vision is coming to life. We are meticulously
              crafting a space that harmonizes traditional Islamic aesthetics
              with contemporary design, ensuring a seamless blend of beauty and
              functionality.
            </p>
          </div>
          <div className="py-2">
            <Link href={"/gallery"}>
              <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Visit Gallery
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/under.webp"
            alt="Old Masjid Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <Slider data={data} />
    </div>
  );
};

export default UnderProgress;
