import {
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import RegisterContext from '../context/register';

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
      <nav className="fixed top-0 z-50 w-full bg-[url(./asset/images/body.jpg)] pb-1 md:pb-0">
        <div className="flex flex-row justify-between lg:container">
          {/* ================================================================================= icon navbar-left */}
          {context.isLoggin ? (
            <div className="relative flex flex-row justify-between lg:pt-2">
              <Link onMouseOver={hoverUserIn} onMouseOut={hoverUserOut}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-19 ml-[15px] h-12 w-8 cursor-pointer hover:!text-orange-500 lg:ml-[30px] lg:w-9"
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
                  className="h-19 ml-[15px] h-12 w-8 cursor-pointer hover:!text-orange-500 lg:ml-[30px] lg:w-9"
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
                  <span className="vazir-bold text-lg">
                    {context.username()}
                  </span>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="ml-1 h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <hr className="h-[3px] w-full bg-orange-500" />

                <div className="flex-row-center mt-3 cursor-pointer hover:text-orange-500">
                  <Link to="/cart" className="vazir-bold text-lg">
                    سبد خرید شما
                  </Link>
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8"
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
                  className="flex-row-center mb-1 mt-2 cursor-pointer hover:text-orange-500"
                >
                  <span className="vazir-bold text-lg">خروج از حساب</span>
                  <div className="ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-8 w-8"
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
            <div className="relative flex flex-row justify-between lg:pt-2">
              <Link to="/Login">
                <svg
                  onClick={userHandler}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-19 ml-[15px] mt-[5px] h-12 w-8 cursor-pointer hover:!text-orange-500 lg:ml-[30px] lg:w-9"
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
                  className="h-19 ml-[15px] mt-[5px] h-12 w-8 cursor-pointer hover:!text-orange-500 lg:ml-[30px] lg:w-9"
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
          <div className="lg:flex-row-center relative hidden">
            <Link
              onClick={upHandler}
              to="/pish"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-300 lg:text-[20px]"
            >
              منو
            </Link>
            <Link
              onClick={upHandler}
              to="/gallery"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-500 lg:text-[20px]"
            >
              گالری
            </Link>
            <Link
              onClick={upHandler}
              to="/Branches"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-500 lg:text-[20px]"
            >
              شعبه ها
            </Link>
            <Link
              onClick={upHandler}
              to="/Call"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-500 lg:text-[20px]"
            >
              تماس با ما
            </Link>
            <Link
              onClick={upHandler}
              to="/About"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-500 lg:text-[20px]"
            >
              درباره ما
            </Link>
            <Link
              onClick={upHandler}
              to="/"
              className="vazir-bold mx-7 my-5 text-black hover:text-orange-500 lg:text-[20px]"
            >
              خانه
            </Link>
          </div>
          {/* =================================================================================  navbarLogo */}
          <Link to="/" className="lg:hidden">
            <img
              className="mr-8 mt-[2px] h-[52px] w-[52px] cursor-pointer rounded-full"
              src="images/logo.png"
              alt="logo"
            />
          </Link>
          <Link to="/" className="hidden cursor-pointer flex-row justify-between lg:flex">
            <img
              className="mr-8 h-[75px] rounded-full lg:w-[75px]"
              src="images/logo.png"
              alt="logo"
            />
          </Link>
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
              className="mr-4 mt-[5px] h-12 w-8 cursor-pointer hover:!text-orange-500"
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
            className={`${menu} flex-col bgcall  w-[290px] min-h-screen fixed top-0 right-0 z-10 border-2 border-orange-500  `}
          >
            <div className="flex-col-center relative pt-3">
              <img
                className="h-[60px] w-[60px] rounded-full"
                src="images/logo.png"
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
                  className="h-16 w-9 cursor-pointer text-white hover:!text-orange-400"
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
            <div className="mx-auto mt-7 flex w-full flex-col items-end px-3">
              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-1 mr-3 font-vazir text-[20px]">خانه</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative bottom-1 h-14 w-7"
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
                    className="h-12 w-full fill-orange-400"
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

              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/pish"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-2 mr-3 font-vazir text-[20px]">منو</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative bottom-1 h-14 w-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.625 6.75a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0A.75.75 0 018.25 6h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75zM2.625 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zM7.5 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12A.75.75 0 017.5 12zm-4.875 5.25a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875 0a.75.75 0 01.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="h-12 w-full fill-orange-400"
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

              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/Gallery"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-2 mr-3 font-vazir text-[20px]">گالری</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative bottom-1 h-14 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="h-12 w-full fill-orange-400"
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

              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/Branches"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-1 mr-3 font-vazir text-[20px]">
                    شعبه ها
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative bottom-1 h-14 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="h-12 w-full fill-orange-400"
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

              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/Call"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-2 mr-3 font-vazir text-[20px]">
                    تماس باما
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative bottom-1 h-14 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                    693
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="h-12 w-full fill-orange-400"
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

              <div className="relative h-20">
                <Link
                  onClick={menuHandler}
                  to={"/About"}
                  className="absolute flex w-full flex-row items-center justify-end pr-9 text-black hover:text-white"
                >
                  <div className="mb-2 mr-3 font-vazir text-[20px]">
                    درباره ما
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="relative bottom-1 h-14 w-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </Link>
                <div className="z-[-2]">
                  <svg
                    className="h-12 w-full fill-orange-400"
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
