import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Upcoming = () => {
  return (
    <>
    <div className="bg-blue-100 pb-6 pt-5">
        <h2 className="mb-6 pt-6 text-2xl sm:text-3xl md:text-4xl uppercase text-center">
        Upcoming Products
      </h2>
    <Swiper
    modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
    >
      <SwiperSlide>
        <img src="https://redtape.com/cdn/shop/files/RSL0321_1.jpg?v=1754303629" className="w-full h-100 object-contain" />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://rukminim1.flixcart.com/image/1280/1280/xif0q/shoe/k/j/d/7-saj402-7-mactree-tan-original-imagzpgazqg7fjgt.jpeg?q=90" className="w-full h-100 object-contain"  />
      </SwiperSlide>
      
      <SwiperSlide>
        <img src="https://m.media-amazon.com/images/I/715m2IrjxdL._AC_UY1000_.jpg" className="w-full h-100 object-contain"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://ajantashoes.com/cdn/shop/files/EG3026-Creative1.jpg?v=1773905689&width=2000" className="w-full h-100 object-contain"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://tiesta.in/cdn/shop/files/IVES3.jpg?v=1772473316" className="w-full h-100 object-contain"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://carltonlondon.co.in/cdn/shop/files/4_2_2666d892-8220-452c-b31c-ef43fd9e87c2.jpg?v=1754546386" className="w-full h-100 object-contain"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://5.imimg.com/data5/ECOM/Default/2024/8/444278625/JN/PJ/AA/146821774/1620375821029-500x500.jpg" className="w-full h-100 object-contain"  />
      </SwiperSlide>

      <SwiperSlide>
        <img src="https://images-cdn.ubuy.co.in/65bc844c6d369c37ba2b516e-je-gou-kid-girls-wedding-sandals-crystal.jpg" className="w-full h-100 object-contain"  />
      </SwiperSlide>
    </Swiper>
    </div>
    </>
  );
}

export default Upcoming;