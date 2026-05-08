import React from "react";
import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import b5 from "../assets/images/b5.png";
import b6 from "../assets/images/b6.png";

const Brand = () => {

  const imgStyle =
    "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white p-3 rounded-2xl hover:-translate-y-1 transition-all duration-300 hover:shadow-lg";

  return (
    <div className="bg-blue-100 pt-5 pb-10 px-4 flex flex-col items-center">
      
      <h2 className="mt-5 mb-6 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
        our trusted brands
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        <img src={b1} alt="b1" className={imgStyle}/>
        <img src={b2} alt="b2" className={imgStyle}/>
        <img src={b3} alt="b3" className={imgStyle}/>
        <img src={b4} alt="b4" className={imgStyle}/>
        <img src={b5} alt="b5" className={imgStyle}/>
        <img src={b6} alt="b6" className={imgStyle}/>
        <img src={b6} alt="b6" className={imgStyle}/>
        <img src={b5} alt="b5" className={imgStyle}/>
        <img src={b4} alt="b4" className={imgStyle}/>
        <img src={b3} alt="b3" className={imgStyle}/>
        <img src={b2} alt="b2" className={imgStyle}/>
        <img src={b1} alt="b1" className={imgStyle}/>
      </div>

    </div>
  );
};

export default Brand;