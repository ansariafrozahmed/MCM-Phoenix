import React from "react";
import Cards from "./Cards";
import CourseSlider from "../Course/CourseSlider";

const fetchfemaleCourse = async () => {
  const response = await fetch(
    "https://demo-web.live/mcm/wp-json/wp/v2/female-courses?acf_format=standard&_fields=title,acf"
  );
  const result = await response.json();
  return result;
};

const CoursesForFemales = async () => {
  const data = await fetchfemaleCourse();

  return (
    <div className="p-5 md:p-10 lg:px-20 lg:py-10">
      <h2 className="text-3xl lg:text-4xl  text-left font-semibold text-gray-800">
        Courses For <span className="text-aqua">Adults (Females)</span>
      </h2>
      <CourseSlider data={data} />
      {/* <Cards data={data} /> */}
    </div>
  );
};

export default CoursesForFemales;
