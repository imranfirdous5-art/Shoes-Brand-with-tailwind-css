import React from "react";
import ss1 from "../assets/images/ss1.jpg";
import ss2 from "../assets/images/ss2.jpg";
import ss3 from "../assets/images/ss3.jpg";
import ss4 from "../assets/images/ss4.jpg";
import ss5 from "../assets/images/ss5.jpg";
import ss6 from "../assets/images/ss6.jpg";
import ss7 from "../assets/images/ss7.jpg";
import rating from "../assets/images/rating.png";

const SandalsSlippers = () => {

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
                    <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">
                      Sandals & Slippers
                    </h2>
                    <nav>
                      <ul className="grid grid-cols-4 gap-8">
                        <li className={cardStyle}>
                          <img src={ss1} alt="ss1" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss2} alt="ss2" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss3} alt="ss3" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss4} alt="ss4" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss5} alt="ss5" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss6} alt="ss6" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss7} alt="ss7" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss1} alt="ss1" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss2} alt="ss2" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss3} alt="ss3" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss4} alt="ss4" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss5} alt="ss5" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss6} alt="ss6" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={ss7} alt="ss7" className={imgStyle} />
                          <p className={textStyle}>
                            air jorden 1 high chicago lost and found
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

export default SandalsSlippers;