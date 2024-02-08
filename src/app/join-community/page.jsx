import React from "react";
import BannerWithhadith from "@/components/BannersComp/BannerWithhadith";
import CommunityForm from "@/components/Sections/CommunityForm";

const page = () => {
  return (
    <div>
      <BannerWithhadith
        page={"Join Community"}
        hadith={`A slave [of Allah] may utter a word without giving it much
          thought by which he slips into the fire a distance further than
          that between east and west.`}
      />
      <CommunityForm />
    </div>
  );
};

export default page;
