import React from "react";
import deal from "../assets/images/deal.jpg";

const Deal = () => {
  const btnStyle =
    "mt-4 w-44 py-2 rounded-full text-sm font-semibold text-white \
     bg-gradient-to-r from-blue-500 to-blue-600 \
     hover:from-blue-600 hover:to-blue-700 \
     active:scale-95 shadow-md hover:shadow-lg \
     transition-all duration-200 cursor-pointer";

  return (
    <div className="bg-blue-100 py-10 px-4">
      <h2 className="mb-5 text-2xl sm:text-3xl md:text-4xl  tracking-wide uppercase text-center text-gray-800">
        Deal of the Week
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-6">
        {/* Left content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-xs uppercase font-semibold tracking-widest text-blue-500">
            Hot Deal
          </p>

          <h4 className="text-xl sm:text-2xl font-semibold text-gray-800 py-3 leading-snug">
            Jordan Men WMNS Air 2 Retro
            <span className="block text-gray-500 text-sm font-normal">
              White / Varsity Red / Black
            </span>
          </h4>

          <div className="flex items-center justify-center md:justify-start gap-3 mt-2">
            <span className="line-through text-gray-400 text-lg">$150</span>
            <span className="text-2xl font-bold text-blue-600">$100</span>
            <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
              Save 33%
            </span>
          </div>

          <button className={btnStyle}>Buy Now</button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-blue-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition"></div>

          <img
            src={deal}
            alt="deal"
            className="relative rounded-3xl w-full h-auto shadow-lg group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Deal;
