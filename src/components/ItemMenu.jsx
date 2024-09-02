import { useContext } from 'react';

import { toast } from 'react-toastify';

import RegisterContext from '../context/register';

export default function ItemMenu(item) {
  const contextitem = useContext(RegisterContext);
  const allmenu = contextitem.pishmenu;
  const login = contextitem.isLoggin;

  async function cartHandler(item) {
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    const isin = cartItem?.some((allitem) => {
      return allitem.name == item.name;
    });

    if (!isin && login) {
      const findMenu = allmenu.find((menu) => {
        return menu.id == item.id;
      });

      const infoItem = {
        src: findMenu.src,
        title: findMenu.title,
        ctg: findMenu.ctg,
        name: findMenu.name,
        price: findMenu.price,
        q: 1,
      };

      if (!cartItem?.length) {
        localStorage.setItem("cart", JSON.stringify([infoItem]));
      } else if (cartItem?.length > 0) {
        const cartItem = JSON.parse(localStorage.getItem("cart"));
        cartItem.push(infoItem);
        localStorage.setItem("cart", JSON.stringify(cartItem));
      }

      contextitem.getAllCart();
      toast.success("به سبد خرید اضافه شد", {
        position: "top-center",
        autoClose: 700,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (!login) {
      toast.error("لطفا ابتدا وارد حساب خود شوید", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(
        "محصول در سبد خرید وجود دارد لطفا تعداد را در سبد خرید مشخص کنید",
        {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        }
      );
    }
  }

  return (
    <div
      data-aos="zoom-in"
      className="mx-2 mb-5 flex max-h-[240px] rounded-2xl border-4 border-orange-500 md:mx-5 md:w-[320px] lg:mx-7 lg:w-[400px] xl:h-[270px] xl:w-[500px]"
    >
      <div className="items- flex w-6/12 lg:w-6/12 xl:min-w-[255px]">
        <img
          className="h-full w-full rounded-l-xl border-r-4 border-orange-500"
          src={item.src}
          alt=""
        />
      </div>
      <div className="flex-col-center w-6/12">
        <div className="vazir-bold mb-4 max-h-[45px] overflow-hidden py-4 text-[21px] text-orange-500 md:text-[20px] lg:max-h-[100%] lg:text-[24px] xl:pt-0">
          <span>{item.name}</span>
        </div>
        <div className="lg:text-md vazir-bold px-2 pb-5 text-center text-[12px] md:text-[15px]">
          <span>توضیحات هر محصول</span>
        </div>
        <div className="flex-col-center pb-2">
          <div className="flex-row-center vazir mb-5 md:text-[15px] lg:text-xl">
            <span>تومان</span>
            <span className="ml-1">{item.price}</span>
          </div>
          <button
            onClick={() => cartHandler(item)}
            className="text-md vazir-bold rounded-xl border-2 border-orange-500 px-3 py-1 hover:bg-orange-500 hover:text-black md:text-[18px]"
          >
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
