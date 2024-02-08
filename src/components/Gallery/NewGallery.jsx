"use client";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewGallery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const response = await fetch("/api/newGalleryData");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <div class="grid grid-cols-2 py-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loading ? (
        <>
          {Array(8)
            .fill()
            .map((_, index) => (
              <div className="aspect-square">
                <Skeleton className="h-full w-full" />
              </div>
            ))}
        </>
      ) : (
        <>
          {data?.map((item, index) => (
            <div key={index} className="aspect-square">
              <Image
                height={"100%"}
                width={"100%"}
                className="object-cover rounded-xl"
                src={item.acf.Image}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default NewGallery;
