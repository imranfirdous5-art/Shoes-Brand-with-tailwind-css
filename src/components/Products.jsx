import React from "react";
import axios from "axios";

import p1 from "../assets/images/p1.jpg";
import p2 from "../assets/images/p2.jpg";
import p3 from "../assets/images/p3.jpg";
import p4 from "../assets/images/p4.jpg";
import p5 from "../assets/images/p5.jpg";
import p6 from "../assets/images/p6.jpg";
import p7 from "../assets/images/p7.jpg";

// men
import ss1 from "../assets/images/ss1.jpg";
import ss2 from "../assets/images/ss2.jpg";
import ss3 from "../assets/images/ss3.jpg";
import ss4 from "../assets/images/ss4.jpg";
import ss5 from "../assets/images/ss5.jpg";
import ss6 from "../assets/images/ss6.jpg";
import ss7 from "../assets/images/ss7.jpg";
import ls1 from "../assets/images/ls1.jpg";
import ls2 from "../assets/images/ls2.jpg";
import ls3 from "../assets/images/ls3.jpg";
import ls4 from "../assets/images/ls4.jpg";
import ls5 from "../assets/images/ls5.jpg";
import ls6 from "../assets/images/ls6.jpg";
import ls7 from "../assets/images/ls7.jpg";

// women
import ws1 from "../assets/images/ws1.jpg";
import ws2 from "../assets/images/ws2.jpg";
import ws3 from "../assets/images/ws3.jpg";
import ws4 from "../assets/images/ws4.jpg";
import ws5 from "../assets/images/ws5.jpg";
import ws6 from "../assets/images/ws6.jpg";
import ws7 from "../assets/images/ws7.jpg";
import h1 from "../assets/images/h1.jpg";
import h2 from "../assets/images/h2.jpg";
import h3 from "../assets/images/h3.jpg";
import h4 from "../assets/images/h4.jpg";
import h5 from "../assets/images/h5.jpg";
import h6 from "../assets/images/h6.jpg";
import h7 from "../assets/images/h7.jpg";
import womenSandal1 from "../assets/images/womenSandal1.jpg";
import womenSandal2 from "../assets/images/womenSandal2.jpg";
import womenSandal3 from "../assets/images/womenSandal3.jpg";
import womenSandal4 from "../assets/images/womenSandal4.jpg";
import womenSandal5 from "../assets/images/womenSandal5.jpg";
import womenSandal6 from "../assets/images/womenSandal6.jpg";
import womenSandal7 from "../assets/images/womenSandal7.jpg";
import wboot1 from "../assets/images/wboot1.jpg";
import wboot2 from "../assets/images/wboot2.jpg";
import wboot3 from "../assets/images/wboot3.jpg";
import wboot4 from "../assets/images/wboot4.jpg";
import wboot5 from "../assets/images/wboot5.jpg";
import wboot6 from "../assets/images/wboot6.jpg";
import wboot7 from "../assets/images/wboot7.jpg";

// kids
import kidsneaker1 from "../assets/images/kidsneaker1.jpg";
import kidsneaker2 from "../assets/images/kidsneaker2.jpg";
import kidsneaker3 from "../assets/images/kidsneaker3.jpg";
import kidsneaker4 from "../assets/images/kidsneaker4.jpg";
import kidsneaker5 from "../assets/images/kidsneaker5.jpg";
import kidsneaker6 from "../assets/images/kidsneaker6.jpg";
import kidsneaker7 from "../assets/images/kidsneaker7.jpg";
import kidsandal1 from "../assets/images/kidsandal1.jpg";
import kidsandal2 from "../assets/images/kidsandal2.jpg";
import kidsandal3 from "../assets/images/kidsandal3.jpg";
import kidsandal4 from "../assets/images/kidsandal4.jpg";
import kidsandal5 from "../assets/images/kidsandal5.jpg";
import kidsandal6 from "../assets/images/kidsandal6.jpg";
import kidsandal7 from "../assets/images/kidsandal7.jpg";
import kidsschool1 from "../assets/images/kidsschool1.jpg";
import kidsschool2 from "../assets/images/kidsschool2.jpg";
import kidsschool3 from "../assets/images/kidsschool3.jpg";
import kidsschool4 from "../assets/images/kidsschool4.jpg";
import kidsschool5 from "../assets/images/kidsschool5.jpg";
import kidsschool6 from "../assets/images/kidsschool6.jpg";
import kidsschool7 from "../assets/images/kidsschool7.jpg";
import kidsboot1 from "../assets/images/kidsboot1.jpg";
import kidsboot2 from "../assets/images/kidsboot2.jpg";
import kidsboot3 from "../assets/images/kidsboot3.jpg";
import kidsboot4 from "../assets/images/kidsboot4.jpg";
import kidsboot5 from "../assets/images/kidsboot5.jpg";
import kidsboot6 from "../assets/images/kidsboot6.jpg";
import kidsboot7 from "../assets/images/kidsboot7.jpg";

import rating from "../assets/images/rating.png";
import { Link, NavLink } from "react-router-dom";

const Products = () => {
  const cardStyle =
    "w-full p-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300";
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
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* products */}
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
            <li className={cardStyle}>
              <img src={p7} alt="p7" className={imgStyle} />
              <p className={textStyle}>
                air jorden 1 high chicago lost and found
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>read more</button>
            </li>
            
            {/* sandals & slepers */}
            <li className={cardStyle}>
              <img src={ss1} alt="ss1" className={imgStyle} />
              <p className={textStyle}>
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
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
                AFROJACK Sandal/Slippers For Men With PU Upper
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>

            {/* men loofers */}
            <li className={cardStyle}>
              <img src={ls1} alt="ls1" className={imgStyle} />
              <p className={textStyle}>
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
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
                HITZ Men's Black Leather Casual Loafers
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>

            {/* women sneakers */}
            <li className={cardStyle}>
              <img src={ws1} alt="ws1" className={imgStyle} />
              <p className={textStyle}>
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
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
                Bacca Bucci MARINE Low-top Platform Fashion Sneakers
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>

            {/* heels */}
            <li className={cardStyle}>
              <img src={h1} alt="h1" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h2} alt="h2" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h3} alt="h3" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h4} alt="h4" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h5} alt="h5" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h6} alt="h6" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>
            <li className={cardStyle}>
              <img src={h7} alt="h7" className={imgStyle} />
              <p className={textStyle}>
                Uunda Fashion Black Ankle Strap High Heels for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>

            {/* women sandal */}
            <li className={cardStyle}>
              <img src={womenSandal1} alt="womenSandal1" className={imgStyle} />
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
              <img src={womenSandal2} alt="womenSandal2" className={imgStyle} />
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
              <img src={womenSandal3} alt="womenSandal3" className={imgStyle} />
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
              <img src={womenSandal4} alt="womenSandal4" className={imgStyle} />
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
              <img src={womenSandal5} alt="womenSandal5" className={imgStyle} />
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
              <img src={womenSandal6} alt="womenSandal6" className={imgStyle} />
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
              <img src={womenSandal7} alt="womenSandal7" className={imgStyle} />
              <p className={textStyle}>
                Karaddi Toe Sandals Slip On Cross Strap for Women
              </p>
              <div className={ratingWrap}>
                <span>rating</span>
                <img src={rating} alt="rating" className="h-4" />
              </div>
              <button className={btnStyle}>buy now</button>
            </li>

            {/* women boot */}
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

            {/* kids sneakers */}
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

            {/* kids sandals */}
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

            {/* kids school shoes */}
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

            {/* kids boots */}
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

export default Products;
