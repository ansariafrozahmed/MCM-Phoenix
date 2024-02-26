"use client";
import React, { useEffect, useState } from "react";
import Slider from "../Slider/Slider";
import Link from "next/link";

// const fetchNewMasjidData = async () => {
//   const response = await fetch(
//     "https://admin.mcmphoenix.us/wp-json/wp/v2/new-planned-masjid?acf_format=standard&_fields=acf,title"
//   );
//   const result = await response.json();
//   return result;
// };

const UnderNew = () => {
  const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewGallery = async () => {
      try {
        const res = await fetch(
          "https://admin.mcmphoenix.us/wp-json/wp/v2/new-planned-masjid?acf_format=standard&_fields=acf,title&per_page=30"
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

    fetchNewGallery();
  }, []);

  const downloadBrochure = () => {
    const pdfUrl = "MCM_Brochure.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MCM_Brochure.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadBlueprint = () => {
    const pdfUrl = "MCM_blueprint.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "MCM_blueprint.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // const data = await fetchNewMasjidData();
  return (
    <div>
      <div className="px-5 py-10 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
        <div className="w-full lg:w-[60%] pb-5 space-y-3 my-auto">
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            New Proposed <span className="text-aqua">Planned Masjid</span>
          </h2>
          <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
            <p>
              The new planned masjid is more than just a physical structure; it
              is a reflection of our commitment to innovation, inclusivity, and
              community development. The visionary design draws inspiration from
              traditional Islamic architecture while incorporating modern
              elements that enhance functionality, accessibility, and
              sustainability.
            </p>
            <p>
              Dedicated spaces for education and learning will be integrated
              into the design, providing a platform for both traditional Islamic
              studies and contemporary educational programs. The goal is to
              create an environment that empowers individuals of all ages to
              expand their knowledge and contribute meaningfully to society.
            </p>
          </div>
          <div className="py-2 flex gap-2">
            {/* <Link href={"/gallery"}>
              <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Visit Gallery
              </button>
            </Link> */}
            {/* <Link href={"/gallery"}>
              <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Brochure
              </button>
            </Link> */}
            {/* <Link href={"/gallery"}> */}
            {/* <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Blueprint
            </button> */}
            <button
              onClick={downloadBlueprint}
              class=" px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              <a href="MCM_blueprint.pdf" target="_blank">
                Blueprint
              </a>
            </button>
            <button
              onClick={downloadBrochure}
              class=" px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              <a href="MCM_Brochure.pdf" target="_blank">
                Brochure
              </a>
            </button>
            {/* <button
              onClick={onButtonClick}
              class="md:hidden px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            >
              Brochure
            </button> */}
            {/* </Link> */}
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/story.webp"
            alt="Old Masjid Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <Slider data={data} />
    </div>
  );
};

export default UnderNew;
