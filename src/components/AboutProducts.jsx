import React from "react";
import p1 from "../assets/images/p1.jpg"
import p2 from "../assets/images/p2.jpg"

const AboutProducts = () => {

  const sizeStyle="border border-blue-300 w-16 flex flex-col items-center px-12 py-1 rounded-4xl capitalize hover:border-blue-600 transition-all duration-100 cursor-pointer";


  return (
    <>
      <div className="grid grid-cols-2 p-2 gap-1 bg-blue-100">
       <div className="mx-auto flex items-center">
        {/* <img src="https://5.imimg.com/data5/YC/GV/XN/ANDROID-83761084/product-jpeg-500x500.jpg" alt="sportsShoe" className="w-auto h-full object-cover rounded-3xl" /> */}
        <img src={p1} alt="p1"className="w-auto h-full object-cover rounded-3xl" />
       </div>
       <div>
        <p className="text-lg capitalize flex flex-col"><span className="font-bold">air jordan 1</span> high chicago lost and found</p>
        <p className="my-3 border-b-blue-200 border-b-2 pb-2">
        Push your limits with these advanced sports shoes. Designed for athletes and active lifestyles, they offer superior cushioning, shock absorption, and excellent grip. Whether it's running, gym, or daily workouts — these shoes keep you comfortable and focused.</p>
        <p className="text-lg pb-3">Rs1200<span className="line-through p-3">Rs1500</span>(20%off)</p>
        <p className="text-md font-bold capitalize">size chart</p>
        <div className="grid grid-cols-5 gap-2 py-3">
          <p className={sizeStyle}><span className="font-bold">6</span> rs1200
          </p>
          <p className={sizeStyle}><span className="font-bold">7</span> rs1200
          </p>
          <p className={sizeStyle}><span className="font-bold">8</span> rs1200
          </p>
          <p className={sizeStyle}><span className="font-bold">9</span> rs1200
          </p>
          <p className={sizeStyle}><span className="font-bold">10</span> rs1200
          </p>
          <p className={sizeStyle}><span className="font-bold">11</span> rs1200
          </p>
        </div>
        <button className="mt-4 w-44 py-2 rounded-full text-sm font-semibold text-white \
     bg-linear-to-r from-blue-500 to-blue-600 \
     hover:from-blue-600 hover:to-blue-700 \
     active:scale-95 shadow-md hover:shadow-lg \
     transition-all duration-200 cursor-pointer capitalize">buy now</button>
       </div>
       
      </div>
      
    </>
  );
};

export default AboutProducts;
