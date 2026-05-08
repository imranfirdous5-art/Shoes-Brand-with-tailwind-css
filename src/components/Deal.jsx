// import React from "react";
// import deal from "../assets/images/deal.jpg";

// const Deal = () => {

//   const btnStyle =
//     "mt-2 w-40 bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-full text-xs font-medium transition capitalize";

//   return (
//     <div className="bg-blue-100 pt-5 pb-7 px-4">

//       <h2 className="mt-5 mb-6 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
//         deal of the week
//       </h2>

//       <div className="flex flex-col md:flex-row items-center gap-6">

//         {/* Left content */}
//         <div className="w-full md:w-1/2 p-4 rounded-3xl text-center md:text-left">
//           <p className="text-sm uppercase font-bold pt-4">hot deal week</p>

//           <h4 className="text-lg sm:text-xl md:text-2xl py-4">
//             Jordan Men WMNS Air 2 Retro-White/Varsity Red-Black-Dx4400-106
//           </h4>

//           <p>
//             <span className="line-through">$150</span>
//             <span className="ml-2 font-bold">$100</span>
//           </p>

//           <button className={btnStyle}>buy now</button>
//         </div>

//         {/* Right image */}
//         <div className="w-full md:w-1/2 p-4 rounded-3xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
//           <img src={deal} alt="deal" className="rounded-3xl w-full h-auto" />
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Deal;

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
      <h2 className="mb-5 text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-center text-gray-800">
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
