"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Image } from "antd";
import "react-loading-skeleton/dist/skeleton.css";

const Slider = ({ data }) => {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchOldGallery = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://demo-web.live/mcm/wp-json/wp/v2/new-planned-masjid?acf_format=standard&_fields=acf,title&per_page=30"
  //       );
  //       if (!res.ok) {
  //         throw new Error("Failed to fetch stats");
  //       }
  //       const result = await res.json();
  //       // console.log(result, "RESULT");
  //       setData(result);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching stats:", error);
  //     }
  //   };

  //   fetchOldGallery();
  // }, []);
  return (
    <div className="p-5 md:p-10 lg:px-10 lg:py-2">
      <Swiper
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1200px (desktop)
          1200: {
            slidesPerView: 5,
          },
          1000: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 3,
          },
          300: {
            slidesPerView: 2,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div className="aspect-[3/4.5] overflow-hidden">
              <Image
                width={"100%"}
                height={"100%"}
                src={item.acf.Image}
                alt=""
              />
            </div>
            <h2 className="leading-tight py-2 text-left text-[1rem]">
              {item?.title?.rendered}
            </h2>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next !text-aqua"></div>
        <div className="swiper-button-prev !text-aqua"></div>
      </Swiper>
    </div>
  );
};

export default Slider;
