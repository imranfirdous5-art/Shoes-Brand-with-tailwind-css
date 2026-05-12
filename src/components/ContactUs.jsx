import React from "react";

const ContactUs = () => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col">
        <h2 className="mt-6 mb-4 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
          contact us
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="mx-auto p-6 flex flex-col justify-center border">
            <h6 className="text-2xl mb-2">We are here to help!</h6>
            <p className="text-sm">
              Need assistance with your shoe shopping experience? Our support team is always ready to help you with product information, shoe sizing, order tracking, shipping details, returns, and exchanges. Whether you are searching for trendy sneakers, comfortable casual shoes, or performance sports footwear, we are here to guide you every step of the way. Contact us anytime through email, phone, or our contact form, and enjoy reliable customer support with a seamless shopping experience.
            </p>
          </div>
          <div className="border w-full mx-auto p-2">
            <form action="" className="flex flex-col gap-1">
                {/* <div className="flex flex-col"></div> */}
                    <input type="text" placeholder="Name" className="px-2 py-1 text-sm w-110 border" />
                    <input type="text" placeholder="Email" className="px-2 py-1 text-sm w-110 border" />
                    <input type="text" placeholder="Phone number" className="px-2 py-1 text-sm w-110 border" />
                    <input type="text" placeholder="Comment" className="px-2 pb-10 text-sm w-110 border" />
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
