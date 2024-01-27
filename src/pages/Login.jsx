import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import RegisterContext from "../context/register";
import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const context = useContext(RegisterContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function loginHandler(data) {
    fetch("https://chickchick-server.liara.run/users")
      .then((res) => res.json())
      .then((alldatas) => {
        let newtest = alldatas.find(function (users) {
          return users.email == data.email && users.password == data.password;
        });
        if (newtest == undefined) {
          toast.error("رمز عبور یا نام کاربری اشتباه است", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success("با موفقیت وارد شدید", {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          reset();
          context.login(newtest);
          context.statusLogin(true);
        }
      });
  }
  return (
    <>
      {!context.isLoggin ? (
        <div className=" w-full flex flex-col items-center bgCompany pt-36 pb-20">
          <form
            onSubmit={handleSubmit(loginHandler)}
            className="w-11/12  md:w-7/12 lg:w-5/12 flex-col-center border-2 bg2 border-orange-500 rounded-[20px] md:text-xl text-md"
          >
            <span className="text-orange-500 vazir-bold text-[26px] md:text-[28px] mt-5">
              ورود به حساب
            </span>
            <label
              className=" w-full text-right mr-14 md:mr-28 text-white text-[16px] vazir-bold mb-3 mt-8"
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
            <div className="error mb-10">
              {errors.email && errors.email.message}
            </div>
            <label
              className=" w-full text-right mr-14 md:mr-28 text-white text-[16px] vazir-bold mb-3"
              htmlFor="#username"
            >
              : شماره تماس
            </label>
            <input
              className="w-[85%] h-12 rounded-[10px] mb-3 border-4 border-orange-500 focus:outline-0 px-4 text-xl "
              id="username"
              type="phone"
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
            <div className="error mb-10">
              {errors.phone && errors.phone.message}
            </div>
            <label
              className=" w-full text-right mr-14 md:mr-28  text-white text-[16px] vazir-bold mb-3"
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
            <div className="error pb-3">
              {errors.password && errors.password.message}
            </div>
            <input
              className="py-2 px-6  bg-white rounded-[10px]  vazir-bold cursor-pointer border-4 border-orange-500"
              type="submit"
              value={"ورود"}
            />
            <div className="w-full text-right py-5 text-white text-xl vazir-bold ">
              <div className="flex-col-center text-[16px] md:text-[18px] text-center">
                <div className="flex-row-center">
                  <Link
                    to="/Signup"
                    className="text-orange-500 cursor-pointer "
                  >
                    ثبت نام کنید
                  </Link>
                  <span className="ml-3 ">حساب کاربری ندارید ؟</span>
                </div>
                <div className="mt-3 text-orange-500">
                  <Link to="/Forgoat" className="cursor-pointer">
                    فراموشی رمز عبور
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <>
        {history.back()}
        </>
      )}
    </>
  );
}
