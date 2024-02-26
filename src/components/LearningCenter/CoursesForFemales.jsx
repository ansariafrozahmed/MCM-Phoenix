"use client";
import React, { useEffect, useState } from "react";
import CourseSlider from "../Course/CourseSlider";

// const fetchfemaleCourse = async () => {
//   const response = await fetch(
//     "https://admin.mcmphoenix.us/wp-json/wp/v2/female-courses?acf_format=standard&_fields=title,acf"
//   );
//   const result = await response.json();
//   return result;
// };

const CoursesForFemales = () => {
  const [femaleCourse, setFemaleCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://admin.mcmphoenix.us/wp-json/wp/v2/female-courses?acf_format=standard&_fields=title,acf&per_page=30"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch stats");
        }
        const result = await res.json();
        // console.log(result, "RESULT");
        setFemaleCourse(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchData();
  }, []);
  // const data = await fetchfemaleCourse();

  return (
    <div className="p-5 md:p-10 lg:px-20 lg:py-10">
      <h2 className="text-3xl lg:text-4xl  text-left font-semibold text-gray-800">
        Courses For <span className="text-aqua">Adults (Females)</span>
      </h2>
      <CourseSlider data={femaleCourse} loading={loading} />
      {/* <Cards data={data} /> */}
    </div>
  );
};

export default CoursesForFemales;
