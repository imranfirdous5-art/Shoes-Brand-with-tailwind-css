import React from "react";
import kidsneaker1 from "../assets/images/kidsneaker1.jpg";
import kidsneaker2 from "../assets/images/kidsneaker2.jpg";
import kidsneaker3 from "../assets/images/kidsneaker3.jpg";
import kidsneaker4 from "../assets/images/kidsneaker4.jpg";
import kidsneaker5 from "../assets/images/kidsneaker5.jpg";
import kidsneaker6 from "../assets/images/kidsneaker6.jpg";
import kidsneaker7 from "../assets/images/kidsneaker7.jpg";
import rating from "../assets/images/rating.png";

const KidsSneakers = () => {
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
          kids sneakers
        </h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={kidsneaker1} alt="kidsneaker1" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker2} alt="kidsneaker2" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker3} alt="kidsneaker3" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker4} alt="kidsneaker4" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker5} alt="kidsneaker5" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker6} alt="kidsneaker6" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker7} alt="kidsneaker7" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker1} alt="kidsneaker1" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker2} alt="kidsneaker2" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker3} alt="kidsneaker3" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker4} alt="kidsneaker4" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker5} alt="kidsneaker5" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker6} alt="kidsneaker6" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsneaker7} alt="kidsneaker7" className={imgStyle} />
              <p className={textStyle}>
                Boys Colourblocked Sneakers Online 1000014388727
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

export default KidsSneakers;
