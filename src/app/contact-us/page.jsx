import CommonBanner from "@/components/BannersComp/CommonBanner";
import ContactUsSection from "@/components/Sections/ContactUsSection";
import React from "react";

const ContactUsPage = () => {
  return (
    <div>
      <CommonBanner page={"Contact Us"} image={"/banner/2.webp"} />
      <ContactUsSection />
      <div className="h-[200px] md:h-[300px] w-full">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.2768411462393!2d-112.01585002495025!3d33.46814244834764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0dc5a78b4dd7%3A0x5750cc8172779364!2sMuslim%20Community%20Mosque%20Phoenix!5e0!3m2!1sen!2sin!4v1707206733111!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
