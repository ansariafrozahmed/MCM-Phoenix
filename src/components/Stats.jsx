"use client";
import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          "https://demo-web.live/mcm/wp-json/wp/v2/stats?acf_format=standard&_fields=acf,title"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const result = await res.json();
        // console.log(result, "RESULT");
        setStats(result);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("/mcm-pattern.png")',
      }}
      className="px-5 lg:px-10 py-10 text-center grid gap-10 grid-cols-2 bg-gray-100 md:grid-cols-4"
    >
      {stats?.map((item, index) => (
        <div key={index}>
          <h2 className="mb-1 text-[2rem] lg:text-[2.5rem] font-bold text-aqua">
            {item.acf.stats_number}
          </h2>
          <span className="text-lg lg:text-xl text-gray-800 font-medium">
            {item.title.rendered}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
