"use client";
import React from "react";
import { Carousel, Typography } from "@material-tailwind/react";

const ImageSlideshow = ({ data }) => {
  // console.log(data, "SLIDESHOW");
  return (
    <div className="h-full w-full">
      <Carousel
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
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
