import React from "react";

const Contact = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-5">
      <div className="border">
        <div className="bg-gray-900 md:col-span-4 p-10 text-white">
          <h3 className="text-center text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 leading-7 text-gray-200 text-lg">
            We'd love to hear from you! Get in touch with us through the
            following channels:
          </p>

          <div className="flex mt-5 flex-col">
            <p className="text-base">123 Main Street</p>
            <p className="text-base">Srinagar, Jammu & Kashmir, India</p>
          </div>
          <div className="flex items-center mt-5">
            <span className="mr-2 text-lg font-semibold ">Phone</span> <span className="text-base">+91 98765 43210</span>
          </div>
          <div className="flex items-center mt-5">
            <span className="mr-2 text-lg font-semibold ">Available</span> <span className="text-base"> 9:00 AM - 9:00 PM</span>
          </div>
          <div className="flex items-center mt-5">
            <h2 className="text-xl font-semibold mr-2">Email</h2>
            <a href="mailto:arslanamin.org@gmail.com">arslanamin.org@gmail.com</a>
          </div>
          {/* Social Media */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mt-4 mb-2 uppercase">Follow Us</h2>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-blue-600">
                Facebook
              </a>
              <a href="#" className="text-blue-400">
                Twitter
              </a>
              <a href="#" className="text-pink-600">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Contact;
