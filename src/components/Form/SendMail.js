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
          <h3>Name: ${name}</h3>
          <h3>Email: ${email}</h3>
          <h3>Phone: ${phone}</h3>
          <h3>Message: ${message}</h3>
        </div>
      `,
    });

    return true; // Email sent successfully
  } catch (error) {
    console.error("Error sending email:", error);
    return false; // Failed to send email
  }
};
