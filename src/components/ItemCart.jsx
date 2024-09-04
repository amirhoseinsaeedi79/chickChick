import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import RegisterContext from '../context/register';

export default function ItemCart(items) {
  const context = useContext(RegisterContext);
  const [number, setNumber] = useState(items.q);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    if (cartItem && cartItem.length > 0) {
      const infoItem = cartItem.find((item) => item.name === items.name);
      if (infoItem) {
        setNumber(infoItem.q);
        resultNumber();
      }
    }
  }, [items.name]);

  // useEffect(() => {
  //   const cartItem = JSON.parse(localStorage.getItem("cart"));
  //   const alldata = cartItem?.map((item) => {
  //     return item.price * item.q;
  //   });
  //   const result = alldata?.reduce((a, b) => {
  //     return a + b;
  //   }, 0);

  //   items.setAllPrice(result);
  // });

  const resultNumber = useCallback(() => {
    const newItem = {
      src: items.src,
      title: items.title,
      ctg: items.ctg,
      name: items.name,
      price: items.price,
      q: number,
    };

    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const indexNumber = cartItem.findIndex((item) => item.name === items.name);
    cartItem[indexNumber] = newItem;
    localStorage.setItem("cart", JSON.stringify(cartItem));

    const alldata = cartItem?.map((item) => {
      return item.price * item.q;
    });

    const result = alldata?.reduce((a, b) => {
      return a + b;
    }, 0);

    context.getAllPrice(result);

  }, [items, number]);

  const increaseNumber = useCallback(() => {
    setNumber((prevNumber) => prevNumber + 1);
    resultNumber();
  }, [resultNumber]);

  const decreaseNumber = useCallback(async () => {
    setNumber((prevNumber) => prevNumber - 1);
    resultNumber();
  }, [resultNumber]);

  const removeItem = useCallback(
    async (id) => {
      const cartItem = JSON.parse(localStorage.getItem("cart"));
      const result = cartItem.filter((item) => item.name !== id);
      localStorage.setItem("cart", JSON.stringify(result));
      context.getAllCart();
    },
    [context.getAllCart]
  );

  useEffect(() => {
    resultNumber();
  }, [resultNumber]);

  return (
    <div className="mx-2 mb-5 flex h-[160px] flex-row justify-between rounded-2xl border-4 border-orange-500 md:mx-5 md:h-[190px] lg:mx-7 xl:mx-4 xl:h-[220px] xl:w-[420px]">
      <div className="xl:w- w-6/12">
        <img
          className="h-full w-full rounded-l-xl border-r-4 border-orange-500"
          src={items.src}
          alt=""
        />
      </div>
      <div className="flex-col-center w-6/12 text-white">
        <div className="vazir-bold my-2 text-[19px] text-orange-500 md:text-[26px]">
          <span>{items.name}</span>
        </div>
        <div className="vazir text-[15px] md:text-[18px]">
          <span>تعداد :</span>
          <span className="vazir-bold mr-2">{number}</span>
        </div>
        <div className="flex-row-center vazir">
          <button
            onClick={() => increaseNumber()}
            className="mx-2 text-[23px] xl:text-[28px]"
          >
            +
          </button>
          <button
            onClick={() => decreaseNumber()}
            className="mx-2 text-[25px] xl:text-[28px]"
            disabled={number == 1}
          >
            -
          </button>
          <button>
            <svg
              onClick={() => removeItem(items.name)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mx-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
        <div className="flex-row-center vazir mb-1 text-[13px] md:text-[17px] xl:text-[20px]">
          <span>تومان</span>
          <span className="ml-1">{items.price * number}</span>
        </div>
      </div>
    </div>
  );
}
