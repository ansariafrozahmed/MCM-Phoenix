"use client";
import React from "react";
import Link from "next/link";
import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const useFullLinks = [
    {
      label: "About Us",
      link: "/about-us",
    },
    {
      label: "",
    },
  ];

  return (
    <>
      <section className="md:flex p-5 border-t md:px-10 py-12 bg-gray-100">
        {/* LEFT DIV */}
        <div className="w-full md:w-[40%] mb-10">
          <div>
            {/* <h2 className="text-2xl font-medium">MCM Phoenix</h2> */}
            <img src="/logo.svg" className="h-[40px]" alt="" />
            <p className="text-gray-700 text-[0.9rem] mt-2 md:pr-20">
              To meet the growing needs of the Muslim community in Phoenix by
              building a new mosque that is accessible, can accommodate
              approximately 1,000 worshipers, and offers supporting services
              that include a part-time Islamic school.
            </p>
          </div>
          <div className="flex items-center text-gray-700 gap-3 pt-2">
            <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
              <a
                href="https://www.youtube.com/channel/UCK0KyPMhrcOvmO60xQr6uEA"
                target="_blank"
              >
                <FaYoutube size={30} />
              </a>
              <a
                href="https://www.facebook.com/MuslimCommunityMosque/"
                target="_blank"
              >
                <FaFacebook size={30} />
              </a>
            </div>
          </div>
        </div>
        {/* RIGHT DIV */}
        <div className="w-full md:w-[60%] grid grid-cols-2  md:grid-cols-3 gap-5">
          <div>
            <h2 className="text-base md:text-xl font-medium text-gray-800">
              Donation & Pledge
            </h2>
            <ul className="text-[0.9rem] space-y-2 mt-2 text-gray-700">
              <li>
                <Link href={"/mcm-donation"}>MCM Donation</Link>
              </li>
              <li>
                <Link href={"/zakat"}>Zakaat</Link>
              </li>
              <li>
                <Link href={"/sadaqah"}>Sadaqah</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base md:text-xl font-medium text-gray-800">
              Usefull Links
            </h2>
            <ul className="text-[0.9rem] space-y-2 mt-2 text-gray-700">
              <li>
                <Link href={"/under-construction"}>New Construction</Link>
              </li>
              <li>
                <Link href={"/gallery"}>Gallery</Link>
              </li>
              <li>
                <Link href={"/mcm-learning-center"}>MCM Learning Center</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base md:text-xl font-medium text-gray-800">
              Get In Touch
            </h2>
            <ul className="text-[0.9rem] space-y-2 mt-2 text-gray-700">
              <li>
                <Link href={"contact-us"}>Contact Us</Link>{" "}
              </li>
              <li>
                <Link href={"about-us"}>About Us</Link>{" "}
              </li>
              <li>
                <Link href={"contact-us"}>Donate</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* COPYRIGHT TEXT */}
      <section className="text-center p-3 flex items-center justify-between px-10">
        <p className="text-sm text-gray-800">
          &copy; {new Date().getFullYear()}{" "}
          <Link href={"/"} className="hover:text-aqua">
            MCM Phoenix
          </Link>
          . All Rights Reserved
        </p>
        <p className="text-sm text-gray-800">
          Crafted By{" "}
          <a
            href={"https://gsmash.com/"}
            target="_blank"
            className="hover:text-aqua"
          >
            GSMASH TECHNOLOGIES
          </a>
        </p>
      </section>
    </>
  );
};

export default Footer;
