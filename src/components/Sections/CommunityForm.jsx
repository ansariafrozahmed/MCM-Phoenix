import React from "react";
import ContactForm from "../Form/ContactForm";

const CommunityForm = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/mcm-pattern.png")',
      }}
      class="relative z-10 overflow-hidden  bg-gray-100 dark:bg-dark px-5 py-10 md:p-10 lg:p-20"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4 lg:justify-between">
          <div class="w-full  px-4 lg:w-1/2 xl:w-6/12">
            <div class="mb-12 lg:mb-0">
              <span>Register Yourself With Us</span>
              <h2 class="text-dark py-2 dark:text-white leading-none font-title mb-6 text-[22px] font-bold uppercase sm:text-[35px] lg:text-[31px] xl:text-[35px]">
                Let’s Join Our Community{" "}
                <span className="text-aqua">To Become A Volunteer</span>
              </h2>
              <p class="text-base leading-relaxed text-body-color dark:text-dark-6 mb-9">
                Thank you for exploring our website! We're excited to connect
                with you. If you have any questions, inquiries, or just want to
                say hello, feel free to reach out to us. We value your feedback
                and are here to assist you.
              </p>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <img
                    src="https://nilethemes.com/kits1/gubsh/wp-content/uploads/sites/12/2022/11/zoal-2.jpg"
                    alt=""
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div>
                  <img
                    src="https://nilethemes.com/kits1/gubsh/wp-content/uploads/sites/12/2022/11/zoal-3.jpg"
                    alt=""
                    className="rounded-xl shadow-2xl"
                  />
                </div>
                <div className="">
                  <img
                    src="https://nilethemes.com/kits1/gubsh/wp-content/uploads/sites/12/2022/11/zoal-1.jpg"
                    alt=""
                    className=" rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityForm;
