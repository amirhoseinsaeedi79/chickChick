import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


export default function TopbarMenu() {
  const [pish, setPish] = useState("text-white");
  const [sib, setSib] = useState("text-white");
  const [mixbox, setMixbox] = useState("text-white");
  const [nosh, setNosh] = useState("text-white");
  const [sokhari, setSokhari] = useState("text-white");
  const [sandwich, setSandwich] = useState("text-white");

  useEffect(() => {
    if (window.location.pathname === "/pish") {
      setPish("text-orange-500");
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/sib") {
      setSib("text-orange-500");
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/mixbox") {
      setMixbox("text-orange-500");
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/nosh") {
      setNosh("text-orange-500");
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/sokhari") {
      setSokhari("text-orange-500");
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/sandwich") {
      setSandwich("text-orange-500");
      window.scrollTo(0, 0);
    }
  }, []);

  function menuHandler() {
    window.scrollTo(0, 0);
  }

  return (
   
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1800,
          disableOnInteraction: true,
        }}
        freeMode={true}
        thumbs={{ swiper: "thumbsSwiper" }}

        breakpoints={{
          320: {
            slidesPerView:2,
          },
          640: {
            slidesPerView: 3.5,
          },
          768: {
            slidesPerView:3.5,

          },
          1024: {
            slidesPerView: 4.5,
          },
          1424: {
            slidesPerView: 5,

          },
        }}
        modules={[Autoplay]}
        className="mySwiper flex-row-center text-center direction h-[100px] bgfooter text-white mb-5 pt-20 lg:pt-24 pb-14 border-b-2  border-orange-500 "
      >
        <SwiperSlide className="">
          <Link
            to="/pish"
            onClick={menuHandler}
            className={`${pish} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
          >
            پیش غذا
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link
            to="/sandwich"
            onClick={menuHandler}
            className={`${sandwich} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
          >
            ساندویچ
          </Link>
        </SwiperSlide>
                <SwiperSlide className="">
          <Link
            to="/sokhari"
            onClick={menuHandler}
            className={`${sokhari} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
          >
            سوخاری
          </Link>
        </SwiperSlide>
        <SwiperSlide className="">
          <Link
            to="/sib"
            onClick={menuHandler}
            className={`${sib} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
          >
            سیب زمینی
          </Link>
        </SwiperSlide>
                <SwiperSlide className="max-w-[230px]">
          <Link
            to="/mixbox"
            onClick={menuHandler}
            className={`${mixbox} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8 md:mb-0 hover:text-orange-500`}
          >
            میکس باکس
          </Link>
        </SwiperSlide>
               <SwiperSlide className="">
          <Link
            to="/nosh"
            onClick={menuHandler}
            className={`${nosh} text-[20px] md:text-[22px] vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
          >
            نوشیدنی
          </Link>
        </SwiperSlide>
      </Swiper>

  );
}
