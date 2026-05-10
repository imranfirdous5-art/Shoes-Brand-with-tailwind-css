import React from "react";
import kidsandal1 from "../assets/images/kidsandal1.jpg";
import kidsandal2 from "../assets/images/kidsandal2.jpg";
import kidsandal3 from "../assets/images/kidsandal3.jpg";
import kidsandal4 from "../assets/images/kidsandal4.jpg";
import kidsandal5 from "../assets/images/kidsandal5.jpg";
import kidsandal6 from "../assets/images/kidsandal6.jpg";
import kidsandal7 from "../assets/images/kidsandal7.jpg";
import rating from "../assets/images/rating.png";

const KidsSandals = () => {
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
          kids sandals
        </h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={kidsandal1} alt="kidsandal1" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal2} alt="kidsandal2" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal3} alt="kidsandal3" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal4} alt="kidsandal4" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal5} alt="kidsandal5" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal6} alt="kidsandal6" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal7} alt="kidsandal7" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal1} alt="kidsandal1" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal2} alt="kidsandal2" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal3} alt="kidsandal3" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal4} alt="kidsandal4" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal5} alt="kidsandal5" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal6} alt="kidsandal6" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={kidsandal7} alt="kidsandal7" className={imgStyle} />
              <p className={textStyle}>
                PANDANINJIA Mona Girls Sandals Toddler White Pu
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

export default KidsSandals;
