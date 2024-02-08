import nodemailer from "nodemailer";

export async function sendmail({ to, name, subject, body }) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ansariafroz720@gmail.com",
      pass: "saab jfnz zfrc qgfx", // Use an app password or enable less secure apps
    },
  });

  try {
    // Verify transporter connection
    const testResult = await transporter.verify();
    // console.log("Transporter verified:", testResult);
  } catch (error) {
    // console.error("Error verifying transporter:", error);
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from: "ansariafroz720@gmail.com",
      to,
      subject,
      html: body,
    });
    // console.log("Email sent:", sendResult);
    return { success: true };
  } catch (error) {
    // console.error("Error sending email:", error);
    return { success: false, error: "Email sending failed" };
  }
}
