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
import { Image, Modal } from "antd";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Input, Textarea } from "@material-tailwind/react";

const CourseSlider = ({ data }) => {
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
            slidesPerView: 3,
          },
          400: {
            slidesPerView: 1.1,
          },
          300: {
            slidesPerView: 1.1,
          },
        }}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index} className="pb-10">
            <div
              key={index}
              class="relative text-left flex flex-col mt-6 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
            >
              <div class="p-4">
                <div className="relative overflow-hidden mb-5 bg-white bg-clip-border rounded-xl h-40 border">
                  <img
                    src={item?.acf?.Image}
                    alt="card-image"
                    className="object-cover w-full h-full transition-all ease-in-out hover:scale-105"
                  />
                </div>
                <h5 class="line-clamp-1 font-sans text-xl font-medium py-1 leading-snug tracking-normal text-blue-gray-900">
                  {item?.acf?.course_name}
                  hbjnkl
                </h5>
                <p class="text-sm font-normal text-left leading-tight  line-clamp-3">
                  {item?.acf?.course_description}
                </p>
                <div>
                  <div className="pt-2">
                    <span className="text-black">Duration:</span>{" "}
                    <span>
                      {item?.acf?.course_duration}
                      Months
                    </span>
                  </div>
                  <div className="">
                    <span className="text-black">Course Fees:</span>{" "}
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
                <form>
                  <div className="space-y-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <div>
                        <h2 className="text-base mb-1">Your Name</h2>
                        <Input
                          required
                          size="small"
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                          className=""
                        />
                      </div>
                      <div>
                        <h2 className="text-base mb-1">Your Email</h2>
                        <Input
                          required
                          size="small"
                          type="email"
                          id="email"
                          name="email"
                          placeholder="name@gmail.com"
                          className=" "
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <div>
                        <h2 className="text-base mb-1">Contact Number</h2>
                        <Input
                          required
                          size="small"
                          type="number"
                          id="number"
                          name="number"
                          placeholder=""
                          className=" "
                        />
                      </div>
                      <div>
                        <h2 className="text-base mb-1">Course Fees</h2>
                        <Input
                          size="small"
                          value={selectedData.acf.course_fees}
                          disabled
                          id="courseFees"
                          placeholder=""
                          name="courseFees"
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      <div>
                        <h2 className="text-base mb-1">Course name</h2>
                        <Input
                          size="small"
                          value={selectedData.acf.course_name}
                          disabled
                          placeholder=""
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                      </div>
                      <div>
                        <h2 className="text-base mb-1">Course Duration</h2>
                        <Input
                          size="small"
                          value={`${selectedData.acf.course_duration} Months`}
                          disabled
                          placeholder=""
                          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-base mb-1">Course Duration</h2>
                      <Textarea
                        size="lg"
                        value={selectedData.acf.course_description}
                        disabled
                        id="courseDuration"
                        name="courseDuration"
                        placeholder=""
                        className=" !border-t-blue-gray-200 h-28 focus:!border-t-gray-900"
                      />
                    </div>
                    <div>
                      <Button type="submit">Submit</Button>
                    </div>
                  </div>
                </form>
              </div>
            </>
          )}
        </Modal>
        <div className="swiper-button-next !text-black"></div>
        <div className="swiper-button-prev !text-black"></div>
      </Swiper>
    </div>
  );
};

export default CourseSlider;
