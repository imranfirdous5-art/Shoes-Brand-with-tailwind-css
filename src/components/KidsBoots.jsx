import React from "react";
import kidsboot1 from "../assets/images/kidsboot1.jpg";
import kidsboot2 from "../assets/images/kidsboot2.jpg";
import kidsboot3 from "../assets/images/kidsboot3.jpg";
import kidsboot4 from "../assets/images/kidsboot4.jpg";
import kidsboot5 from "../assets/images/kidsboot5.jpg";
import kidsboot6 from "../assets/images/kidsboot6.jpg";
import kidsboot7 from "../assets/images/kidsboot7.jpg";
import rating from "../assets/images/rating.png";

const KidsBoots = () => {
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
        <h2 className=" mt-5 mb-2 text-3xl uppercase font-bold">kids boots</h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={kidsboot1} alt="kidsboot1" className={imgStyle} />
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
              <img src={kidsboot2} alt="kidsboot2" className={imgStyle} />
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
              <img src={kidsboot3} alt="kidsboot3" className={imgStyle} />
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
              <img src={kidsboot4} alt="kidsboot4" className={imgStyle} />
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
              <img src={kidsboot5} alt="kidsboot5" className={imgStyle} />
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
              <img src={kidsboot6} alt="kidsboot6" className={imgStyle} />
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
              <img src={kidsboot7} alt="kidsboot7" className={imgStyle} />
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
              <img src={kidsboot1} alt="kidsboot1" className={imgStyle} />
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
              <img src={kidsboot2} alt="kidsboot2" className={imgStyle} />
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
              <img src={kidsboot3} alt="kidsboot3" className={imgStyle} />
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
              <img src={kidsboot4} alt="kidsboot4" className={imgStyle} />
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
              <img src={kidsboot5} alt="kidsboot5" className={imgStyle} />
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
              <img src={kidsboot6} alt="kidsboot6" className={imgStyle} />
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
              <img src={kidsboot7} alt="kidsboot7" className={imgStyle} />
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

export default KidsBoots;
