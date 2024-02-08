"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LatestBlogs = () => {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const fetchGalleryData = async () => {
      const response = await fetch("/api/latestBlog");
      const result = await response.json();
      setLatestBlog(result);
      // setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <div>
      <h2 className="mb-5 font-medium font-title text-2xl">LATEST POST</h2>
      {latestBlog?.slice(0, 3)?.map((item, index) => (
        <div key={index} className="bg-[#f4f4f4] p-3 rounded-lg mb-2">
          {/* <Link href={`/blog/${item?.blog_title}?id=${item?.id}`}> */}
          <Link href={`/blog/${item.slug}?id=${item.id}`}>
            <div className="h-[120px] rounded-lg overflow-hidden">
              <img
                className="h-full w-full object-cover transition-all ease-in-out hover:scale-105"
                src={item?.fimg_url ? item.fimg_url : "/placeholder.webp"}
                // src="https://images.pexels.com/photos/11659934/pexels-photo-11659934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            <div className="py-2 space-y-1">
              <h2 className="text-[0.9rem] line-clamp-1">
                {item.title.rendered}
                {/* Blog Title */}
              </h2>
              <div
                className="text-xs text-gray-800 line-clamp-2 font-medium"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              >
                {/* {item.content.rendered}
                Description */}
              </div>
              <span className="text-gray-700 text-xs">
                Published on {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestBlogs;
