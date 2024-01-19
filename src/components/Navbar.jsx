import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import RegisterContext from "../context/register";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function Navbar() {
  const [menu, setMenu] = useState("hidden");
  const [status, setStatus] = useState(false);
  const [mouseUser, setMouseuser] = useState("hidden");
  const [loginmenu, setLoginmenu] = useState("hidden");
  const context = useContext(RegisterContext);
  const { pathname: location } = useLocation();



  useEffect(() => {
    setLoginmenu("hidden");
  }, [location]);

  function hoverUserIn() {
    setLoginmenu("flex");
  }
  function hoverUserOut() {
    setLoginmenu("hidden");
  }

  // ===========================================================  open/close hamburgerMenu
  function menuHandler() {
    if (status === false) {
      setMenu("flex");
      setStatus(true);
    } else {
      setMenu("hidden");
      setStatus(false);
    }
  }
  // ===========================================================  open/close item user
  function userHandler() {
    if (mouseUser === "hidden") {
      setMouseuser("flex");
    } else {
      setMouseuser("hidden");
    }
  }
  function upHandler() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <nav className="w-full fixed top-0 pb-1 md:pb-0 z-50 bg-[url(./asset/images/body.jpg)] ">
        <div className=" lg:container  flex flex-row justify-between  ">
          {/* ================================================================================= icon navbar-left */}
          {context.isLoggin ? (
            <div className="flex flex-row justify-between lg:pt-2 relative">
              <Link onMouseOver={hoverUserIn} onMouseOut={hoverUserOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-8 h-12 lg:w-9 h-19 ml-[15px] lg:ml-[30px] hover:!text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
              <Link to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" cursor-pointer w-8 h-12 lg:w-9 h-19 ml-[15px] lg:ml-[30px] hover:!text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
            
              </Link>
              {/* ================================================basket */}
              <div
              onMouseOver={hoverUserIn} onMouseOut={hoverUserOut}
                className={`bg-[url(./asset/images/body.jpg)] z-10  ${loginmenu}  flex-col items-end fixed top-[70px] left-[10px] p-2 rounded-xl border-2 border-orange-500`}
              >
                <div className="flex-row-center pb-2">
                  <span className="text-lg vazir-bold ">
                    {context.username()}
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="w-full h-[3px] bg-orange-500" />

                <div className="flex-row-center mt-3 hover:text-orange-500 cursor-pointer">
                  <Link to="/cart" className="text-lg vazir-bold ">
                    سبد خرید شما
                  </Link>
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  onClick={function logout() {
                    context.logout();
                    toast.error("از حساب خود خارج شدید", {
                      position: "top-center",
                      autoClose: 1500,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });

                    <Navigate to="/" />;
                  }}
                  className="flex-row-center mt-2 mb-1 hover:text-orange-500 cursor-pointer"
                >
                  <span className="text-lg vazir-bold  ">خروج از حساب</span>
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-between lg:pt-2 relative">
              <Link to="/Login">
                <svg
                  onClick={userHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="cursor-pointer w-8 h-12 mt-[5px] lg:w-9 h-19 ml-[15px] lg:ml-[30px] hover:!text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
              <Link to="/Login">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className=" cursor-pointer w-8 h-12 mt-[5px] lg:w-9 h-19 ml-[15px] lg:ml-[30px] hover:!text-orange-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </Link>
            </div>
          )}

          {/* =================================================================================  navbar-center */}
          <div className=" hidden lg:flex-row-center relative ">
            <Link
              onClick={upHandler}
              to="/pish"
              className=" lg:text-[20px] text-black vazir-bold mx-7 my-5 hover:text-orange-300"
            >
              منو
            </Link>
            <Link
              onClick={upHandler}
              to="/gallery"
              className=" lg:text-[20px] vazir-bold mx-7 my-5 text-black hover:text-orange-500 "
            >
              گالری
            </Link>
            <Link
              onClick={upHandler}
              to="/Branches"
              className="lg:text-[20px] vazir-bold mx-7 my-5 text-black hover:text-orange-500"
            >
              شعبه ها
            </Link>
            <Link
              onClick={upHandler}
              to="/Call"
              className=" lg:text-[20px] vazir-bold mx-7 my-5 text-black  hover:text-orange-500"
            >
              تماس با ما
            </Link>
            <Link
              onClick={upHandler}
              to="/About"
              className=" lg:text-[20px] vazir-bold mx-7 my-5 text-black  hover:text-orange-500"
            >
              درباره ما
            </Link>
            <Link
              onClick={upHandler}
              to="/"
              className=" lg:text-[20px] vazir-bold mx-7 my-5 text-black  hover:text-orange-500"
            >
              خانه
            </Link>
          </div>
          {/* =================================================================================  navbarLogo */}
          <div className=" lg:hidden ">
            <img
              className=" cursor-pointer w-[52px] h-[52px] mt-[2px] mr-8 rounded-full"
              src="/src/asset/images/logo.png"
              alt="logo"
            />
          </div>
          <div className=" cursor-pointer hidden  lg:flex flex-row justify-between">
            <img
              className="lg:w-[75px] h-[75px] mr-8 rounded-full"
              src="/src/asset/images/logo.png"
              alt="logo"
            />
          </div>
          {/* ================================================================================= icon menu in navbar */}
          <div
            onClick={menuHandler}
            className="flex flex-row justify-between lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-8 h-12 mr-4 cursor-pointer mt-[5px] hover:!text-orange-500 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* ================================================================================= hamburgerMenu */}
          <div
            className={`${menu} flex-col bgcall  w-[50vh] min-h-screen fixed top-0 right-0 z-10 border-2 border-orange-500  `}
          >
            <div className="flex-col-center pt-3  relative">
              <img
                className=" w-[60px] h-[60px] rounded-full "
                src="/src/asset/images/logo.png"
                alt=""
              />
              <div
                onClick={menuHandler}
                className="absolute bottom-[15px] right-[240px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-9 h-16 text-white  hover:!text-orange-400 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
            {/* ================================================================================= hamburgerMenu Items */}
            <div className="w-full flex flex-col items-end  px-3 mx-auto mt-7">
              <div className="h-20 relative ">
                <Link
                  onClick={menuHandler}
                  to={"/"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white "
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-1">خانه</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="w-full h-12 fill-orange-400 "
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

              <div className="h-20 relative ">
                <Link
                  onClick={menuHandler}
                  to={"/pish"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white"
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-2">منو</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="z-[-2] ">
                  <svg
                    className="w-full h-12 fill-orange-400"
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

              <div className="h-20 relative  ">
                <Link
                  onClick={menuHandler}
                  to={"/Gallery"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white "
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-2">گالری</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2] ">
                  <svg
                    className="w-full h-12 fill-orange-400"
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

              <div className="h-20 relative ">
                <Link
                  onClick={menuHandler}
                  to={"/Branches"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white"
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-1">
                    شعبه ها
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2] ">
                  <svg
                    className="w-full h-12 fill-orange-400"
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

              <div className="h-20 relative">
                <Link
                  onClick={menuHandler}
                  to={"/Call"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white "
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-2">
                    تماس باما
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                    693
                  </svg>
                </Link>
                <div className="z-[-2] ">
                  <svg
                    className="w-full h-12 fill-orange-400"
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

              <div className="h-20 relative ">
                <Link
                  onClick={menuHandler}
                  to={"/About"}
                  className="w-full flex flex-row items-center justify-end pr-9 absolute text-black hover:text-white "
                >
                  <div className=" text-[20px] font-vazir mr-3 mb-2">
                    درباره ما
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-14 relative bottom-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2] ">
                  <svg
                    className="w-full h-12 fill-orange-400"
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
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
