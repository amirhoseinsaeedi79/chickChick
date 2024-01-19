import ItemCart from "./ItemCart";
import { useEffect, useState } from "react";
import RegisterContext from "../context/register";
import { useContext } from "react";
export default function Cart() {
  const [allcart, setAllcard] = useState([]);
  const [allprice, setAllprice] = useState(0);

  const context = useContext(RegisterContext);
  function getData() {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setAllcard(data.reverse()));
  }

  useEffect(() => {
    getData();
  }, [setAllcard]);

  useEffect(() => {
    const alldata = allcart.map((item) => {
      return item.price * item.q;
    });
    const result = alldata.reduce((a, b) => {
      return a + b;
    }, 0);

    setAllprice(result);
  }, [getData]);

  console.log("yes");

  return (
    <>
      {context.isLoggin ? (
        <>
        {allcart.length == 0 ? (
          <div className="bgcall w-full   z-10 border-2  border-orange-500 pt-20 lg:pt-24">
            <div className=" flex-col-center relative pb-[200px]  pt-20">
              <h3 className="drop-shadow-xl text-black absolute text-xl md:text-[24px] vazir-bold">
                سبد خرید شما خالی است 
              </h3>
              <div>
                <svg
                  className="w-[310px] h-[60px] fill-orange-500"
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
        ) : (
          <div className="bgcall w-full  z-10 border-2  border-orange-500 pt-20 lg:pt-24">
            <div className="w-full flex-col-center mb-8">
              <div className="flex-col-center relative">
                <h3 className="drop-shadow-xl text-black absolute text-[20px] vazir-bold">
                  سبدخرید شما
                </h3>
                <div>
                  <svg
                    className="w-[180px]  h-[60px] fill-orange-500"
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
            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:ml-5 ">
              {allcart.map((items)=>{
                 return  <ItemCart key={items.id} {...items} func={getData} />
                })}
            </div>
            <div className="w-full bg-orange-500 h-auto flex-col-center border-t-4 border-black pr-2 pt-5 pb-3">
              <div className="flex flex-row-reverse vazir-bold text-[18px] md:text-[22px]  pt-2">
                <span className="ml-2">: جمع کل فاکتور</span>
                <span className="ml-2">{allprice}</span>
                <span>تومان</span>
              </div>
              <div className="w-full flex-row-center mt-5">
                <button className="vazir-bold text-lg px-3 py-1  md:px-4 md:pu-2 md:text-xl text-center border-2 border-black hover:border-white hover:text- rounded-[25px]">
                  پرداخت
                </button>
              </div>
            </div>
          </div>
        )}
        </>
      ) : (
        <>
        {history.back()}
        </>
      )}
    </>
  );
}
