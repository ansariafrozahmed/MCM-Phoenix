"use client";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import BlogCard from "@/components/BlogsComp/BlogCard";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const res = await fetch(
          "https://demo-web.live/mcm/wp-json/wp/v2/posts"
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

    fetchAllBlogs();
  }, []);
  // console.log(data);
  return (
    <div>
      <CommonBanner
        page={"Blogs"}
        image={
          "https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?w=826&t=st=1707372278~exp=1707372878~hmac=f4fbee96f746763359f3d939ee4fca97539dc4e7dc96ea37885594ad6cc8b94f"
        }
      />
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {loading ? (
          <>
            {Array(4)
              .fill()
              .map((_, index) => (
                <div className="w-full" key={index}>
                  <Skeleton className="h-48" />
                  <Skeleton className="h-8" />
                  <Skeleton count={4} />
                  <Skeleton height={30} width={100} />
                </div>
              ))}
          </>
        ) : (
          <>
            {data?.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
