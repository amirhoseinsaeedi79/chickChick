import ItemMenu from "../components/ItemMenu.jsx";
import TopbarMenu from "../components/TopbarMenu.jsx";
import RegisterContext from "../context/register.jsx";
import { useContext } from "react";
import Loader from '../components/Loader.jsx'

export default function Mixbox() {
  const contextMenu = useContext(RegisterContext);
  const allmenu = contextMenu.pishmenu;

  const menu = allmenu.filter((item) => {
    return item.ctg == "sandwich";
  });

  return (
    <>
    {allmenu.length !==0 ? (

<div className="bgCompany w-full ">
<div className="fixed top-0 w-full z-20">
  <TopbarMenu />
</div>
<div className=" container flex-row-center  flex-wrap pt-[170px] text-white">
  
  {menu.map((item) => (
    <ItemMenu key={item.id} {...item} />
  ))}

</div>
</div>

    ) : (
      <div className="bgCompany w-full pb-20 md:pt-32">
        <Loader/>
      </div>
    )}
    </>
  );
}
