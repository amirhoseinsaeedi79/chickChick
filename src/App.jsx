import Footer from "./components/Footer.jsx";
import GotoUp from "./components/GotoUp.jsx";
import Navbar from "./components/Navbar.jsx";
import routes from "./routes.jsx";
import { useRoutes,useLocation } from "react-router";
import RegisterContext from "./context/register.jsx";
import { useState, useEffect } from "react";

export default function App() {

  const [pishmenu, setPishmenu] = useState([]);
  const [galery, setGalery] = useState([]);
  const [isLoggin, setIsLoggin] = useState(false);
  const  {pathname :location}=useLocation()

useEffect(() =>{
  window.scrollTo(0,0)
},[location])

 function username(){
  const username = JSON.parse(localStorage.getItem("user"))
  return (username.name)
 }

  useEffect(() => {
    
    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((data) => {
        let isname = data.filter((item) => {
          return item.name != null;
        });
        setPishmenu(isname);
      });

    fetch("http://localhost:3000/images")
      .then((res) => res.json())
      .then((data) => {
        let isitem = data.filter((item) => {
          return item.ctg === "galery";
        });
        setGalery(isitem);
      });

  },[]);

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
    console.log("isloggin:", isLoggin);
  }
  let router = useRoutes(routes);

  console.log('isLoggin :' , isLoggin);

  return (
    <RegisterContext.Provider
      value={{
        isLoggin,
        login,
        logout,
        pishmenu,
        galery,
        username,
      }}
    >
      <Navbar />
      <GotoUp />
      {router}
      <Footer />
    </RegisterContext.Provider>
  );
}
