import React from "react";
import wboot1 from "../assets/images/wboot1.jpg";
import wboot2 from "../assets/images/wboot2.jpg";
import wboot3 from "../assets/images/wboot3.jpg";
import wboot4 from "../assets/images/wboot4.jpg";
import wboot5 from "../assets/images/wboot5.jpg";
import wboot6 from "../assets/images/wboot6.jpg";
import wboot7 from "../assets/images/wboot7.jpg";
import rating from "../assets/images/rating.png";

const WomenBoots = () => {

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
                            <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">women boots</h2>
                            <nav>
                              <ul className="grid grid-cols-4 gap-8">
                                <li className={cardStyle}>
                                  <img src={wboot1} alt="wboot1" className={imgStyle} />
                                  <p className={textStyle}>
                                    Shoetopia Mid Top Black Boots For Women & Girls
                                  </p>
                                  <div className={ratingWrap}>
                                    <span>rating</span>
                                    <img src={rating} alt="rating" className="h-4" />
                                  </div>
                                  <button className={btnStyle}>buy now</button>
                                </li>
                                <li className={cardStyle}>
                                  <img src={wboot2} alt="wboot2" className={imgStyle} />
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
                                  <img src={wboot3} alt="wboot3" className={imgStyle} />
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
                                  <img src={wboot4} alt="wboot4" className={imgStyle} />
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
                                  <img src={wboot5} alt="wboot5" className={imgStyle} />
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
                                  <img src={wboot6} alt="wboot6" className={imgStyle} />
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
                                  <img src={wboot7} alt="wboot7" className={imgStyle} />
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
                                  <img src={wboot1} alt="wboot1" className={imgStyle} />
                                  <p className={textStyle}>
                                    Shoetopia Mid Top Black Boots For Women & Girls
                                  </p>
                                  <div className={ratingWrap}>
                                    <span>rating</span>
                                    <img src={rating} alt="rating" className="h-4" />
                                  </div>
                                  <button className={btnStyle}>buy now</button>
                                </li>
                                <li className={cardStyle}>
                                  <img src={wboot2} alt="wboot2" className={imgStyle} />
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
                                  <img src={wboot3} alt="wboot3" className={imgStyle} />
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
                                  <img src={wboot4} alt="wboot4" className={imgStyle} />
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
                                  <img src={wboot5} alt="wboot5" className={imgStyle} />
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
                                  <img src={wboot6} alt="wboot6" className={imgStyle} />
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
                                  <img src={wboot7} alt="wboot7" className={imgStyle} />
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

export default WomenBoots;