import CommonBanner from "@/components/BannersComp/CommonBanner";
import BlogCard from "@/components/BlogsComp/BlogCard";
import React from "react";

const fetchAllBlogs = async () => {
  const response = await fetch("https://demo-web.live/mcm/wp-json/wp/v2/posts");
  const result = await response.json();
  return result;
};
const Blogs = async () => {
  const data = await fetchAllBlogs();

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
        {data?.map((item, index) => (
          <BlogCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
