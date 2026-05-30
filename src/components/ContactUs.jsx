import React from "react";
import { Link, NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col gap-3">
        <h2 className="mt-10 mb-4 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
          contact us
        </h2>
        <div className="grid grid-rows-2 gap-2 border border-blue-500 mx-auto rounded-2xl md:flex items-center">
          <div className="mx-auto w-full px-3 sm:px-6 md:px-10 h-64 md:overflow-scroll md:h-80 lg:overflow-hidden lg:h-auto lg:px-20 py-4 flex flex-col items-start ">
            <h6 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 w-full text-center md:text-left">
              We are here to help!
            </h6>
            <p className="text-sm sm:text-base leading-relaxed w-full text-center md:text-left">
              Need assistance with your shoe shopping experience? Our support
              team is always ready to help you with product information, shoe
              sizing, order tracking, shipping details, returns, and exchanges.
              Whether you are searching for trendy sneakers, comfortable casual
              shoes, or performance sports footwear, we are here to guide you
              every step of the way. Contact us anytime through email, phone, or
              our contact form, and enjoy reliable customer support with a
              seamless shopping experience.
            </p>
          </div>

          <div className="w-full px-3 sm:px-6 md:px-10 lg:px-20 pt-5">
            <form className="flex flex-col gap-4 sm:gap-5 md:gap-6 max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 text-sm sm:text-base bg-white rounded-2xl shadow shadow-blue-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 text-sm sm:text-base bg-white rounded-2xl shadow shadow-blue-500"
              />

              <input
                type="text"
                placeholder="Message"
                className="w-full px-3 py-2 text-sm sm:text-base bg-white rounded-2xl shadow shadow-blue-500"
              />

              <button
                className="w-full sm:w-44 py-2 rounded-full text-sm font-semibold text-white
      bg-blue-500 to-blue-600
      hover:from-blue-600 hover:to-blue-700
      active:scale-95 shadow-md hover:shadow-lg
      transition-all duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
