import HomeHero from "@/components/BannersComp/HomeHero";
import BlogSection from "@/components/BlogsComp/BlogSection";
import NewMasjid from "@/components/Old&NewMasjid/NewMasjid";
import OldMasjid from "@/components/Old&NewMasjid/OldMasjid";
import Community from "@/components/Sections/Community";
import DonateUs from "@/components/Sections/DonateUs";
import OurStory from "@/components/Sections/OurStory";
import UnderConstructionHome from "@/components/UnderConstruction/UnderConstructionHome";
import UpcomingEvents from "@/components/UpcomingEvents/UpcomingEvents";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <OldMasjid />
      <NewMasjid />
      <UnderConstructionHome />
      <DonateUs />
      <OurStory />
      <Community />
      <UpcomingEvents />
      <BlogSection />
    </div>
  );
};

export default Home;
