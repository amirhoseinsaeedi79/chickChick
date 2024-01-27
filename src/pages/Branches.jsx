import { Link } from "react-router-dom";
import TitleHeader from "../components/TitleHeader";
export default function Branches() {

  return (
    <div className="bgcall">
      <TitleHeader title={"شعبه ها"} />

      <div className=" container flex flex-row  justify-around flex-wrap py-8 lg:py-12 px-2  md:px-10 ">
        <Link
          to="/Arsh"
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex-col-center cursor-pointer relative "
        >
          <h5 className="text-white text-[24px] md:text-[28px] mb-4 vazir-bold">شعبه آجودانیه</h5>
          <img
            className="w-[400px] h-[300px] md:h-[360px]"
            src="images/shobeh1.png"
            alt=""
          />
          <div className="w-full h-[300px] md:h-[360px] absolute top-[60px] z-20 bg2 text-center text-white opacity-0 hover:opacity-100 flex-col-center border-2 border-orange-500 ">
            <span className="text-3xl md:text-[28px] vazir-bold mb-3">
              شعبه آجودانیه
            </span>
            <hr className="w-52 h-[2px] bg-orange-500  my-3 " />
            <span className="text-xl md:text-[24px] vazir-bold">
              جهت اطلاعات بیشتر کلیک کنید
            </span>
          </div>
        </Link>
        <Link
          to="/Galeria"
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="flex-col-center cursor-pointer relative "
        >
          <h5 className="text-white text-[24px] md:text-[28px] mb-4 vazir-bold mt-7 md:mt-0">شعبه ولنجک</h5>
          <img
            className="w-[400px] h-[300px] md:h-[360px]"
            src="images/shobeh2.jpg"
            alt=""
          />
          <div className="w-full h-[300px] md:h-[360px] absolute top-[60px] z-20 bg2 text-center text-white opacity-0 hover:opacity-100 flex-col-center border-2 border-orange-500 ">
            <span className="text-3xl md:text-[28px] vazir-bold mb-3">
              شعبه ولنجک{" "}
            </span>
            <hr className="w-52 h-[2px] bg-orange-500  my-3 " />
            <span className="text-xl md:text-[22px] vazir-bold">
              جهت اطلاعات بیشتر کلیک کنید
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}


