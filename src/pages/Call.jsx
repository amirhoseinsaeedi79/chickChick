import { useForm } from "react-hook-form";
import TitleHeader from "../components/TitleHeader";
import { toast } from "react-toastify";

export default function Call() {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  const registerHandler = async () => {
    const alldata = getValues();
    fetch("https://chickchick-server.liara.run/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(alldata),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
    toast.success('پیام شما ثبت شد', {
      position: "top-center",
       autoClose: 1000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "colored",
       });
  };

  return (
    <div className="bgcall pb-8 ">
      <TitleHeader title={"تماس باما"} />
      <div className="container flex flex-col-reverse items-center lg:flex-call px-5 md:px-10 pb-14 mt-16 lg:mt-10">
        <form
          data-aos="fade-right"
          data-aos-duration="1000"
          onSubmit={handleSubmit(registerHandler)}
          className="flex-col-center md:flex md:flex-col md:items-end  md:px-10 border-4 border-orange-500 text-white rounded-[30px] md:rounded-[30px] bg2 mt-10"
        >
          <h5
            className="text-[24px] w-full text-center vazir-bold
            py-5"
          >
            ارسال پیام
          </h5>
          <label className="w-[90%] text-end  text-lg mr-1 vazir my-2	" htmlFor="#name">
            : نام
          </label>
          <input
            {...register("name", {
              required: "لطفا نام خودرا وارد کنید",
              minLength: {
                value: 5,
                message: "حداقل طول نام باید 5 کاراکتر باشد",
              },
              maxLength: {
                value: 20,
                message: "حداکثر طول نام باید 20 کاراکتر باشد",
              },
            })}
            id="name"
            className="w-[90%] text-black md:w-[400px] border-4 border-orange-500 text-[18px]  focus:outline-none px-5 vazir h-12 rounded-2xl "
            type="text"
          />
          <div className="error mt-3 text-lg">
            {errors.name && errors.name.message}
          </div>

          <label className="w-[90%] text-end  text-lg mr-1 vazir my-2" htmlFor="#number">
            : شماره تماس{" "}
          </label>
          <input
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
            id="number"
            className="w-[90%] text-black md:w-[400px] border-4 border-orange-500 focus:outline-none px-5 vazir h-12 rounded-2xl "
            type="text"
          />
          <div className="error mt-3 text-lg">
            {errors.phone && errors.phone.message}
          </div>
          <label className="w-[90%] text-end  text-lg  mr-1 vazir my-2" htmlFor="#text">
            : پیام
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
            className="rounded-2xl text-black w-[90%] h-[120px] md:w-[400px] md:h-[150px]  border-4 border-orange-500 focus:outline-none px-4 py-2"
            cols="46"
            rows="5"
          ></textarea>
          <div className="error mt-3 text-lg">
            {errors.text && errors.text.message}
          </div>
          <button className="text-xl md:mr-32  py-2 hover:bg-white hover:text-black  border-4 border-orange-500 cursor-pointer vazir-bold rounded-[15px] p-10  mb-5">
            ارسال
          </button>
        </form>

        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col items-end   md:flex md:flex-row-reverse md:items-center lg:flex lg:flex-col lg:items-end"
        >
          <h5 className="text-orange-500  md:ml-5  text-[24px] lg:text-4xl vazir-bold mb-5">
            ... باما در تماس باشید
          </h5>
          <div className="flex flex-col items-end">
            <div className=" flex-row-center my-5 ">
              <span className="text-[18px] md:text-2xl text-white mr-2 md:mr-5 ">
                chickchick@gmail.com
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div className=" flex-row-center mb-5 ">
              <span className="text-[18px] md:text-2xl text-white mr-2 md:mr-5">
                021-3212332 / 09123456789{" "}
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
            <div className=" flex-row-center mb-5 ">
              <div className="flex flex-col items-end">
                <span className="text-[16px] md:text-2xl text-white mr-2 md:mr-5 ">
                  شعبه اول : آجودانیه مجتمع عرش
                </span>
                <span className="text-[18px] md:text-2xl text-white mr-2 md:mr-5 ">
                  شعبه دوم : ولنجک مجتمع گالریا
                </span>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
