"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Modal } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EventSlider = ({ data, loading }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  // console.log(data, "SLDIER");
  // console.log(loading, "LOADING");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = (event) => {
    setSelectedEvent(event);
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
        slidesPerView={5}
        spaceBetween={20}
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
            slidesPerView: 3.5,
          },
          1000: {
            slidesPerView: 3.5,
          },
          800: {
            slidesPerView: 2.5,
          },
          600: {
            slidesPerView: 1.8,
          },
          400: {
            slidesPerView: 1.2,
          },
          300: {
            slidesPerView: 1.2,
          },
        }}
      >
        {loading ? (
          <>
            {Array(6)
              .fill()
              .map((_, index) => (
                <SwiperSlide key={index} className="pb-10">
                  <div className="relative flex flex-col  bg-white border bg-clip-border rounded-xl w-full">
                    <div className="relative mx-4 mt-4 overflow-hidden  bg-white bg-clip-border rounded-xl h-40 md:h-64 lg:h-72">
                      <Skeleton className="h-full w-full" />
                    </div>
                    <div className="p-6">
                      <Skeleton />
                      <Skeleton />
                    </div>
                    <div className="p-6 pt-0">
                      <Skeleton className="h-10" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </>
        ) : (
          <>
            {data?.map((item, index) => (
              <SwiperSlide key={index} className="pb-10">
                <div className="relative flex flex-col  bg-white border bg-clip-border rounded-xl w-full">
                  <div className="relative mx-4 mt-4 overflow-hidden  bg-white bg-clip-border rounded-xl h-40 md:h-56 lg:h-60">
                    <img
                      src={item.acf.event_image}
                      alt="card-image"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="px-6 py-4 space-y-1">
                    <h2 className="text-lg capitalize font-medium text-left text-black leading-snug">
                      {item.acf.event_name}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {item.acf.event_date}
                      </p>
                      <p className="block font-sans text-base antialiased leading-relaxed text-blue-gray-900">
                        {item.acf.event_time}
                      </p>
                    </div>
                    <p className="block text-left text-sm antialiased leading-relaxed text-blue-gray-900">
                      <span className="font-medium">Venue:</span>{" "}
                      {item.acf.event_venue}
                    </p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-800 text-left line-clamp-3">
                        {item.acf.event_description}
                      </p>
                    </div>
                  </div>
                  <div class="p-4 pt-0 text-left">
                    <button
                      onClick={() => showModal(item)}
                      class="align-middle select-none font-sans font-medium tracking-wider capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      Full Details..
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </>
        )}
        <Modal
          title="Event Details"
          open={isModalOpen}
          footer={null}
          // width={800}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {selectedEvent && (
            <div className="font-medium space-y-1">
              {/* <img
                src={selectedEvent.acf.event_image}
                alt="card-image"
                className="object-cover w-full h-full"
              /> */}
              <h2 className="text-2xl capitalize font-medium">
                {selectedEvent.acf.event_name}
              </h2>
              <p className="">Date: {selectedEvent.acf.event_date}</p>
              <p>Time: {selectedEvent.acf.event_time}</p>
              <p className="text-sm font-normal text-gray-800">
                <span className="font-medium text-lg">Description:</span>
                <br />
                {selectedEvent.acf.event_description}
              </p>
            </div>
          )}
        </Modal>
        <div className="swiper-button-next !text-aqua"></div>
        <div className="swiper-button-prev !text-aqua"></div>
      </Swiper>
    </div>
  );
};

export default EventSlider;
