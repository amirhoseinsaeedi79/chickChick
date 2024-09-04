import { Link } from 'react-router-dom';

export default function Proposal() {
  return (
    <div className="bg-tablet mt-3 border-y-4 border-orange-400 md:mt-5">
      <div className="flex-col-center vazir-bold container mt-10 h-[400px] w-[100%] text-white md:h-[500px] lg:flex lg:flex-row lg:items-center lg:justify-around lg:px-1">
        <div data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="1500">
          <img
            className="h-[130px] w-[180px] rounded-full border-4 border-orange-400 md:h-[200px] md:w-[250px] lg:h-[230px] lg:w-[300px] xl:h-[330px] xl:w-[400px]"
            src="images/mony.jpg"
            alt="Proposal"
          />
        </div>
        <div data-aos="zoom-in" 
     data-aos-duration="1500" className="flex-col-center pb-10 md:pl-0">
          <h2 className="mt-5 text-4xl md:mb-5 md:mt-5 md:text-5xl lg:mb-10 lg:text-[56px]">
            پیشنهاد ویژه
          </h2>
          <h3 className="text-shadow mt-3 pb-3 text-lg text-orange-500 lg:mb-5 lg:text-[24px]">
            پک سوخاری خانوادگی (5 نفره)
          </h3>
          <p className="vazir-bold mb-3 max-w-[303px] px-2 text-[14px] md:mb-5 md:max-w-[600px] lg:pb-4 xl:max-w-[750px] xl:text-[18px]">
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
          to="/mixbox"
            className="mt-2 rounded-full border-2 border-white px-7 py-3 hover:border-orange-600 hover:bg-orange-600 lg:px-6 lg:py-3 lg:text-[20px]"
          >
            سفارش
          </Link>
        </div>
      </div>
    </div>
  );
}
