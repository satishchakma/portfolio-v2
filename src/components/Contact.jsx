import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsEnvelope } from "react-icons/bs";

import Swal from "sweetalert2";

import "./Contact.css";

const Contact = () => {
  //   console.log(import.meta.env.VITE_YOUR_SERVICE_ID);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const myForm = e.target;

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          //   console.log("sent succesfully");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent. Thank you.",
            showConfirmButton: false,
            timer: 1500,
          });
          myForm.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="my-[90px]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <h4 className="subtitle scroll-animation  gap-4">
        <BsEnvelope></BsEnvelope>
        CONTACT
      </h4>
      <div className="section-header ">
        <h1>
          Let's Collaborate
          <span> Together!</span>
        </h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="flex gap-6 mb-[35px]">
          <div className="w-full">
            <label className="block">
              Your Name <sup>*</sup>
            </label>
            <input
              className="w-full"
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full">
            <label className="block">
              Email <sup>*</sup>
            </label>
            <input
              className="w-full"
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <label className="block">Your Message</label>
        <textarea
          className="block w-full min-h-[60px] mb-[35px]"
          name="message"
          placeholder="Please write your message here"
        />
        <input className="theme-btn gap-5 w-1/4" type="submit" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
