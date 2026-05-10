import React from "react";
import fs1 from "../assets/images/fs1.jpg";
import fs2 from "../assets/images/fs2.jpg";
import fs3 from "../assets/images/fs3.jpg";
import fs4 from "../assets/images/fs4.jpg";
import fs5 from "../assets/images/fs5.jpg";
import fs6 from "../assets/images/fs6.jpg";
import fs7 from "../assets/images/fs7.jpg";
import rating from "../assets/images/rating.png";

const FormalShoes = () => {

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
                    <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">Formal Shoes</h2>
                    <nav>
                      <ul className="grid grid-cols-4 gap-8">
                        <li className={cardStyle}>
                          <img src={fs1} alt="fs1" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs2} alt="fs2" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs3} alt="fs3" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs4} alt="fs4" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs5} alt="fs5" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs6} alt="fs6" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs7} alt="fs7" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs1} alt="fs1" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs2} alt="fs2" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs3} alt="fs3" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs4} alt="fs4" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs5} alt="fs5" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs6} alt="fs6" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
                          </p>
                          <div className={ratingWrap}>
                            <span>rating</span>
                            <img src={rating} alt="rating" className="h-4" />
                          </div>
                          <button className={btnStyle}>buy now</button>
                        </li>
                        <li className={cardStyle}>
                          <img src={fs7} alt="fs7" className={imgStyle} />
                          <p className={textStyle}>
                            Men Black Textured Brogue Formal Shoes Black
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

export default FormalShoes;