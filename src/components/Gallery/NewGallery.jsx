"use client";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewGallery = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOldGallery = async () => {
      try {
        const res = await fetch(
          "https://demo-web.live/mcm/wp-json/wp/v2/new-planned-masjid?acf_format=standard&_fields=acf,title&per_page=30"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const result = await res.json();
        // console.log(result, "RESULT");
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchOldGallery();
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
