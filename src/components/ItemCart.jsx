import { useEffect, useState } from "react";
import RegisterContext from "../context/register";
import { useContext } from "react";
export default function ItemCart(items) {
  const contextitem = useContext(RegisterContext);


  const [number, setNumber] = useState(1);

  useEffect(()=>{
  items.func()
  },[number])

  function resultNumber(id, status) {

    const newItem = {
      id,
      src: items.src,
      title: items.title,
      ctg: items.ctg,
      name: items.name,
      price: items.price,
      q: status,
    };

    fetch(`http://localhost:3000/cart/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => setNumber(data.q));

  }


   function numberadd(id) {
    resultNumber(id, number + 1)
  }

  async function numbermines(id) {
    resultNumber(id, number - 1);
    if (number == 1) {
      contextitem.statuditemCart(prev=>prev-1)
    }
  }

 async function numberremove(id) {
  await fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data)); 
      items.func()

  }

  return (
    <div className="xl:w-[420px] h-[160px] md:h-[190px] xl:h-[220px] flex flex-row  justify-between border-4 border-orange-500 rounded-2xl mx-2 md:mx-5  lg:mx-7 xl:mx-4 mb-5">
      <div className="w-6/12 xl:w- ">
        <img
          className="w-full h-full  rounded-l-xl border-r-4 border-orange-500 "
          src={items.src}
          alt=""
        />
      </div>
      <div className="w-6/12  flex-col-center  text-white">
        <div className="text-[19px] md:text-[26px]  vazir-bold  my-2 text-orange-500">
          <span>{items.name}</span>
        </div>
        <div className="vazir text-[15px] md:text-[18px] ">
          <span>تعداد :</span>
          <span className="vazir-bold mr-2">{number}</span>
        </div>
        <div className="flex-row-center vazir ">
          <button
            onClick={() => numberadd(items.id)}
            className="text-[23px] xl:text-[28px] mx-2"
          >
            +
          </button>
          <button
            onClick={() => numbermines(items.id)}
            className="text-[25px] xl:text-[28px] mx-2"
          >
            -
          </button>
          <button>
            <svg
              onClick={() => numberremove(items.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
        <div className="flex-row-center text-[13px] md:text-[17px] xl:text-[20px]  vazir mb-1">
          <span>تومان</span>
          <span className="ml-1">{items.price * number}</span>
        </div>
      </div>
    </div>
  );
}
