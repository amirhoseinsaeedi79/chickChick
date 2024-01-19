import { useState } from "react";

export default function GotoUp() {
  const [button, setButton] = useState("bottom-[1750px] right-8");
  const [status, setStatus] = useState(false);
  window.addEventListener("scroll", checkScrollTop);
  function checkScrollTop() {
    if (!status && window.pageYOffset > 600) {
      setButton("bottom-9 right-5");
      setStatus(true);
    } else if (status && window.pageYOffset <= 600) {
      setButton("bottom-[1750px] right-1");
      setStatus(false);
    }
  }
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      onClick={scrollTop}
      className={`bg-orange-500 w-[50px] h-[50px] flex-col-center transition-all duration-[1200ms] ease-in-out  rounded-full cursor-pointer fixed ${button} z-10`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-14 h-14"
      >
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}
