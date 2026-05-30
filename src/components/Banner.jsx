import React from "react";
import { Link, NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="bg-blue-100 flex flex-col lg:flex-row items-center justify-between gap-8 px-4 py-6">
        {/* Left Image */}
        <img
          src="https://hitz.co.in/cdn/shop/files/2651-BLUE.jpg?v=1755618834"
          alt="banner"
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-full border"
        />

        {/* Middle Text */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold capitalize">
            new <br />
            <span className="text-blue-400">arrival shoes</span>
          </h1>

          <p className="text-xs sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            assumenda mollitia neque recusandae quod culpa sint at aperiam
            minima optio dolore veritatis.
          </p>

          {/* Form */}
          <form className="flex flex-col items-center gap-2 mt-2 w-full sm:w-64 mx-auto lg:mx-0">
            <input
              type="text"
              placeholder="Name"
              className="bg-white rounded-3xl p-2 text-sm w-44 lg:w-full md:w-60"
            />
            <input
              type="text"
              placeholder="Email"
              className="bg-white rounded-3xl p-2 text-sm w-44 lg:w-full md:w-60"
            />
            {/* <button className="bg-blue-300 px-3 py-1 rounded-2xl w-32 cursor-pointer mx-auto lg:mx-0">
            Shop Now
          </button> */}
            <Link to="/products">
              <button
                className="mt-4 w-44 py-2 rounded-full text-sm font-semibold text-white \
     bg-linear-to-r from-blue-500 to-blue-600 \
     hover:from-blue-600 hover:to-blue-700 \
     active:scale-95 shadow-md hover:shadow-lg \
     transition-all duration-200 cursor-pointer"
              >
                Shop Now
              </button>
            </Link>
          </form>
        </div>

        {/* Right Image */}
        <img
          src="https://www.campusshoes.com/cdn/shop/files/VESPER_VESPER_ICE.BLU-NAVY_07.webp?v=1758174881"
          alt="banner"
          className="w-48 sm:w-64 md:w-72 lg:w-80 rounded-full border"
        />
      </div>
    </>
  );
};

export default Banner;
