import Link from "next/link";
import React from "react";

const fetchBlogs = async () => {
  const response = await fetch("https://demo-web.live/mcm/wp-json/wp/v2/posts");
  const result = await response.json();
  return result;
};

const BlogSection = async () => {
  const data = await fetchBlogs();
  // console.log(data);
  return (
    <div className="p-5 md:p-10 lg:p-20">
      <h2 className="text-3xl  md:text-4xl lg:text-5xl uppercase text-center font-semibold text-gray-800">
        Our <span className="text-aqua">Blogs</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.slice(0, 3)?.map((item, index) => (
          <div
            key={index}
            class="relative flex flex-col mt-6 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
          >
            <div class="p-4">
              <div className="relative overflow-hidden mb-5 bg-white bg-clip-border rounded-xl h-52 border">
                <img
                  src={item.fimg_url}
                  alt="card-image"
                  className="object-cover w-full h-full"
                />
              </div>
              <h5 class="mb-2 text-lg antialiased font-medium line-clamp-2 leading-snug tracking-normal text-blue-gray-900">
                {item.title.rendered}
              </h5>
              <div
                className="line-clamp-4 text-sm"
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
              ></div>
              <span className="text-gray-700 text-xs mt-1">
                Published on {new Date(item.date).toLocaleDateString()}
              </span>
            </div>

            <div class="p-4 pt-0">
              <Link href={`/blog/${item.slug}?id=${item.id}`}>
                <button
                  class="align-middle select-none font-sans font-medium tracking-wider capitalize transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More..
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
