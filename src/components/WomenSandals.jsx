import React from "react";
import womenSandal1 from "../assets/images/womenSandal1.jpg";
import womenSandal2 from "../assets/images/womenSandal2.jpg";
import womenSandal3 from "../assets/images/womenSandal3.jpg";
import womenSandal4 from "../assets/images/womenSandal4.jpg";
import womenSandal5 from "../assets/images/womenSandal5.jpg";
import womenSandal6 from "../assets/images/womenSandal6.jpg";
import womenSandal7 from "../assets/images/womenSandal7.jpg";
import rating from "../assets/images/rating.png";

const WomenSandals = () => {

    const cardStyle =
    "w-52 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300";
  const imgStyle = "w-full h-40 object-cover rounded-md";
  const textStyle =
    "text-xs mt-2 mb-2 font-normal text-gray-600 capitalize line-clamp-2 leading-tight";
  const ratingWrap = "flex items-center gap-1 text-[10px] text-gray-500";
  const btnStyle =
    "mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-full text-xs font-medium transition capitalize";


    return(
        <>
        <div className="flex flex-col items-center bg-blue-100">
                <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">women sandals</h2>
                <nav>
                  <ul className="grid grid-cols-4 gap-8">
                    <li className={cardStyle}>
                      <img src={womenSandal1} alt="womenSandal1" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal2} alt="womenSandal2" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal3} alt="womenSandal3" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal4} alt="womenSandal4" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal5} alt="womenSandal5" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal6} alt="womenSandal6" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal7} alt="womenSandal7" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal1} alt="womenSandal1" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal2} alt="womenSandal2" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal3} alt="womenSandal3" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal4} alt="womenSandal4" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal5} alt="womenSandal5" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal6} alt="womenSandal6" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                    <li className={cardStyle}>
                      <img src={womenSandal7} alt="womenSandal7" className={imgStyle} />
                      <p className={textStyle}>
                        Karaddi Toe Sandals Slip On Cross Strap for Women
                      </p>
                      <div className={ratingWrap}>
                        <span>rating</span>
                        <img src={rating} alt="rating" className="h-4" />
                      </div>
                      <button className={btnStyle}>buy now</button>
                    </li>
                  </ul>
                </nav>
              </div>
        </>
    )
}

export default WomenSandals;