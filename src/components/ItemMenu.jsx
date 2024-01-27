import RegisterContext from "../context/register";
import { useContext } from "react";
import { toast } from "react-toastify";

export default function ItemMenu(item) {
  const contextitem = useContext(RegisterContext);
  const allmenu = contextitem.pishmenu;
  const login = contextitem.isLoggin;

  async function cartHandler(item){
    fetch("https://chickchick-server.liara.run/cart")
      .then((res) => res.json())
      .then((data) => {
        const isin = data.some((allitem) => {
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
          fetch("https://chickchick-server.liara.run/cart", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(infoItem),
          });
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
          toast.error("لطفا ابتدا وارد حساب خود شوید",{
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
      });
  }
  return (
    <div
      data-aos="zoom-in"
      className="xl:h-[270px] max-h-[240px] md:w-[320px] lg:w-[400px] xl:w-[500px] flex border-4 border-orange-500 rounded-2xl mb-5 mx-2 md:mx-5 lg:mx-7 "
    >
      <div className="lg:w-6/12 w-6/12 xl:min-w-[255px]  flex items-">
        <img
          className="w-full h-full  rounded-l-xl border-r-4 border-orange-500 "
          src={item.src}
          alt=""
        />
      </div>
      <div className="flex-col-center w-6/12 ">
        <div className="text-[21px] md:text-[20px] lg:text-[24px] max-h-[45px] lg:max-h-[100%] overflow-hidden vazir-bold py-4 xl:pt-0 mb-4 text-orange-500">
          <span>{item.name}</span>
        </div>
        <div className="text-[12px] md:text-[15px] lg:text-md px-2 pb-5 vazir-bold text-center">
          <span>توضیحات هر محصول</span>
        </div>
        <div className="flex-col-center pb-2">
          <div className="flex-row-center md:text-[15px] lg:text-xl vazir mb-5 ">
            <span>تومان</span>
            <span className="ml-1">{item.price}</span>
          </div>
          <button
            onClick={() => cartHandler(item)}
            className="text-md md:text-[18px] px-3 py-1 vazir-bold rounded-xl border-2 border-orange-500 hover:text-black hover:bg-orange-500 "
          >
            سفارش
          </button>
        </div>
      </div>
    </div>
  );
}
