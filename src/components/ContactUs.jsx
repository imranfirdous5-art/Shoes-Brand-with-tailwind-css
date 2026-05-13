import React from "react";
import { Link, NavLink } from "react-router-dom";


const ContactUs = () => {

  return (
    <>
      <div className="bg-blue-100 flex flex-col gap-3">
        <h2 className="mt-6 mb-4 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
          contact us
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="mx-auto p-6 flex flex-col w-full">
            <h6 className="text-2xl mb-2">We are here to help!</h6>
            <p className="text-sm">
              Need assistance with your shoe shopping experience? Our support team is always ready to help you with product information, shoe sizing, order tracking, shipping details, returns, and exchanges. Whether you are searching for trendy sneakers, comfortable casual shoes, or performance sports footwear, we are here to guide you every step of the way. Contact us anytime through email, phone, or our contact form, and enjoy reliable customer support with a seamless shopping experience.
            </p>
          </div>
          <div className="w-full mx-auto p-2">
            <form action="" className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" placeholder="Name" className="px-3 py-2 text-sm w-110 bg-white rounded-2xl shadow shadow-blue-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="sr-only">Email</label>
                    <input type="text" placeholder="Email" className="px-3 py-2 text-sm w-110 bg-white rounded-2xl shadow shadow-blue-500" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="sr-only">Message</label>
                    <input type="text" placeholder="Message" className="px-3 py-2 text-sm w-110 bg-white rounded-2xl shadow shadow-blue-500" />
                </div>
              <button
                className="mt-3 w-44 py-2 rounded-full text-sm font-semibold text-white \
     bg-linear-to-r from-blue-500 to-blue-600 \
     hover:from-blue-600 hover:to-blue-700 \
     active:scale-95 shadow-md hover:shadow-lg \
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








