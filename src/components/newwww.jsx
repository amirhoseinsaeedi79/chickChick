import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

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
    <div className="w-full co z-10 mb-16 text-center fixed top-[70px] py-4 pt-8 bgfooter border-b-4 border-orange-500">
      <div className="container px-5 flex-row-center">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          <SwiperSlide className="max-w-[230px]">
            <Link
              to="/mixbox"
              onClick={menuHandler}
              className={`${mixbox} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8 md:mb-0 hover:text-orange-500`}
            >
              میکس باکس
            </Link>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <Link
              to="/pish"
              onClick={menuHandler}
              className={`${pish} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
            >
              پیش غذا
            </Link>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <Link
              to="/sandwich"
              onClick={menuHandler}
              className={`${sandwich} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
            >
              ساندویچ
            </Link>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <Link
              to="/sokhari"
              onClick={menuHandler}
              className={`${sokhari} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
            >
              سوخاری
            </Link>
          </SwiperSlide>
          
          <SwiperSlide className="max-w-[200px]">
            <Link
              to="/nosh"
              onClick={menuHandler}
              className={`${nosh} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
            >
              نوشیدنی
            </Link>
          </SwiperSlide>
          <SwiperSlide className="max-w-[200px]">
            <Link
              to="/sib"
              onClick={menuHandler}
              className={`${sib} text-2xl md:text-2xl xl:text-3xl vazir-bold md:mx-4 lg:mx-8  md:mb-0 hover:text-orange-500`}
            >
              سیب زمینی
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
