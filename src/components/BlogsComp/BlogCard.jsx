import Link from "next/link";
import React from "react";

const BlogCard = ({ item, key }) => {
  return (
    <div
      key={key}
      class="relative flex flex-col mt-6 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
    >
      <div class="p-4">
        <div className="relative overflow-hidden mb-5 bg-white bg-clip-border rounded-xl h-48 border">
          <img
            src={item.fimg_url}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </div>
        <h5 class="mb-2 text-lg antialiased font-medium line-clamp-1 leading-snug tracking-normal text-blue-gray-900">
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
  );
};

export default BlogCard;
