"use client";
import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Image } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const OldMasjidSlider = () => {
  const [loading, setLoading] = useState(true);
  const [sliderData, setSliderData] = useState(null);

  useEffect(() => {
    const fetchSldierData = async () => {
      const response = await fetch(
        "https://demo-web.live/mcm/wp-json/wp/v2/old-masjid?acf_format=standard&_fields=acf,title"
      );
      const result = await response.json();
      // console.log(result);
      setSliderData(result);
      setLoading(false);
    };

    fetchSldierData();
  }, []);

  return (
    <div className="">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 1200px (desktop)
          1200: {
            slidesPerView: 5.5,
          },
          1000: {
            slidesPerView: 5.5,
          },
          800: {
            slidesPerView: 4.5,
          },
          600: {
            slidesPerView: 3.5,
          },
          400: {
            slidesPerView: 2.1,
          },
          300: {
            slidesPerView: 2.1,
          },
        }}
      >
        {loading ? (
          <>
            {Array(10)
              .fill()
              .map((_, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="aspect-[3/4.5] overflow-hidden">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <Skeleton className="w-full" />
                </SwiperSlide>
              ))}
          </>
        ) : (
          <>
            {sliderData?.map((item, index) => (
              <SwiperSlide key={index} className="pb-10">
                <div className="aspect-[3/4.5] overflow-hidden">
                  <Image
                    width={"100%"}
                    height={"100%"}
                    src={item.acf.old_masjid_image}
                    alt=""
                  />
                </div>
                <h2 className="leading-none p-2 line-clamp-1 text-center text-[1rem]">
                  {item.title.rendered}
                </h2>
              </SwiperSlide>
            ))}
          </>
        )}

        <div className="swiper-button-next !text-aqua"></div>
        <div className="swiper-button-prev !text-aqua"></div>
      </Swiper>
    </div>
  );
};

export default OldMasjidSlider;
