import React from "react";
import kidsschool1 from "../assets/images/kidsschool1.jpg";
import kidsschool2 from "../assets/images/kidsschool2.jpg";
import kidsschool3 from "../assets/images/kidsschool3.jpg";
import kidsschool4 from "../assets/images/kidsschool4.jpg";
import kidsschool5 from "../assets/images/kidsschool5.jpg";
import kidsschool6 from "../assets/images/kidsschool6.jpg";
import kidsschool7 from "../assets/images/kidsschool7.jpg";
import rating from "../assets/images/rating.png";

const KidsSchoolShoes = () => {
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
          school shoes
        </h2>
        <nav>
          <ul className="grid grid-cols-4 gap-8">
            <li className={cardStyle}>
              <img src={kidsschool1} alt="kidsschool1" className={imgStyle} />
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
              <img src={kidsschool2} alt="kidsschool2" className={imgStyle} />
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
              <img src={kidsschool3} alt="kidsschool3" className={imgStyle} />
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
              <img src={kidsschool4} alt="kidsschool4" className={imgStyle} />
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
              <img src={kidsschool5} alt="kidsschool5" className={imgStyle} />
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
              <img src={kidsschool6} alt="kidsschool6" className={imgStyle} />
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
              <img src={kidsschool7} alt="kidsschool7" className={imgStyle} />
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
              <img src={kidsschool1} alt="kidsschool1" className={imgStyle} />
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
              <img src={kidsschool2} alt="kidsschool2" className={imgStyle} />
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
              <img src={kidsschool3} alt="kidsschool3" className={imgStyle} />
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
              <img src={kidsschool4} alt="kidsschool4" className={imgStyle} />
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
              <img src={kidsschool5} alt="kidsschool5" className={imgStyle} />
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
              <img src={kidsschool6} alt="kidsschool6" className={imgStyle} />
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
              <img src={kidsschool7} alt="kidsschool7" className={imgStyle} />
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

export default KidsSchoolShoes;
