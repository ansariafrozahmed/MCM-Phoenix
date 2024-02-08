import CommonBanner from "@/components/BannersComp/CommonBanner";
import OurStory from "@/components/Sections/OurStory";
import VisionMission from "@/components/Sections/VisionMission";
import Stats from "@/components/Stats";
import React from "react";

const AboutUsPage = () => {
  return (
    <div>
      <CommonBanner page={"About Us"} image={"/banner/1.webp"} />
      <OurStory showButton={false} />
      <Stats />
      <VisionMission />
    </div>
  );
};

export default AboutUsPage;
