"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import OldGallery from "./OldGallery";
import NewGallery from "./NewGallery";
import UnderConstruction from "./UnderConstruction";

const GalleryTab = () => {
  const data = [
    {
      label: "Old Masjid",
      value: "old",
      desc: <OldGallery />,
    },
    {
      label: "New Planned Masjid",
      value: "new",
      desc: <NewGallery />,
    },

    {
      label: "Under Construction",
      value: "under",
      desc: <UnderConstruction />,
    },
  ];

  return (
    <div className="p-2 py-5 md:p-10 lg:px-20 lg:py-10">
      <Tabs id="custom-animation" value="old">
        <TabsHeader className="bg-aqua">
          {data.map(({ label, value }) => (
            <Tab
              className="h-14 leading-tight text-sm md:text-lg"
              key={value}
              value={value}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default GalleryTab;
