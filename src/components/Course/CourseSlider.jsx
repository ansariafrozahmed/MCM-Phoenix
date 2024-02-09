"use client";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Modal } from "antd";
import "react-loading-skeleton/dist/skeleton.css";

import CourseForm from "../LearningCenter/CourseForm";
import Skeleton from "react-loading-skeleton";

const CourseSlider = ({ data, loading }) => {
  // console.log(loading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const showModal = (item) => {
    setSelectedData(item);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
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
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 4,
          },
          800: {
            slidesPerView: 4,
          },
          600: {
            slidesPerView: 2.2,
          },
          400: {
            slidesPerView: 1.1,
          },
          300: {
            slidesPerView: 1.1,
          },
        }}
      >
        {loading ? (
          <>
            {Array(6)
              .fill()
              .map((_, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <Skeleton className="aspect-[4/4]" />
                  <Skeleton count={2} className="mt-2" />
                </SwiperSlide>
              ))}
          </>
        ) : (
          <>
            {data?.map((item, index) => (
              <SwiperSlide key={index} className="pb-10">
                <div
                  key={index}
                  class="relative text-left flex flex-col mt-6  text-gray-800 bg-white border bg-clip-border rounded-xl w-full"
                >
                  <div class="p-4">
                    <div className="relative overflow-hidden mb-5 bg-white  rounded-xl h-40 ">
                      <img
                        src={item?.acf?.Image}
                        alt="card-image"
                        className="object-cover w-full h-full transition-all ease-in-out hover:scale-105"
                      />
                    </div>
                    <h5 class="line-clamp-1 font-sans text-lg font-medium py-1 leading-snug tracking-normal text-blue-gray-900">
                      {item?.acf?.course_name}
                    </h5>
                    <p class="text-sm text-left leading-tight  line-clamp-3">
                      {item?.acf?.course_description}
                    </p>
                    <div>
                      <div className="pt-2 text-base">
                        <span className="text-black font-medium">
                          Duration:
                        </span>{" "}
                        <span>{item?.acf?.course_duration}</span>
                      </div>
                      <div className="text-base">
                        <span className="text-black font-medium">
                          Course Fees:
                        </span>{" "}
                        <span>{item?.acf?.course_fees}</span>
                      </div>
                    </div>
                  </div>
                  <div class="p-4 pt-0">
                    <button
                      onClick={() => showModal(item)}
                      class="align-middle select-none font-sans font-medium tracking-wider text-center capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
        <Modal
          title="Enrollment Form"
          open={isModalOpen}
          footer={null}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedData && (
            <>
              <hr />
              <div className="py-2">
                <CourseForm selectedData={selectedData} />
              </div>
            </>
          )}
        </Modal>
        <div className="swiper-button-next !text-aqua"></div>
        <div className="swiper-button-prev !text-aqua"></div>
      </Swiper>
    </div>
  );
};

export default CourseSlider;
