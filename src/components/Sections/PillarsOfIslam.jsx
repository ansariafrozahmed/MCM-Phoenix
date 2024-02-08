"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const PillarsOfIslam = () => {
  const data = [
    {
      label: "Shahadah",
      value: "html",
      desc: `The Shahadah is the foundational creed of Islam, expressing the monotheistic belief in the oneness of God (Allah). It consists of two testimonies: "La ilaha illallah" (There is no god but Allah) and "Muhammadur rasulullah" (Muhammad is the messenger of Allah). Uttering this declaration sincerely is a testament to one's commitment to Islam.`,
    },
    {
      label: "Salah",
      value: "react",
      desc: `Muslims perform five daily prayers as a means of maintaining a direct and consistent connection with Allah. These prayers, known as Salah or Salat, are performed facing the Kaaba in Mecca and include specific physical postures and recitations. The five daily prayers are Fajr, Dhuhr, Asr, Maghrib, and Isha, each serving as a reminder of the importance of spiritual discipline throughout the day.`,
    },

    {
      label: "Zakat",
      value: "vue",
      desc: `Zakat is the practice of giving a portion of one's accumulated wealth to those in need, serving as a means of purifying one's wealth and assisting the less fortunate. The prescribed rate for Zakat is typically 2.5% of a Muslim's total wealth, including savings, investments, and other assets. This act of charity emphasizes the importance of social justice and compassion in the Islamic faith.`,
    },

    {
      label: "Fasting",
      value: "angular",
      desc: `Muslims observe fasting during the month of Ramadan, abstaining from food, drink, smoking, and sinful behavior from dawn to sunset. This act of self-discipline is not only a physical fast but also involves spiritual reflection, increased devotion, and empathy for the less privileged. Ramadan, the ninth month of the Islamic lunar calendar, is a time for spiritual growth, increased prayer, and community bonding.`,
    },

    {
      label: "Hajj",
      value: "svelte",
      desc: `The Hajj is a pilgrimage to the holy city of Mecca, which every physically and financially capable Muslim is required to undertake at least once in their lifetime. This pilgrimage occurs during the Islamic month of Dhu al-Hijjah and involves a series of rituals commemorating the actions of Prophet Ibrahim (Abraham) and his family. The Hajj is a profound spiritual journey, promoting unity and equality among Muslims from diverse backgrounds.`,
    },
  ];

  return (
    <div className="px-3 py-14 md:p-20 bg-white">
      <div className="flex flex-col pb-10 space-y-5 items-center justify-center">
        <img src="/bismillah-black.webp" alt="Bismillah" />
        <h2 className="text-3xl lg:text-5xl font-bold">
          PILLARS OF <span className="text-aqua">ISLAM</span>
        </h2>
      </div>
      <Tabs id="custom-animation" value="html">
        <TabsHeader>
          {data.map((item, index) => (
            <Tab key={index} value={item.value}>
              {item.label}
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
          {data.map((item, index) => (
            <TabPanel key={index} value={item.value}>
              {item.desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default PillarsOfIslam;
