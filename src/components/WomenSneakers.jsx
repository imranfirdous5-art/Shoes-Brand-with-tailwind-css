import React from "react";
import ws1 from "../assets/images/ws1.jpg";
import ws2 from "../assets/images/ws2.jpg";
import ws3 from "../assets/images/ws3.jpg";
import ws4 from "../assets/images/ws4.jpg";
import ws5 from "../assets/images/ws5.jpg";
import ws6 from "../assets/images/ws6.jpg";
import ws7 from "../assets/images/ws7.jpg";

import rating from "../assets/images/rating.png";

const WomenSneakers = () => {
  const cardStyle =
    "w-52 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300";
  const imgStyle = "w-full h-40 object-cover rounded-md";
  const textStyle =
    "text-xs mt-2 mb-2 font-normal text-gray-600 capitalize line-clamp-2 leading-tight";
  const ratingWrap = "flex items-center gap-1 text-[10px] text-gray-500";
  const btnStyle =
    "mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-full text-xs font-medium transition capitalize";

  return (
    <>
      <div className="flex flex-col items-center bg-blue-100">
        <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">casual sneakers</h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={ws1} alt="ws1" className={imgStyle} />
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
              <img src={ws2} alt="ws2" className={imgStyle} />
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
              <img src={ws3} alt="ws3" className={imgStyle} />
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
              <img src={ws4} alt="ws4" className={imgStyle} />
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
              <img src={ws5} alt="ws5" className={imgStyle} />
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
              <img src={ws6} alt="ws6" className={imgStyle} />
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
              <img src={ws7} alt="ws7" className={imgStyle} />
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
              <img src={ws1} alt="ws1" className={imgStyle} />
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
              <img src={ws2} alt="ws2" className={imgStyle} />
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
              <img src={ws3} alt="ws3" className={imgStyle} />
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
              <img src={ws4} alt="ws4" className={imgStyle} />
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
              <img src={ws5} alt="ws5" className={imgStyle} />
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
              <img src={ws6} alt="ws6" className={imgStyle} />
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
              <img src={ws7} alt="ws7" className={imgStyle} />
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
  );
};

export default WomenSneakers;


