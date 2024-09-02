import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import RegisterContext from '../context/register';

export default function Signup() {
  const context = useContext(RegisterContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function registerHandler(data) {
    const inputData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      cart: [],
    };
    fetch("https://chickchick-server.liara.run/users")
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
            fetch("https://chickchick-server.liara.run/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(inputData),
            })
              .then((res) => res.json())
              .then((datas) => {
                context.login(datas);
              });
            toast.success("ثبت نام با موفقیت انجام شد", {
              position: "top-center",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            context.login(inputData);
            context.statusLogin(true);
          } else {
            toast.error("این کاربر قبلا ثبت نام کرده است", {
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
          toast.error("رمز عبور و تکرار آن برابر نیست ", {
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
        <div className="bgCompany pb-20 pt-36">
          <div className="flex w-full flex-col items-center">
            <form
              onSubmit={handleSubmit(registerHandler)}
              className="flex-col-center bg2 text-md w-11/12 rounded-[20px] border-2 border-orange-500 md:w-7/12 md:text-xl lg:w-5/12"
            >
              <span className="vazir-bold mt-5 text-[26px] text-orange-500 md:text-[28px]">
                ثبت نام
              </span>
              <label
                className="vazir-bold mb-3 mr-14 mt-3 w-full text-right text-[16px] text-white md:mr-28"
                htmlFor="#username"
              >
                :نام کاربری
              </label>
              <input
                className="mb-3 h-12 w-[85%] rounded-[10px] border-4 border-orange-500 px-4 text-xl focus:outline-0"
                id="username"
                type="text"
                {...register("name", {
                  required: "وارد کردن نام اجباریست",
                })}
              />
              <div className="error">
                {errors.email && errors.email.message}
              </div>
              <label
                className="vazir-bold mb-3 mr-14 w-full text-right text-[16px] text-white md:mr-28"
                htmlFor="#username"
              >
                : ایمیل
              </label>
              <input
                className="mb-3 h-12 w-[85%] rounded-[10px] border-4 border-orange-500 px-4 text-xl focus:outline-0"
                id="username"
                type="email"
                {...register("email", {
                  required: "وارد کردن ایمیل اجباریست",
                })}
              />
              <div className="error">
                {errors.email && errors.email.message}
              </div>
              <label
                className="vazir-bold mb-3 mr-14 w-full text-right text-[16px] text-white md:mr-28"
                htmlFor="#number"
              >
                : شماره تماس
              </label>
              <input
                className="mb-3 h-12 w-[85%] rounded-[10px] border-4 border-orange-500 px-4 text-xl focus:outline-0"
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
              <div className="error">
                {errors.phone && errors.phone.message}
              </div>
              <label
                className="vazir-bold mb-3 mr-14 w-full text-right text-[16px] text-white md:mr-28"
                htmlFor="#password"
              >
                : کلمه عبور
              </label>
              <input
                className="mb-3 h-12 w-[85%] rounded-[10px] border-4 border-orange-500 px-4 text-xl focus:outline-0"
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
              <div className="error">
                {errors.password && errors.password.message}
              </div>
              <label
                className="vazir-bold mb-3 mr-14 w-full text-right text-[16px] text-white md:mr-28"
                htmlFor="#password2"
              >
                : تکرار کلمه عبور
              </label>
              <input
                className="mb-3 h-12 w-[85%] rounded-[10px] border-4 border-orange-500 px-4 text-xl focus:outline-0"
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
                className="vazir-bold mb-3 cursor-pointer rounded-[10px] border-4 border-orange-500 bg-white px-5 py-2 text-[18px]"
                type="submit"
                value={"ثبت نام"}
              />
              <div className="vazir-bold mb-3 w-full py-5 text-right text-xl text-white">
                <div className="flex-row-center text-center text-[16px] md:text-[18px]">
                  <Link to="/Login" className="cursor-pointer text-orange-500">
                    وارد شوید
                  </Link>
                  <span className="ml-3">حساب کاربری دارید ؟</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>{history.back()}</>
      )}
    </>
  );
}
