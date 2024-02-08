import CommonBanner from "@/components/BannersComp/CommonBanner";
import GalleryTab from "@/components/Gallery/GalleryTab";
import React from "react";

const Gallery = () => {
  return (
    <div>
      <CommonBanner page={"Gallery"} image={"/banner/1.webp"} />
      <GalleryTab />
    </div>
  );
};

export default Gallery;
