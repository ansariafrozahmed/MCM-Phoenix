"use client";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import DonateUsButton from "@/components/DonateUsButton";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";
import React, { useEffect, useState } from "react";

// const fetchGalleryData = async () => {
//   const response = await fetch(
//     "https://demo-web.live/mcm/wp-json/wp/v2/new-planned-masjid?acf_format=standard&_fields=acf,title"
//   );
//   const result = await response.json();
//   return result;
// };

const MCMDonation = () => {
  const [dataa, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewGallery = async () => {
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
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchNewGallery();
  }, []);
  const data = [
    {
      title: "Zakat",
      img: "/zakaat-and-sadaqah/zakaat.webp",
      desc: "This act of almsgiving is an expression of gratitude towards the blessings bestowed by Allah and a demonstration of solidarity with the community's most vulnerable members.",
      link: "/zakat",
    },
    {
      title: "Sadaqah",
      img: "/zakaat-and-sadaqah/sadaqah.webp",
      desc: "Sadaqah Fitr, often given during the month of Ramadan before Eid al-Fitr, is a small amount of charity intended to purify those who fast from any indecent act or speech and to help the poor and needy.",
      link: "/sadaqah",
    },
  ];
  return (
    <div>
      {/* <BannerWithhadith
        page={"MCM Donation"}
        image={"/banner/donation.webp"}
        hadith={`A slave [of Allah] may utter a word without giving it much
              thought by which he slips into the fire a distance further than
              that between east and west`}
      /> */}
      <CommonBanner page={"MCM Donation"} image={"/banner/donation.webp"} />
      {/* ------------------------------ */}
      <div className="px-5 pt-12 md:p-10 lg:px-20 lg:pt-16">
        <h2 className="text-2xl lg:text-4xl uppercase text-center font-semibold text-gray-800">
          Your lillah Donation Required For <br />
          <span className="text-aqua">New Planned Masjid</span>
        </h2>
      </div>
      <Slider data={dataa} />
      {/* <div className="text-center">
        <Link href={"/about-us"}>
          <button class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-medium capitalize rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            Sponsor A Musalla for $2000
          </button>
        </Link>
      </div> */}
      <div className="py-1 text-center w-full">
        <DonateUsButton text={"Sponsor A Musalla for $2000"} />
      </div>
      {/* ------------------------------ */}
      <div className="px-5 py-12 md:p-10 lg:px-32 lg:py-16">
        <h2 className="text-3xl lg:text-5xl uppercase text-center font-semibold text-gray-800">
          You can donate for
          <span className="text-aqua"> other causes as well through</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:px-36 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col mt-6 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
            >
              <div className="p-4">
                <div className="relative overflow-hidden mb-5 bg-white bg-clip-border rounded-xl h-60 border">
                  <img
                    src={item.img}
                    alt="card-image"
                    className="object-cover w-full h-full transition-all ease-in-out hover:scale-105"
                  />
                </div>
                <Link href={item.link}>
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {item.title}
                  </h5>
                </Link>
                <p className="block font-sans text-sm antialiased font-light leading-tight text-inherit">
                  {item.desc}
                </p>
              </div>
              <div className="p-4 pt-0">
                {/* <Link href={"/"}>
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Donate Now
                  </button>
                </Link> */}
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                >
                  <input
                    type="hidden"
                    name="campaign_id"
                    value="N7HTWXEEU6D9S"
                  />
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="submit"
                  >
                    Donate Now
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MCMDonation;
