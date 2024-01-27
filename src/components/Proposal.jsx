import { Link } from "react-router-dom";

export default function Proposal() {
  return (
    <div className=" bg-tablet border-y-4 border-orange-400 mt-3 md:mt-5 ">
      <div className="container  w-[100%] h-[400px] md:h-[500px] lg:px-1 flex-col-center  lg:flex lg:flex-row lg:items-center lg:justify-around text-white vazir-bold mt-10">
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <img
            className="w-[180px] h-[130px]  md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-[230px] xl:w-[400px] xl:h-[330px] rounded-full border-4 border-orange-400  "
            src="images/mony.jpg"
            alt="Proposal"
          />
        </div>
        <div data-aos="zoom-in" 
     data-aos-duration="1500" className="flex-col-center pb-10 md:pl-0 ">
          <h2 className="text-4xl mt-5  md:text-5xl md:mb-5 md:mt-5 lg:text-[56px] lg:mb-10">
            پیشنهاد ویژه
          </h2>
          <h3 className="text-lg mt-3 lg:text-[24px] pb-3 lg:mb-5 text-orange-500 text-shadow">
            پک سوخاری خانوادگی (5 نفره)
          </h3>
          <p className=" max-w-[303px] md:max-w-[600px] xl:max-w-[750px] text-[14px] px-2 mb-3 md:mb-5 xl:text-[18px] lg:pb-4 vazir-bold">
            پنج تکه فیله سوخاری + 300 گرم سیب زمینی سرخ شده + 10 تکه سینه مرغ
            سوخاری + سس مخصوص
          </p>
          <div className="flex-row-center mb-5">
            <div className="flex-row-center">
              <span className="text-[17px] md:text-xl lg:text-[24px]">تومان </span>
              <span className="text-[17px] md:text-xl lg:text-[24px]">500,000 </span>
            </div>
            <div className="flex-row-center ml-10 text-orange-500">
              <del className="text-[17px] md:text-xl lg:text-[24px]">تومان </del>
              <del className="text-[17px] md:text-xl lg:text-[24px]">750,000 </del>
            </div>
          </div>
          <Link
            className=" px-7 py-3  lg:text-[20px] lg:px-6 lg:py-3 mt-2  rounded-full border-2 border-white hover:bg-orange-600 hover:border-orange-600"
          >
            سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}
