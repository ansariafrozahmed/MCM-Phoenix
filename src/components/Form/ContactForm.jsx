"use client";
import React, { useState } from "react";
import { send } from "./SendMail";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const emailSent = await send(name, email, phone, message);
    if (emailSent) {
      setSubmitting(false);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
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

  return (
    <div className="relative p-8 bg-white rounded-lg shadow-lg dark:bg-dark-2 sm:p-12">
      <form onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <input
            type="text"
            required
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6">
          <input
            type="number"
            required
            name="phone"
            value={phone}
            placeholder="Your Contact Number"
            onChange={(e) => setPhone(e.target.value)}
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none"
          />
        </div>
        <div className="mb-6">
          <textarea
            rows="6"
            required
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="border-gray-500 dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-body-color focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-aqua to-[#05774c] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          >
            {submitting ? <span>Submitting..</span> : <span>Submit</span>}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
