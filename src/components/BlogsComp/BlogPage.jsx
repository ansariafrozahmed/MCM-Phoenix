"use client";
import React, { useEffect, useState } from "react";
import LatestBlogs from "./LatestBlogs";
import { usePathname, useSearchParams } from "next/navigation";
import { Breadcrumbs } from "@material-tailwind/react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogPage = () => {
  const params = useSearchParams();
  const blogid = params.get("id");
  const path = usePathname();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const slug = path.replace("/blog/", "");

  // console.log(slug);
  useEffect(() => {
    // setLoading(true);
    const fetchGalleryData = async () => {
      const response = await fetch(
        `https://admin.mcmphoenix.us/wp-json/wp/v2/posts?slug=${slug}`
      );
      const result = await response.json();
      // console.log(...result, "rtytuvbhijnokml");
      setBlogData(...result);
      setLoading(false);
    };
    fetchGalleryData();
  }, []);

  return (
    <div className="bg-[#f4f4f4] p-3 lg:py-10 lg:px-24 lg:flex gap-5 w-full">
      {loading ? (
        <div className="lg:w-[73%] p-3 lg:p-3 lg:py-5 bg-white mb-5 rounded-lg">
          <Skeleton height={"30px"} />
          <Skeleton height={"25px"} width={"50%"} />
          <Skeleton width={"100%"} height={"400px"} className="mt-4" />
          <Skeleton count={10} />
          <br />
          <Skeleton count={10} />
        </div>
      ) : (
        <>
          <div className="lg:w-[73%] p-3 lg:p-3 bg-white mb-5 rounded-lg">
            {/* <BreadCrumb
          label1={"Blogs"}
          url={"/blogs"}
        /> */}
            <Breadcrumbs className="mx-3 mt-2">
              <a href="#" className="opacity-60">
                Home
              </a>
              <Link href={"/blogs"} className="opacity-60">
                Blog
              </Link>
              {/* <a href="#">Breadcrumbs</a> */}
            </Breadcrumbs>
            <div className="p-2 lg:p-3 space-y-3">
              <h1 className="text-[1.3rem] lg:text-[2rem]  font-semibold leading-tight">
                {blogData?.title?.rendered}
              </h1>
              <div>
                <span className="text-black tracking-wider text-sm">
                  Published by{" "}
                  <span className="text-aqua">
                    {/* {blogData?.author || "NA"} */}
                    Admin
                  </span>{" "}
                  on{" "}
                  <span className="text-aqua">
                    {new Date(blogData?.date).toLocaleDateString()}
                  </span>
                </span>
              </div>
              <img src={blogData?.fimg_url} alt="" />
              {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
              <div
                className="space-y-3 blogdescription"
                dangerouslySetInnerHTML={{
                  __html: blogData?.content?.rendered,
                }}
              ></div>
              {/* <div>
            <ShareButton
              url={`${domain}${blogData?.slug}?id=${blogData?.id}`}
            />
          </div> */}
            </div>
          </div>
        </>
      )}
      <div className="h-[100%] lg:w-[27%] p-3 lg:p-5 bg-white sticky top-10 rounded-lg font-title">
        <LatestBlogs />
      </div>
    </div>
  );
};

export default BlogPage;
