import React, { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";
import { sendCourse } from "./SendCourseMail";
import Swal from "sweetalert2";

const CourseForm = ({ selectedData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [courseFees, serCourseFees] = useState(selectedData.acf.course_fees);
  const [courseName, setCourseName] = useState(selectedData.acf.course_name);
  const [courseDuration, setCourseDuration] = useState(
    selectedData.acf.course_duration
  );
  const [courseDescription, setCourseDescription] = useState(
    selectedData.acf.course_description
  );
  const [submitting, setSubmitting] = useState(false);
  const handleCourseFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const emailSent = await sendCourse(
      name,
      email,
      phone,
      courseFees,
      courseName,
      courseDuration,
      courseDescription
    );
    if (emailSent) {
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      Swal.fire({
        title: "Success!",
        text: "Form Submitted Successfully",
        icon: "success",
      });
    } else {
      setSubmitting(false);
      Swal.fire({
        title: "Failed!",
        text: "Form Submission Failed!",
        icon: "error",
      });
    }
  };
  //   console.log(
  //     name,
  //     email,
  //     phone,
  //     courseFees,
  //     courseName,
  //     courseDuration,
  //     courseDescription
  //   );
  return (
    <form onSubmit={handleCourseFormSubmit}>
      <div className="space-y-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <h2 className="text-base mb-1">Your Name</h2>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              size="small"
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className=""
            />
          </div>
          <div>
            <h2 className="text-base mb-1">Your Email</h2>
            <Input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
              type="email"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              className=" "
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <h2 className="text-base mb-1">Contact Number</h2>
            <Input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="small"
              type="number"
              id="number"
              name="number"
              placeholder=""
              className=" "
            />
          </div>
          <div>
            <h2 className="text-base mb-1">Course Fees</h2>
            <Input
              size="small"
              value={selectedData.acf.course_fees}
              disabled
              id="courseFees"
              placeholder=""
              name="courseFees"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div>
            <h2 className="text-base mb-1">Course name</h2>
            <Input
              size="small"
              value={selectedData.acf.course_name}
              disabled
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
          <div>
            <h2 className="text-base mb-1">Course Duration</h2>
            <Input
              size="small"
              value={selectedData.acf.course_duration}
              disabled
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>
        </div>
        <div>
          <h2 className="text-base mb-1">Course Description</h2>
          <Textarea
            size="lg"
            value={selectedData.acf.course_description}
            disabled
            id="courseDuration"
            name="courseDuration"
            placeholder=""
            className=" !border-t-blue-gray-200 h-28 focus:!border-t-gray-900"
          />
        </div>
        <div>
          <Button type="submit">
            {submitting ? <span>Submitting..</span> : <span>Submit</span>}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CourseForm;
