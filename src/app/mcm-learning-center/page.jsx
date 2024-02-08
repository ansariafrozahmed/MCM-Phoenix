import BannerWithhadith from "@/components/BannersComp/BannerWithhadith";
import CommonBanner from "@/components/BannersComp/CommonBanner";
import DonateUsSection from "@/components/DonateUsSection";
import CoursesForChildren from "@/components/LearningCenter/CoursesForChildren";
import CoursesForFemales from "@/components/LearningCenter/CoursesForFemales";
import CoursesForGents from "@/components/LearningCenter/CoursesForGents";
import Stats from "@/components/Stats";
import React from "react";

const MCMLearningCenter = async () => {
  return (
    <div>
      <BannerWithhadith page={"MCM Learning Center"} image={"/banner/learning.webp"} hadith={`The Apostle of Allah (peace_be_upon_him) said: If anyone pursues a path in knowledge, Allah will thereby make easy for him a path to the Paradise; and he who is made slow by his actions will not be speeded by his genealogy.`} />
      {/* <CommonBanner
        page={"MCM learning Center"}
        image={"/banner/learning.webp"}
      /> */}
      <CoursesForChildren />
      <hr />
      <CoursesForGents />
      <hr />
      <CoursesForFemales />
      <Stats />
      <DonateUsSection />
    </div>
  );
};

export default MCMLearningCenter;
