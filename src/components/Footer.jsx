export default function Footer() {
  return (
    <>
      <footer className=" bgfooter bg-cover bg-fixed pt-5 md:pt-8 pb-6  border-t-4 border-orange-500">
        <div className="container flex-row-center  flex-wrap lg:flex-nowrap">
          <div className="w-[500px] flex-col-center lg:relative lg:right-14 xl:relative xl:right-36">
            <div className="flex-row-center">
              <h4 className="lg:text-4xl md:text-[36px]  vazir-bold m-3 text-white">
                سوخاری چیک چیک
              </h4>
              <img
                className="w-14 h-14 rounded-full"
                src="/src/asset/images/logo.png"
                alt="logo"
              />
            </div>
            <h5 className="text-lg  mt-3 text-white">
              مارا در شبکه های مجازی دنبال کنید
            </h5>
            <div className=" mt-2 md:my-6 flex-row-center">
              <img
                className="w-16 h-14 cursor-pointer mx-3"
                src="/src/asset/images/Telegram.svg"
                alt=""
              />

              <img
                className="w-16 h-14 cursor-pointer mx-3"
                src="/src/asset/images/Instagram.svg"
                alt=""
              />

              <img
                className="w-16 h-14 cursor-pointer mx-3"
                src="/src/asset/images/WhatsApp.svg"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col items-end xl:relative xl:left-20">
            <div className="flex-row-center mb-3">
              <p className="text-white text-[13px]  md:text-[18px]">
                شعبه اول : تهران نیاوران مجتمع عرش آجودانیه{" "}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white ml-1"
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
            <div className="flex-row-center mb-3">
            <p className="text-white text-[13px]  md:text-[18px]">
                شعبه دوم : تهران ولنجک مجتمع گالریا{" "}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white ml-1"
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
            <div className="flex-row-center mb-3">
            <p className="text-white text-[13px]  md:text-[18px]">
                ساعات کاری : همه روزه از ساعت 10 صبح تا 10 شب
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-row-center">
              <p className="text-white text-[15px] md:text-xl lg:text-[20px]">
                شماره تماس : 09123456789
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full h-10 bg-neutral-950 flex-row-center">
        <span className="text-gray-400 text-md vazir">
          \\ Developer : Amirhosein Saeedi //
        </span>
      </div>
    </>
  );
}
