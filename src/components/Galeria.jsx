import MenuHome from "./MenuHome";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import RegisterContext from "../context/register";
import { useContext } from "react";

export default function Galeri() {
  const contextitem = useContext(RegisterContext);
  const login = contextitem.isLoggin;

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const registerHandler = () => {
    if (login) {
      const alldata = getValues();
      fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(alldata),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
      reset();
      toast.success("نظر شما ثبت شد ودر انتظار تایید مدیر میباشد", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("برای ثبت نظر لطفا ابتدا ثبت نام کنید", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="w-full bgcall bg-no-repeat mt-[55px] ">
      <div className="w-full flex-col-center vazir">
        <h2 className="w-full text-center border-b-2 border-orange-500 text-5xl py-10 bg2 text-white">
          شعبه گالریا
        </h2>
        <div className=" flex-col-center relative my-5 md:my-10">
          <h3 className="drop-shadow-xl text-black absolute text-[26px] vazir-bold">
            اطلاعات این شعبه
          </h3>
          <div>
            <svg
              className="w-[280px] h-[60px] fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 229.1 42.6"
              preserveAspectRatio="none"
            >
              <path d="M226.3,1.4c0.7,0.6,0.9,1.1,0.5,1.8c-0.7,1.2-1.4,2.5-2.5,3.6c-1.3,1.2-2.5,2.4-3.4,3.7 c-0.4,0.6-1.1,1.2-1.7,1.7c-2.3,1.8-3.7,4-4.9,6.4c2.3,2.9,4.6,5.9,6.9,8.9c2.2,2.9,4.4,5.8,6.6,8.7c1.5,2.1,1.5,2.4,1,5 c-0.6,0.6-1.5,0.9-2.5,0.9c-1.6,0-3.2,0.1-4.8,0.1c-9.6,0.5-19.2,0.5-28.8,0.4c-2.4,0-4.9-0.2-7.3-0.3c-2.8-0.1-5.5-0.1-8.3-0.1 c-3.1-0.1-6.2-0.1-9.3-0.2c-4.1-0.1-8.3-0.3-12.4-0.3c-7,0-14,0-21.1,0c-4.1,0-8.1,0-12.2,0.1c-3.1,0-6.2,0-9.3,0.1 c-3.8,0.1-7.7,0.2-11.5,0.3c-3.9,0.1-7.9,0.1-11.8,0.2c-4,0.1-8,0.1-12,0.2c-1.6,0-3.2,0-4.8,0c-1.9-0.1-3.8-0.3-5.7-0.1 c-1.9,0.2-3.8,0-5.7,0.1c-2.1,0.1-4.2,0.1-6.3,0c-2.1,0-4.2-0.2-6.3-0.2c-3.4,0-6.8,0-10.2,0c-2.2,0-4.5-0.1-6.7-0.1 c-9.4-0.1-18.8-0.2-28.2-0.3c-1.2,0-2.3-0.2-3.3-0.3c-0.7-0.7-0.7-1.3-0.2-1.9c1.6-1.7,3.3-3.3,4.8-5c3.2-3.6,6.8-7.1,9.7-11 c-0.2-0.3-0.4-0.6-0.6-1c-2-3-4-5.9-6-8.9c-0.3-0.4-0.6-0.8-0.9-1.2c-1.9-2.5-3.8-4.9-5.7-7.4C1.1,4.5,0.6,3.6,0.2,2.7 c-0.5-0.9-0.1-2.2,2-2.4C4.8,0.2,7.3,0.1,9.8,0c7.9-0.1,15.7,0.4,23.6,0.3c4.4,0,8.7,0.3,13.1,0.3c2.9,0.1,5.7,0,8.6,0 c5.4,0,10.9,0.1,16.3,0.1c4.4,0,8.7,0,13.1-0.1c1.4,0,2.8-0.1,4.1-0.1c4.5-0.1,8.9-0.3,13.4-0.4c4.9,0,9.8,0,14.7,0.1 c1,0,1.9,0,2.9,0c1.8,0,3.6,0,5.4,0.2c2.1,0.2,4.2,0.1,6.4,0.1c4.1,0,8.3,0.1,12.4-0.2c2.2-0.1,4.5,0.2,6.7,0.2c4.4,0,8.7,0,13.1,0 c5.5,0,11.1-0.2,16.6,0.4c0.5,0.1,1.1,0,1.6,0c4.8,0.1,9.6,0.1,14.4,0.2c4.3,0.1,8.5,0.5,12.7,0.7c3.9,0.1,7.9,0.4,11.8-0.2 C222.6,1.5,224.5,1.5,226.3,1.4z"></path>
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-end ">
          <div
            data-aos="zoom-in-up"
            data-aos-delay="100"
            className="flex-row-center mt-5 text-white "
          >
            <span className="pr-3  text-[15px] md:text-[20px]">
              آدرس : ولنجک مجتمع گالریا طبقه سوم
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-white rounded-full border-2 border-white p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="200"
            className="flex-row-center mt-5 text-white "
          >
            <span className="pr-3 text-[16px] md:text-[20px]">
              021-12345678 : شماره تماس
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-white rounded-full border-2 border-white p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>

          <div
            data-aos="zoom-in-up"
            data-aos-delay="300"
            className="flex-row-center mt-5 text-white mb-5"
          >
            <span className="flex-row-center text-[16px] md:text-[20px] pr-3 text-white">
              ساعت کاری : از ساعت 10صبح تا10 شب
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 text-white rounded-full border-2 border-white p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <div className=" flex-col-center relative my-5 md:my-10">
          <h3 className="drop-shadow-xl text-black absolute text-3xl md:text-[26px]  vazir-bold">
            خدمات این شعبه
          </h3>
          <div>
            <svg
              className="w-[280px] h-[60px] fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 229.1 42.6"
              preserveAspectRatio="none"
            >
              <path d="M226.3,1.4c0.7,0.6,0.9,1.1,0.5,1.8c-0.7,1.2-1.4,2.5-2.5,3.6c-1.3,1.2-2.5,2.4-3.4,3.7 c-0.4,0.6-1.1,1.2-1.7,1.7c-2.3,1.8-3.7,4-4.9,6.4c2.3,2.9,4.6,5.9,6.9,8.9c2.2,2.9,4.4,5.8,6.6,8.7c1.5,2.1,1.5,2.4,1,5 c-0.6,0.6-1.5,0.9-2.5,0.9c-1.6,0-3.2,0.1-4.8,0.1c-9.6,0.5-19.2,0.5-28.8,0.4c-2.4,0-4.9-0.2-7.3-0.3c-2.8-0.1-5.5-0.1-8.3-0.1 c-3.1-0.1-6.2-0.1-9.3-0.2c-4.1-0.1-8.3-0.3-12.4-0.3c-7,0-14,0-21.1,0c-4.1,0-8.1,0-12.2,0.1c-3.1,0-6.2,0-9.3,0.1 c-3.8,0.1-7.7,0.2-11.5,0.3c-3.9,0.1-7.9,0.1-11.8,0.2c-4,0.1-8,0.1-12,0.2c-1.6,0-3.2,0-4.8,0c-1.9-0.1-3.8-0.3-5.7-0.1 c-1.9,0.2-3.8,0-5.7,0.1c-2.1,0.1-4.2,0.1-6.3,0c-2.1,0-4.2-0.2-6.3-0.2c-3.4,0-6.8,0-10.2,0c-2.2,0-4.5-0.1-6.7-0.1 c-9.4-0.1-18.8-0.2-28.2-0.3c-1.2,0-2.3-0.2-3.3-0.3c-0.7-0.7-0.7-1.3-0.2-1.9c1.6-1.7,3.3-3.3,4.8-5c3.2-3.6,6.8-7.1,9.7-11 c-0.2-0.3-0.4-0.6-0.6-1c-2-3-4-5.9-6-8.9c-0.3-0.4-0.6-0.8-0.9-1.2c-1.9-2.5-3.8-4.9-5.7-7.4C1.1,4.5,0.6,3.6,0.2,2.7 c-0.5-0.9-0.1-2.2,2-2.4C4.8,0.2,7.3,0.1,9.8,0c7.9-0.1,15.7,0.4,23.6,0.3c4.4,0,8.7,0.3,13.1,0.3c2.9,0.1,5.7,0,8.6,0 c5.4,0,10.9,0.1,16.3,0.1c4.4,0,8.7,0,13.1-0.1c1.4,0,2.8-0.1,4.1-0.1c4.5-0.1,8.9-0.3,13.4-0.4c4.9,0,9.8,0,14.7,0.1 c1,0,1.9,0,2.9,0c1.8,0,3.6,0,5.4,0.2c2.1,0.2,4.2,0.1,6.4,0.1c4.1,0,8.3,0.1,12.4-0.2c2.2-0.1,4.5,0.2,6.7,0.2c4.4,0,8.7,0,13.1,0 c5.5,0,11.1-0.2,16.6,0.4c0.5,0.1,1.1,0,1.6,0c4.8,0.1,9.6,0.1,14.4,0.2c4.3,0.1,8.5,0.5,12.7,0.7c3.9,0.1,7.9,0.4,11.8-0.2 C222.6,1.5,224.5,1.5,226.3,1.4z"></path>
            </svg>
          </div>
        </div>

        <span
          data-aos="zoom-in"
          className="text-orange-500 text-[26px] pb-5 vazir-bold "
        >
          منوی غذایی متنوع
        </span>
        <p
          data-aos="zoom-in"
          className="text-white pb-6 px-2 text-center text-[18px] "
        >
          طبخ انواع سوخاری و ساندویچ های مختلف با کیفیت بالا باعث ایجاد تنوع
          بالای غذایی در این شعبه شده است{" "}
        </p>
        <div className="w-full h-[300px] flex-col-center text-white bg-menu"></div>

        <span
          data-aos="zoom-in"
          className="text-orange-500 text-[26px] py-5 vazir-bold "
        >
          پارکینک اختصاصی
        </span>
        <p
          data-aos="zoom-in"
          className="text-white pb-6 px-2 text-center text-[18px] "
        >
          برای رفاه حال مشتریان عزیز در این مجموعه پارکینک اختصاصی داریم تا شما
          عزیزان بدون دغدغه جای پارک از لحظات خوب خودتون لذت ببرید
        </p>
        <div className="w-full h-[300px] flex-col-center text-white bg-parking"></div>

        <span
          data-aos="zoom-in"
          className="text-orange-500 text-[26px] py-5 vazir-bold "
        >
          فضای بازی کودکان
        </span>
        <p
          data-aos="zoom-in"
          className="text-white pb-6 px-2 text-center text-[18px] "
        >
          این مجموعه با داشتن فضای بازی برای کودکان شما امکانات سرگرمی و ایجاد
          یک روز به یادموندنی رو برای کودکان شما راهم کرده است
        </p>
        <div className="w-full h-[300px] flex-col-center text-white bg-children"></div>
        <span
          data-aos="zoom-in"
          className="text-orange-500 text-[26px] py-5 vazir-bold "
        >
          محیط شیک و عالی
        </span>
        <p
          data-aos="zoom-in"
          className="text-white pb-6 px-2 text-center text-[18px] "
        >
          {" "}
          ما در فضای شیک و دلنشین مجموعه گالریا برای شما عزیزان یک روز عالی و به
          یادموندنی رو همراه با غذاهای عالی میسازیم
        </p>
        <div className="w-full h-[300px] flex-col-center text-white bg-markaz2"></div>
      </div>
      <div className=" flex-col-center relative my-5 md:my-10">
        <h3 className="drop-shadow-xl text-black absolute text-2xl text-[26px] vazir-bold">
          محصولات این شعبه
        </h3>
        <div>
          <svg
            className="w-[280px]  h-[60px] fill-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 229.1 42.6"
            preserveAspectRatio="none"
          >
            <path d="M226.3,1.4c0.7,0.6,0.9,1.1,0.5,1.8c-0.7,1.2-1.4,2.5-2.5,3.6c-1.3,1.2-2.5,2.4-3.4,3.7 c-0.4,0.6-1.1,1.2-1.7,1.7c-2.3,1.8-3.7,4-4.9,6.4c2.3,2.9,4.6,5.9,6.9,8.9c2.2,2.9,4.4,5.8,6.6,8.7c1.5,2.1,1.5,2.4,1,5 c-0.6,0.6-1.5,0.9-2.5,0.9c-1.6,0-3.2,0.1-4.8,0.1c-9.6,0.5-19.2,0.5-28.8,0.4c-2.4,0-4.9-0.2-7.3-0.3c-2.8-0.1-5.5-0.1-8.3-0.1 c-3.1-0.1-6.2-0.1-9.3-0.2c-4.1-0.1-8.3-0.3-12.4-0.3c-7,0-14,0-21.1,0c-4.1,0-8.1,0-12.2,0.1c-3.1,0-6.2,0-9.3,0.1 c-3.8,0.1-7.7,0.2-11.5,0.3c-3.9,0.1-7.9,0.1-11.8,0.2c-4,0.1-8,0.1-12,0.2c-1.6,0-3.2,0-4.8,0c-1.9-0.1-3.8-0.3-5.7-0.1 c-1.9,0.2-3.8,0-5.7,0.1c-2.1,0.1-4.2,0.1-6.3,0c-2.1,0-4.2-0.2-6.3-0.2c-3.4,0-6.8,0-10.2,0c-2.2,0-4.5-0.1-6.7-0.1 c-9.4-0.1-18.8-0.2-28.2-0.3c-1.2,0-2.3-0.2-3.3-0.3c-0.7-0.7-0.7-1.3-0.2-1.9c1.6-1.7,3.3-3.3,4.8-5c3.2-3.6,6.8-7.1,9.7-11 c-0.2-0.3-0.4-0.6-0.6-1c-2-3-4-5.9-6-8.9c-0.3-0.4-0.6-0.8-0.9-1.2c-1.9-2.5-3.8-4.9-5.7-7.4C1.1,4.5,0.6,3.6,0.2,2.7 c-0.5-0.9-0.1-2.2,2-2.4C4.8,0.2,7.3,0.1,9.8,0c7.9-0.1,15.7,0.4,23.6,0.3c4.4,0,8.7,0.3,13.1,0.3c2.9,0.1,5.7,0,8.6,0 c5.4,0,10.9,0.1,16.3,0.1c4.4,0,8.7,0,13.1-0.1c1.4,0,2.8-0.1,4.1-0.1c4.5-0.1,8.9-0.3,13.4-0.4c4.9,0,9.8,0,14.7,0.1 c1,0,1.9,0,2.9,0c1.8,0,3.6,0,5.4,0.2c2.1,0.2,4.2,0.1,6.4,0.1c4.1,0,8.3,0.1,12.4-0.2c2.2-0.1,4.5,0.2,6.7,0.2c4.4,0,8.7,0,13.1,0 c5.5,0,11.1-0.2,16.6,0.4c0.5,0.1,1.1,0,1.6,0c4.8,0.1,9.6,0.1,14.4,0.2c4.3,0.1,8.5,0.5,12.7,0.7c3.9,0.1,7.9,0.4,11.8-0.2 C222.6,1.5,224.5,1.5,226.3,1.4z"></path>
          </svg>
        </div>
      </div>
      <MenuHome status={"hidden"} />
      <div className=" flex-col-center relative pt-5 md:pt-8">
        <h3 className="drop-shadow-xl text-black absolute text-2xl text-[26px] vazir-bold">
          نظر مشتریان
        </h3>
        <div>
          <svg
            className="w-[200px] h-[60px] fill-orange-500"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 229.1 42.6"
            preserveAspectRatio="none"
          >
            <path d="M226.3,1.4c0.7,0.6,0.9,1.1,0.5,1.8c-0.7,1.2-1.4,2.5-2.5,3.6c-1.3,1.2-2.5,2.4-3.4,3.7 c-0.4,0.6-1.1,1.2-1.7,1.7c-2.3,1.8-3.7,4-4.9,6.4c2.3,2.9,4.6,5.9,6.9,8.9c2.2,2.9,4.4,5.8,6.6,8.7c1.5,2.1,1.5,2.4,1,5 c-0.6,0.6-1.5,0.9-2.5,0.9c-1.6,0-3.2,0.1-4.8,0.1c-9.6,0.5-19.2,0.5-28.8,0.4c-2.4,0-4.9-0.2-7.3-0.3c-2.8-0.1-5.5-0.1-8.3-0.1 c-3.1-0.1-6.2-0.1-9.3-0.2c-4.1-0.1-8.3-0.3-12.4-0.3c-7,0-14,0-21.1,0c-4.1,0-8.1,0-12.2,0.1c-3.1,0-6.2,0-9.3,0.1 c-3.8,0.1-7.7,0.2-11.5,0.3c-3.9,0.1-7.9,0.1-11.8,0.2c-4,0.1-8,0.1-12,0.2c-1.6,0-3.2,0-4.8,0c-1.9-0.1-3.8-0.3-5.7-0.1 c-1.9,0.2-3.8,0-5.7,0.1c-2.1,0.1-4.2,0.1-6.3,0c-2.1,0-4.2-0.2-6.3-0.2c-3.4,0-6.8,0-10.2,0c-2.2,0-4.5-0.1-6.7-0.1 c-9.4-0.1-18.8-0.2-28.2-0.3c-1.2,0-2.3-0.2-3.3-0.3c-0.7-0.7-0.7-1.3-0.2-1.9c1.6-1.7,3.3-3.3,4.8-5c3.2-3.6,6.8-7.1,9.7-11 c-0.2-0.3-0.4-0.6-0.6-1c-2-3-4-5.9-6-8.9c-0.3-0.4-0.6-0.8-0.9-1.2c-1.9-2.5-3.8-4.9-5.7-7.4C1.1,4.5,0.6,3.6,0.2,2.7 c-0.5-0.9-0.1-2.2,2-2.4C4.8,0.2,7.3,0.1,9.8,0c7.9-0.1,15.7,0.4,23.6,0.3c4.4,0,8.7,0.3,13.1,0.3c2.9,0.1,5.7,0,8.6,0 c5.4,0,10.9,0.1,16.3,0.1c4.4,0,8.7,0,13.1-0.1c1.4,0,2.8-0.1,4.1-0.1c4.5-0.1,8.9-0.3,13.4-0.4c4.9,0,9.8,0,14.7,0.1 c1,0,1.9,0,2.9,0c1.8,0,3.6,0,5.4,0.2c2.1,0.2,4.2,0.1,6.4,0.1c4.1,0,8.3,0.1,12.4-0.2c2.2-0.1,4.5,0.2,6.7,0.2c4.4,0,8.7,0,13.1,0 c5.5,0,11.1-0.2,16.6,0.4c0.5,0.1,1.1,0,1.6,0c4.8,0.1,9.6,0.1,14.4,0.2c4.3,0.1,8.5,0.5,12.7,0.7c3.9,0.1,7.9,0.4,11.8-0.2 C222.6,1.5,224.5,1.5,226.3,1.4z"></path>
          </svg>
        </div>
      </div>

      <div className="allcoment">
        <div className="container flex-col-center ">
          <div
            className={`container w-10/12 md:w-1/2 border-4 border-orange-500 text-white rounded-[20px] bg2 my-10`}
          >
            <form
              onSubmit={handleSubmit(registerHandler)}
              className=" flex-col-center  px-2"
            >
              <h5 className="text-2xl vazir-bold py-5">ثبت نظر جدید</h5>

              <label
                className="text-[16px] w-full text-end mr-7 vazir my-2"
                htmlFor="#text"
              >
                : نظر خودرا وارد کنید
              </label>
              <textarea
                {...register("text", {
                  required: "لطفا متن پیام خودرا وارد کنید",
                  minLength: {
                    value: 20,
                    message: "حداقل طول پیام باید 20 کاراکتر باشد",
                  },
                  maxLength: {
                    value: 200,
                    message: "حداکثر طول پیام باید 200 کاراکتر باشد",
                  },
                })}
                id="text"
                className="rounded-[15px] text-black w-[95%] h-[120px]  md:h-[150px]  border-4 border-orange-500 focus:outline-none text-xl vazir py-3 px-5"
                cols="46"
                rows="5"
              ></textarea>
              <div className="error mt-3 text-lg">
                {errors.text && errors.text.message}
              </div>
              <button
                className="text-[18px] py-2 hover:bg-white hover:text-black  border-4 border-orange-500 cursor-pointer vazir-bold rounded-[15px] p-5 sm:px-7 mx-2 mb-4"
                type="submit"
              >
                ارسال
              </button>
            </form>
          </div>
          <div className="  w-5/6 p-5 flex flex-col items-end justify-center my-5 md:my-5  border-2 border-orange-500 bg2 rounded-[20px] ">
            <div className="flex-row-center mb-5 ">
              <div className=" flex flex-col items-end mr-2 ">
                <span className="text-white text-[16px] md:text-[18px] vazir-bold">
                  امیرحسین سعیدی
                </span>
                <span className="text-gray-300 text-[14px] vazir">مشتری</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full text-center md:text-end md:pr-5 text-[14px] vazir-bold py-5 px-2 text-black bg-white  mb-3 rounded-[10px]  border-2 border-orange-500">
              <p>کیفیت و حجم غذا خوب بود و محیط دلنشینی داشت ممنون از شما </p>
            </div>
          </div>
          <div className="  w-5/6 p-5 flex flex-col items-end justify-center my-5 md:my-5 border-2 border-orange-500 bg2 rounded-[20px] ">
            <div className="flex-row-center mb-5 ">
              <div className=" flex flex-col items-end mr-2 ">
                <span className="text-white text-[16px] md:text-[18px] vazir-bold">
                  فاطمه اسدی
                </span>
                <span className="text-gray-300 text-[14px] vazir">مشتری</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full text-center md:text-end md:pr-5 text-[14px] vazir-bold py-5 px-2 text-black bg-white  mb-3 rounded-[10px] border-2 border-orange-500">
              <p>
                تنها ایرادی که داره شلوغ بودن مکانش هست که خیلی ادم رو کافه
                میکنه ولی تنوع اجناس داخل مغازه خیی بود یک مورد دیگه اینکه تنوع
                نوشیدنی ها کم بود ولی بقیه موارد عالی بودن خسته نباشید{" "}
              </p>
            </div>
          </div>
          <div className="  w-5/6 p-5 flex flex-col items-end justify-center my-5 md:my-5 border-2 border-orange-500 bg2 rounded-[20px] ">
            <div className="flex-row-center mb-5 ">
              <div className=" flex flex-col items-end mr-2 ">
                <span className="text-white text-[16px] md:text-[18px] vazir-bold">
                  علی پیریایی
                </span>
                <span className="text-gray-300 text-[14px] vazir">مشتری</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full text-center md:text-end md:pr-5 text-[14px] vazir-bold py-5 px-2 text-black bg-white  mb-3 rounded-[10px] border-2 border-orange-500">
              <p>سوخاری هاش عالیه مخصوصا فیله سوخاری</p>
            </div>
          </div>
          <div className="  w-5/6 p-5 flex flex-col items-end justify-center my-5 md:my-5 border-2 border-orange-500 bg2 rounded-[20px] ">
            <div className="flex-row-center mb-5 ">
              <div className=" flex flex-col items-end mr-2 ">
                <span className="text-white text-[16px] md:text-[18px] vazir-bold">
                  نیما گودرزی
                </span>
                <span className="text-gray-300 text-[14px] vazir">مشتری</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10  text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full text-center md:text-end md:pr-5 text-[14px] vazir-bold py-5 px-2 text-black bg-white mb-3 rounded-[10px] border-2 border-orange-500">
              <p>
                با داداشم اومدم خلی خوب بود مخصوصا ساندویچ هاش عالی بودن فقط
                تنوع نوشیدنی خیلی کم بود
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
