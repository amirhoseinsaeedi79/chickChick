import {
  useEffect,
  useState,
} from 'react';

import {
  useLocation,
  useRoutes,
} from 'react-router';

import Footer from './components/Footer.jsx';
import GotoUp from './components/GotoUp.jsx';
import Navbar from './components/Navbar.jsx';
import RegisterContext from './context/register.jsx';
import routes from './routes.jsx';

export default function App() {
  const [pishmenu, setPishmenu] = useState([]);
  const [galery, setGalery] = useState([]);
  const [isLoggin, setIsLoggin] = useState(false);
  const [allcart, setAllcart] = useState([]);
  const [price, setAllprice] = useState(0);
  const { pathname: location } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function username() {
    const username = JSON.parse(localStorage.getItem("user"));
    return username.name;
  }

  const getAllPrice = (a) => {
    setAllprice(a);
  };

  useEffect(() => {
    fetch("https://chickchick-server.liara.run/images")
      .then((res) => res.json())
      .then((data) => {
        let isname = data.filter((item) => {
          return item.name != null;
        });
        setPishmenu(isname);
      });

    fetch("https://chickchick-server.liara.run/images")
      .then((res) => res.json())
      .then((data) => {
        let isitem = data.filter((item) => {
          return item.ctg === "galery";
        });
        setGalery(isitem);
      });
  }, []);

  const getAllCart = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    setAllcart(cartItem);
  };

  useEffect(() => {
    getAllCart();
  }, []);

  useEffect(() => {
    if (window.location.pathname === "/") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/Call") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/About") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/Gallery") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/Branches") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/pish") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/Arsh") {
      window.scrollTo(0, 0);
    } else if (window.location.pathname === "/Galeria") {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    let test = localStorage.getItem("user");
    if (test != null) {
      setIsLoggin(true);
    } else {
      setIsLoggin(false);
    }
  });

  async function login(newtoken) {
    localStorage.setItem("user", JSON.stringify(newtoken));
    setIsLoggin(true);
  }
  function logout() {
    localStorage.removeItem("user");
    setIsLoggin(false);
  }
  let router = useRoutes(routes);

  return (
    <RegisterContext.Provider
      value={{
        isLoggin,
        allcart,
        login,
        logout,
        price,
        pishmenu,
        getAllPrice,
        galery,
        username,
        getAllCart,
      }}
    >
      <Navbar />
      <GotoUp />
      {router}
      <Footer />
    </RegisterContext.Provider>
  );
}
