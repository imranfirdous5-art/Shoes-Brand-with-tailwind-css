import React from "react";
import ls1 from "../assets/images/ls1.jpg";
import ls2 from "../assets/images/ls2.jpg";
import ls3 from "../assets/images/ls3.jpg";
import ls4 from "../assets/images/ls4.jpg";
import ls5 from "../assets/images/ls5.jpg";
import ls6 from "../assets/images/ls6.jpg";
import ls7 from "../assets/images/ls7.jpg";
import rating from "../assets/images/rating.png";

const Loafers = () => {
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
        <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">
          Loafer Shoes
        </h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={ls1} alt="ls1" className={imgStyle} />
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
              <img src={ls2} alt="ls2" className={imgStyle} />
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
              <img src={ls3} alt="ls3" className={imgStyle} />
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
              <img src={ls4} alt="ls4" className={imgStyle} />
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
              <img src={ls5} alt="ls5" className={imgStyle} />
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
              <img src={ls6} alt="ls6" className={imgStyle} />
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
              <img src={ls7} alt="ls7" className={imgStyle} />
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
              <img src={ls1} alt="ls1" className={imgStyle} />
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
              <img src={ls2} alt="ls2" className={imgStyle} />
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
              <img src={ls3} alt="ls3" className={imgStyle} />
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
              <img src={ls4} alt="ls4" className={imgStyle} />
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
              <img src={ls5} alt="ls5" className={imgStyle} />
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
              <img src={ls6} alt="ls6" className={imgStyle} />
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
              <img src={ls7} alt="ls7" className={imgStyle} />
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

export default Loafers;
