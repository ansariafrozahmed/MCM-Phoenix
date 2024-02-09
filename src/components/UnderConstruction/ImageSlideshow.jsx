"use client";
import React from "react";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";

const ImageSlideshow = ({ data }) => {
  // console.log(data, "SLIDESHOW");
  return (
    <div className="h-full w-full">
      <Carousel
        navigation={false}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-2/4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        className="rounded-xl h-[250px] md:h-[420px] w-full"
        loop={true}
      >
        {data?.map((item, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={item.acf.Image}
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full items-end bg-gradient-to-t from-black/70">
              <div className="w-3/4 text-left md:w-2/4">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 px-5 font-medium py-3 text-lg md:text-xl lg:text-2xl"
                >
                  {item.title.rendered}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlideshow;
