import Link from "next/link";
import React from "react";

const OldMasjid = () => {
  return (
    <div className="px-5 py-14 md:p-10 lg:px-20 lg:pt-20 lg:pb-10 flex flex-col lg:flex-row gap-5 md:gap-10 w-full">
      <div className="w-full lg:w-[60%] space-y-4 my-auto">
        <div>
          <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
            Old <span className="text-aqua">Masjid</span>
          </h2>
        </div>
        <div className="space-y-3 text-gray-800 text-sm md:text-base">
          <p>
            While we hold dear the memories and spiritual nourishment provided
            by the Old Masjid, we also eagerly anticipate the next chapter in
            our journey. The reconstruction project symbolizes not only the
            physical growth of our sacred space but also the continued
            commitment to fostering a strong, united, and inclusive community.
          </p>
          <p>
            As we embark on this exciting venture, we express gratitude for the
            blessings of the old and embrace the opportunities that lie ahead.
            Together, let us weave a new chapter in the tapestry of MCM Phoenix,
            where the values of faith, community, and compassion continue to
            flourish.
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
      <div className="w-full lg:w-[40%] ">
        <img
          src="/our-story.png"
          alt="Old Masjid Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default OldMasjid;
