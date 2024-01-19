import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import RegisterContext from "../context/register";
import { useContext } from "react";

import { toast } from "react-toastify";

export default function Signup() {

  const context = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function registerHandler(data) {
    const inputData = {
      name:data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
    };
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((alluser) => {
        let isin = alluser.some((users) => {
          return (
            users.email == data.email &&
            users.phone == data.phone &&
            users.password == data.password
          );
        });
          if (data.password == data.repeatPassword) {
          if (!isin) {
             fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(inputData),
            })
              .then((res) => res.json())
              .then((datas) => {              
              context.login(datas)
              });
              toast.success('ثبت نام با موفقیت انجام شد', {
                position: "top-center",
                 autoClose: 1500,
                 hideProgressBar: false,
                 closeOnClick: true,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "colored",
                 });

          } else {
            toast.error('این کاربر قبلا ثبت نام کرده است', {
              position: "top-center",
               autoClose: 1500,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined,
               theme: "colored",
               });
          }
        } else {
          toast.error('رمز عبور و تکرار آن برابر نیست ', {
            position: "top-center",
             autoClose: 1500,
             hideProgressBar: false,
             closeOnClick: true,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "colored",
             });
        }
      });
  }

  return (
    <>
      {!context.isLoggin ? (
        <div className=" bgCompany pt-36 pb-20 ">
          <div className=" w-full flex flex-col items-center  ">
            <form
              onSubmit={handleSubmit(registerHandler)}
              className="w-11/12  md:w-7/12 lg:w-5/12 flex-col-center border-2 bg2 border-orange-500 rounded-[20px] md:text-xl text-md"
            >
              <span className="text-orange-500 vazir-bold text-[26px] md:text-[28px] mt-5">
                ثبت نام
              </span>
              <label
                className=" w-full text-right mr-14 md:mr-28 text-white text-[16px] vazir-bold mb-3 mt-3"
                htmlFor="#username"
              >
                :نام کاربری
              </label>
              <input
                className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
                id="username"
                type="text"
                {...register("name", {
                  required: "وارد کردن نام اجباریست",
                })}
              />
              <div className="error ">
                {errors.email && errors.email.message}
              </div>
              <label
                className=" w-full text-right mr-14 md:mr-28 text-white text-[16px]  vazir-bold mb-3 "
                htmlFor="#username"
              >
                : ایمیل
              </label>
              <input
                className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
                id="username"
                type="email"
                {...register("email", {
                  required: "وارد کردن ایمیل اجباریست",
                })}
              />
              <div className="error ">
                {errors.email && errors.email.message}
              </div>
              <label
                className=" w-full text-right mr-14 md:mr-28  text-white text-[16px]  vazir-bold mb-3"
                htmlFor="#number"
              >
                : شماره تماس
              </label>
              <input
                className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl"
                id="number"
                type="text"
                {...register("phone", {
                  required: "لطفا شماره تماس خودرا وارد کنید",
                  minLength: {
                    value: 11,
                    message: "شماره وارد شده نادرست است",
                  },
                  maxLength: {
                    value: 12,
                    message: "شماره وارد شده نادرست است",
                  },
                })}
              />
              <div className="error ">
                {errors.phone && errors.phone.message}
              </div>
              <label
                className=" w-full text-right mr-14 md:mr-28  text-white text-[16px]  vazir-bold mb-3"
                htmlFor="#password"
              >
                : کلمه عبور
              </label>
              <input
                className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl"
                id="password"
                type="password"
                {...register("password", {
                  required: "لطفا رمز خودرا وارد کنید",
                  minLength: {
                    value: 8,
                    message: "حداقل طول کلمه عبور باید 8 کاراکتر باشد",
                  },
                })}
              />
              <div className="error ">
                {errors.password && errors.password.message}
              </div>
              <label
                className=" w-full text-right mr-14 md:mr-28  text-white text-[16px]  vazir-bold mb-3"
                htmlFor="#password2"
              >
                : تکرار کلمه عبور
              </label>
              <input
                className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl"
                id="password2"
                type="password"
                {...register("repeatPassword", {
                  required: "لطفا رمز خودرا تکرار کنید",
                  minLength: {
                    value: 8,
                    message: "حداقل طول کلمه عبور باید 8 کاراکتر باشد",
                  },
                })}
              />
              <div className="error pb-3">
                {errors.repeatPassword && errors.repeatPassword.message}
              </div>
              <input
                className="py-2 px-5 mb-3 bg-white rounded-[10px]  text-[18px] vazir-bold cursor-pointer border-4 border-orange-500"
                type="submit"
                value={"ثبت نام"}
              />
              <div className="w-full text-right py-5 text-white text-xl vazir-bold mb-3 ">
                <div className="flex-row-center text-[16px] md:text-[18px] text-center">
                  <Link to="/Login" className="text-orange-500 cursor-pointer ">
                    وارد شوید
                  </Link>
                  <span className="ml-3 ">حساب کاربری دارید ؟</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
        {history.back()}
        </>
      )}
    </>
  );
}
