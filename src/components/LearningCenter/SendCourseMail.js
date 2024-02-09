"use server";

import { sendCoursemail } from "@/lib/courseMail";

export const sendCourse = async (
  name,
  email,
  phone,
  courseFees,
  courseName,
  courseDuration,
  courseDescription
) => {
  try {
    await sendCoursemail({
      to: "ansariafroz720@gmail.com",
      name: name,
      subject: "MCM Phoenix Course Enquiry",
      body: `
        <div>
          <h2>Name: ${name}</h2>
          <h2>Email: ${email}</h2>
          <h2>Phone: ${phone}</h2>
          <h2>Course Fees: ${courseFees}</h2>
          <h2>Course Name: ${courseName}</h2>
          <h2>Course Duration: ${courseDuration}</h2>
          <h2>Course Description: ${courseDescription}</h2>
        </div>
      `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
