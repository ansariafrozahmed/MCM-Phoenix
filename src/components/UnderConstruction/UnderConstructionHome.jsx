// "use client";
import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import { Progress } from "antd";

const fetchUnderConstructionData = async () => {
  const response = await fetch(
    "https://demo-web.live/mcm/wp-json/wp/v2/under-construction?acf_format=standard&_fields=acf,title"
  );
  const result = await response.json();
  return result;
};

const fetchProgressData = async () => {
  const response = await fetch(
    "https://demo-web.live/mcm/wp-json/wp/v2/facility?acf_format=standard&_fields=acf,title"
  );
  const result = await response.json();
  return result;
};

const UnderConstructionHome = async () => {
  const data = await fetchUnderConstructionData();
  const progressData = await fetchProgressData();
  return (
    <section className="px-5 py-14 md:p-10 lg:p-20">
      <h2 className="text-4xl pb-10 md:text-4xl lg:text-5xl uppercase text-left lg:text-center font-semibold text-gray-800">
        Under <span className="text-aqua">Construction</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 w-full">
        <div className="w-full lg:w-1/2 h-full">
          <ImageSlideshow data={data} />
        </div>
        {/* ------------------- */}
        <div className="w-full lg:w-1/2">
          <p className="mb-5 md:hidden text-sm text-gray-800 lg:text-base lg:block">
            The construction of our new masjid is well underway, and each
            passing day brings us closer to realizing our vision for a modern,
            inclusive, and spiritually uplifting space.
          </p>
          {progressData?.map((item, index) => (
            <div className="leading-none" key={index}>
              <h3 className="text-sm">{item?.title?.rendered}</h3>
              <Progress
                percent={item?.acf?.facility_progress}
                strokeColor={{
                  from: "#00BDA5",
                  to: "#05774c",
                }}
                size={["100%", 12]}
                // className="text-2xl font-medium"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnderConstructionHome;
