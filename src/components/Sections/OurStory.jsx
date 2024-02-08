import Link from "next/link";
import React from "react";

const OurStory = ({ showButton = true }) => {
  return (
    <div className="px-5 py-14 md:p-10 lg:py-20 lg:px-20 w-full  lg:flex gap-10 ">
      <div className="w-full lg:w-[60%] pb-5 space-y-3 my-auto">
        <h2 className="text-4xl lg:text-5xl uppercase text-left font-semibold text-gray-800">
          Our <span className="text-aqua">Story</span>
        </h2>
        <div className="text-[0.9rem] space-y-2 md:space-y-3 text-justify text-gray-800">
          <p>
            It was 1991, Not many immigrants knew where is, Phoenix, Arizona.
            Most of the immigrants knew New York and Chicago, where they landed
            and settled. But now they were heading west because of Silicon
            Valley. The City of Phoenix had only one Masjid, ICC. Some members
            wanted to see changes but met resistance, so they rented a warehouse
            in 1994 and named It MUSLIM COMMUNITY MOSQUE. The very next the
            decision was made to buy the land for second Masjid in town.
          </p>
          <p>
            Soon Allah mobilizing people who will worship there. The political
            turmoil in Africa resulted in refugees from Somalia and Sudan,
            September 11, 2001 refugees from Afghanistan, Iraq and later from
            Burma were all inhabited around this area. Now thousands of
            immigrant Muslims reside around this area and use this wooden box.
            The space initially for fifty people can’t accommodate hundreds of
            them. This is result of right, pious NIYAT of Tall Man.
          </p>
        </div>
        {showButton && (
          <div className="py-2">
            <Link href={"/about-us"}>
              <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Know More
              </button>
            </Link>
          </div>
        )}
      </div>
      <div className="w-full lg:w-[40%]">
        <iframe
          className="h-[300px] border-4 border-aqua p-1 lg:h-[100%] w-full mt-2"
          src="https://www.youtube.com/embed/e4bX1-vy91Q?si=xAVa0MjcotIoSU1O"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default OurStory;
