import Link from "next/link";
import React from "react";

const NewMasjid = () => {
  return (
    <div className="p-5 md:p-10 lg:px-20 lg:pt-20 lg:pb-10 flex flex-col lg:flex-row gap-5 md:gap-10 w-full">
      <div className="w-full lg:w-[60%] space-y-4 my-auto">
        <div>
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            New Planned<span className="text-aqua"> Masjid</span>
          </h2>
        </div>
        <div className="space-y-3 text-gray-800 text-sm md:text-base">
          <p>
            The new planned masjid is more than just a physical structure; it is
            a reflection of our commitment to innovation, inclusivity, and
            community development. The visionary design draws inspiration from
            traditional Islamic architecture while incorporating modern elements
            that enhance functionality, accessibility, and sustainability.
          </p>
          <p>
            Dedicated spaces for education and learning will be integrated into
            the design, providing a platform for both traditional Islamic
            studies and contemporary educational programs. The goal is to create
            an environment that empowers individuals of all ages to expand their
            knowledge and contribute meaningfully to society.
          </p>
        </div>
        <div className="py-2">
          <Link href={"/gallery"}>
            <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-medium tracking-wide rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Visit gallery
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[40%]">
        <img
          src="/new.webp"
          alt="Old Masjid Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default NewMasjid;
