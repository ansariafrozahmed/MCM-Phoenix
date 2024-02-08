import React from "react";
import OldMasjidSlider from "./OldMasjidSlider";
import TextDivider from "../TextDivider";

const OldMasjidGallery = () => {
  return (
    <div className="py-10">
      <div className="py-5 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl uppercase font-semibold text-gray-800">
          Old <span className="text-aqua">Masjid</span>
        </h2>
        <TextDivider />
        {/* <p className="lg:w-[60%] text-sm md:text-base w-[95%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          praesentium blanditiis incidunt dolores obcaecati nisi qui unde
          possimus, fuga ut!
        </p> */}
      </div>
      <OldMasjidSlider />
    </div>
  );
};

export default OldMasjidGallery;
