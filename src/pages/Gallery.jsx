import TitleHeader from "../components/TitleHeader.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import RegisterContext from "../context/register";
import { useContext } from "react";
import Loader from "../components/Loader.jsx";

export default function Gallery() {
  const allimages = useContext(RegisterContext);
  const menu = allimages.galery;
  return (
    <>
      {menu.length !== 0 ? (
        <div className="bgCompany  overflow-x-hidden overflow-y-hidden">
          <TitleHeader title={"گالری تصاویر"} />
          <div className="w-full text-center text-[22px] md:text-[36px] vazir-bold text-orange-500 mt-16">
            <p>برای دیدن تصاویر لطفا ورق بزنید</p>
          </div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[70%] md:w-6/12 my-20"
          >
            {menu.map((item) => (
              <SwiperSlide
                key={item.id}
                className="flex-col-center text-20 h-[200px] md:h-[400px] "
              >
                <img
                  className="w-[310px] h-[200px]  md:w-[600px] md:h-[500px]"
                  src={item.src}
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="bgCompany mt-2  overflow-x-hidden overflow-y-hidden">
          <TitleHeader title={"گالری تصاویر"} />
          <Loader />
        </div>
      )}
    </>
  );
}
