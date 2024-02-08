import BannerWithhadith from "@/components/BannersComp/BannerWithhadith";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import Link from "next/link";
import React from "react";

const Sadaqah = () => {
  const data = [
    {
      title: "Educational Endeavors",
      image_src: "/zakaat-and-sadaqah/education.webp",
      description:
        "Donating to the construction or support of schools, libraries, or educational institutions that provide knowledge and skills to individuals. This can include funding for educational materials, scholarships, or teacher salaries.",
    },
    {
      title: "Water Wells and Infrastructure",
      image_src: "/zakaat-and-sadaqah/well.webp",
      description:
        "Constructing water wells, reservoirs, or irrigation systems in areas where access to clean water is limited. Providing a sustainable source of clean water is considered a perpetual act of charity, benefiting communities for generations.",
    },
    {
      title: "Supporting Orphanages",
      image_src: "/zakaat-and-sadaqah/orphan.webp",
      description:
        "Contributing to the establishment or maintenance of orphanages and foster care facilities. This helps provide a nurturing environment for orphaned children, ensuring they receive education, healthcare, and emotional support.",
    },
    {
      title: "Islamic Libraries or Publications",
      image_src: "/zakaat-and-sadaqah/library.webp",
      description:
        "Donating to the creation of Islamic libraries, publishing houses, or online platforms that disseminate knowledge about Islam. This includes funding for books, articles, and digital resources that educate people about the teachings of Islam.",
    },
    {
      title: "Planting Trees or Gardens",
      image_src: "/zakaat-and-sadaqah/planting.webp",
      description:
        "Initiating or supporting projects that involve planting trees, community gardens, or green spaces. This contributes to environmental sustainability and provides ongoing benefits such as shade, food, and a healthier ecosystem for years to come.",
    },
    {
      title: "Healthcare Facilities",
      image_src: "/zakaat-and-sadaqah/healthcare.webp",
      description:
        "Establishing or supporting healthcare clinics, hospitals, or medical outreach programs in underserved areas. This helps ensure access to medical care, medications, and preventive healthcare measures for those in need.",
    },
  ];

  return (
    <div>
      {/* <BannerWithhadith
        page={"Sadaqah"}
        image={"/zakaat-and-sadaqah/sadaqah.webp"}
        hadith={`A slave [of Allah] may utter a word without giving it much
          thought by which he slips into the fire a distance further than
          that between east and west.`}
      /> */}
      <CommonBanner page={"Sadaqah"} image={"/zakaat-and-sadaqah/sadaqah.webp"} />
      <div className="p-5 py-10 md:p-10 lg:p-20 flex flex-col lg:flex-row gap-10 w-full">
        <div className="w-full lg:w-[60%] space-y-5 my-auto">
          <div className="space-y-2">
            {/* <h2 className="text-3xl lg:text-4xl uppercase text-left font-semibold text-gray-800">
              Sadaqah <span className="text-aqua">Hadith</span>
            </h2> */}
            <p>
              "Charity does not decrease wealth, no one forgives another except
              that Allah increases his honor, and no one humbles himself for the
              sake of Allah except that Allah raises his status." <span className="text-aqua">(Sahih Muslim)</span>
            </p>
          </div>
          <div className="space-y-2">
            {/* <h2 className="text-3xl lg:text-4xl uppercase text-left font-semibold text-gray-800">
              Sadaqah <span className="text-aqua">Aayat</span>
            </h2> */}
            <p>
              "The example of those who spend their wealth in the Way of Allah
              is like that of a grain of corn that sprouts seven ears and in
              every ear there are a hundred grains. Thus Allah multiplies the
              action of whomsoever He wills." <span className="text-aqua">(Quran, 2:261)</span>
            </p>
          </div>
          <div className="">
            <Link href={"/about-us"}>
              <button class="px-5 md:px-8 py-2 md:py-3 bg-gradient-to-r from-aqua to-[#05774c] text-lg md:text-xl text-white font-medium rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
                Donate Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-[40%]">
          <img
            src="/sadaqah.webp"
            alt="Old Masjid Image"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/* -------------------- */}
      <div className="p-5 py-16 md:p-10 md:py-28 lg:p-20">
        <h2 className="text-3xl lg:text-4xl uppercase text-left font-semibold text-gray-800">
          We Utilize <span className="text-aqua">Sadaqah donation</span> in
          Following way
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col mt-6 border text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full"
            >
              <div className="p-4">
                <div className="relative overflow-hidden mb-5 bg-white bg-clip-border rounded-xl h-48 border">
                  <img
                    src={item.image_src}
                    alt="card-image"
                    className="object-cover w-full h-full transition-all ease-in-out hover:scale-105"
                  />
                </div>
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {item.title}
                </h5>
                <p className="block font-sans text-sm antialiased font-light leading-normal text-inherit">
                  {item.description}
                </p>
              </div>
              {/* <div class="p-4 pt-0">
                <Link href={item.link}>
                  <button
                    class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gradient-to-r from-aqua to-[#05774c] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    Know more..
                  </button>
                </Link>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sadaqah;
