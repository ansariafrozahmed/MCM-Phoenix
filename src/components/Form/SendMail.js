"use server";
const { sendmail } = require("@/lib/mail");

export const send = async (name, email, phone, message) => {
  try {
    await sendmail({
      to: "ansariafroz720@gmail.com",
      name: name,
      subject: "TESTTTT",
      body: `
        <div>
          <h2>Name: ${name}</h2>
          <h2>Email: ${email}</h2>
          <h2>Phone: ${phone}</h2>
          <h2>Message: ${message}</h2>
        </div>
      `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
