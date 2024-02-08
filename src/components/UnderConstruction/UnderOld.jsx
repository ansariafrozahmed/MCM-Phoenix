"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";

// const fetchOldMasjidData = async () => {
//   const response = await fetch(
//     "https://demo-web.live/mcm/wp-json/wp/v2/old-masjid?acf_format=standard&_fields=acf,title"
//   );
//   const result = await response.json();
//   return result;
// };

const UnderOld = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOldGallery = async () => {
      try {
        const res = await fetch(
          "https://demo-web.live/mcm/wp-json/wp/v2/old-masjid?acf_format=standard&_fields=acf,title&per_page=30"
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

    fetchOldGallery();
  }, []);
  // const data = await fetchOldMasjidData();

  return (
    <div>
      <div className="px-5 py-10 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
        <div className="w-full lg:w-[60%] pb-5 space-y-3 my-auto">
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            Story Of <span className="text-aqua">Old Masjid</span>
          </h2>
          <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
            <p>
              While we hold dear the memories and spiritual nourishment provided
              by the Old Masjid, we also eagerly anticipate the next chapter in
              our journey. The reconstruction project symbolizes not only the
              physical growth of our sacred space but also the continued
              commitment to fostering a strong, united, and inclusive community.
            </p>
            <p>
              As we embark on this exciting venture, we express gratitude for
              the blessings of the old and embrace the opportunities that lie
              ahead. Together, let us weave a new chapter in the tapestry of MCM
              Phoenix, where the values of faith, community, and compassion
              continue to flourish.
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
            src="/our-story.png"
            alt="Old Masjid Image"
            className="w-full h-full object-containm"
          />
        </div>
      </div>
      <Slider data={data} />
    </div>
  );
};

export default UnderOld;
