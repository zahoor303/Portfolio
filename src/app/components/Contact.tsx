import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="pt-32 container px-4">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-5xl text-[#fd7ad6]" data-aos="zoom-in-up">Get in Touch</h2>
          <p className="text-[#fd7ad6] text-lg pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form below.
          </p>

          {/* Contact Details */}
          <div className="flex gap-3 items-center text-[[#d095df]" data-aos="zoom-in-up">
            <AiOutlineMail size={30} />
            <span>zahoorfatima303@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center text-[[#d095df]" data-aos="zoom-in-up">
            <BsTelephone size={30} />
            <span>(03040963185)</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-8">
          {/* Name Input */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="name" className="text-[#fd7ad6]">Name</label>
            <input
              type="text"
              id="name"
              className="h-[40px] bg-white border border-[#8b48ea] rounded-md px-4"
              placeholder="Your name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="email" className="text-[#fd7ad6]">Email</label>
            <input
              type="email"
              id="email"
              className="h-[40px] bg-white text-black border border-[#8b48ea] rounded-md px-4"
              placeholder="Your email"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex flex-col gap-1" data-aos="zoom-in-up">
            <label htmlFor="message" className="text-[#fd7ad6]">Message</label>
            <textarea
              id="message"
              className="bg-white border text-black border-[#8b48ea] rounded-md px-4 py-2"
              rows="8"
              placeholder="Your message"
            />
          </div>

          {/* Submit Button */}
          <button className="bg-[#d095df] text-white p-2 px-6 rounded-md hover:bg-[#d095df] transition-all duration-300" data-aos="zoom-in-up">
           
            Send
          </button>

      <div className="space-x-4">
        <a
          href=" mailto:zahoorii603@gmail.com"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Email Me
        </a>
        <a
          href=" https://www.linkedin.com/in/zahoor-fatima-butt-3488b22b4"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
        >
          LinkedIn
        </a>
      </div>
    </div>
        </div>
      </div>
   
  );
}

export default Contact;
