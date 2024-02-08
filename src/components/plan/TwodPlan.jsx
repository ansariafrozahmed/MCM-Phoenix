import { Image } from "antd";
import React from "react";

const TwodPlan = () => {
  return (
    <div className="p-5 md:p-10 lg:p-20">
      <h2 className="text-4xl lg:text-5xl uppercase text-center font-semibold text-gray-800">
        New Masjid <span className="text-aqua">2D & 3D Plan</span>
      </h2>
      <div className="grid pt-10 grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-full w-full border-8 border-aqua shadow-xl p-1">
          <Image
            height={"100%"}
            width={"100%"}
            src="/masjid-2d-plan.webp"
            className="object-cover h-full w-full"
            alt="masjid-2d-plan"
          />
        </div>
        <div className="h-full w-full border-8 border-aqua shadow-xl p-1">
          <Image
            height={"100%"}
            width={"100%"}
            src="/masjid-3d-plan.webp"
            className="object-cover h-full w-full"
            alt="masjid-3d-plan"
          />
        </div>
      </div>
    </div>
  );
};

export default TwodPlan;
