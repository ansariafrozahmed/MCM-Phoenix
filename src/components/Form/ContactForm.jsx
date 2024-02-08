"use client";
import React from "react";
import { useForm } from "@formspree/react";
//Formspree account ansariafroz720@gmail.coms

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mvoekyay");
  if (state.succeeded) {
    alert("Thanks For Submitting");
  }

  return (
    <div class="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <input
            type="text"
            required
            name="name"
            // value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            class=" border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <input
            type="email"
            required
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            class="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <input
            type="number"
            required
            name="phone"
            // value={phone}
            placeholder="Your Contact Number"
            // onChange={(e) => setPhone(e.target.value)}
            class="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div class="mb-6">
          <textarea
            rows="6"
            required
            name="message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            class="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
