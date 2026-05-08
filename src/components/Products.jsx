import React from "react";
import axios from "axios";
import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import rating from "../assets/images/rating.png";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  const cardStyle =
    "w-52 p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300";
  const imgStyle = "w-full h-40 object-cover rounded-md";
  const textStyle =
    "text-xs mt-2 mb-2 font-normal text-gray-600 capitalize line-clamp-2 leading-tight";
  const ratingWrap = "flex items-center gap-1 text-[10px] text-gray-500";
  const btnStyle =
    "mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white py-1 rounded-full text-xs font-medium transition capitalize cursor-pointer";

  return (
    <>
      <div className="bg-blue-100 flex flex-col items-center pt-5 pb-10">
        <h2 className=" mt-5 mb-2 text-4xl uppercase">our products</h2>

        <nav>
          <ul className="flex flex-row justify-center flex-wrap gap-4">
            <li className={cardStyle}>
              <img src={p1} alt="p1" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <Link to="/AboutProducts">
              <button className={btnStyle}>read more</button>
              </Link>
              
            </li>

            <li className={cardStyle}>
              <img src={p2} alt="p2" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              {/* <button className={btnStyle}>read more</button> */}
              <Link to="/AboutProducts">
              <button className={btnStyle}>read more</button>
              </Link>
            </li>

            <li className={cardStyle}>
              <img src={p3} alt="p3" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p4} alt="p4" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p5} alt="p5" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p6} alt="p6" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p1} alt="p1" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p2} alt="p2" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p3} alt="p3" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p4} alt="p4" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p5} alt="p5" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>

            <li className={cardStyle}>
              <img src={p6} alt="p6" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Products;
