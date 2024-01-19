import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Call from "./pages/Call.jsx"
import Branches from "./pages/Branches.jsx"
import Gallery from "./pages/Gallery.jsx"
import Arsh from "./components/Arsh.jsx"
import Galeria from "./components/Galeria.jsx"
import Password from "./pages/Password.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Pish from "./subroutes/Pish.jsx"
import Sandwich from "./subroutes/Sandwich.jsx"
import Sokhari from "./subroutes/Sokhari.jsx"
import Mixbox from "./subroutes/Mixbox.jsx"
import Sib from "./subroutes/Sib.jsx"
import Nosh from "./subroutes/Nosh.jsx"
import Cart from "./components/Cart.jsx"

let routes =[
    { path:'/' , element:<Home/>},
    { path:'/About' , element:<About/>},
    { path:'/Call' , element:<Call/>},
    { path:'/Branches' , element:<Branches/>},
    { path:'/gallery' , element:<Gallery/>},
    { path:'/Arsh' , element:<Arsh/>},
    { path:'/Galeria' , element:<Galeria/>},
    { path:'/Forgoat' , element:<Password/>},
    { path:'/Login' , element:<Login/>},
    { path:'/Signup' , element:<Signup/>},
    { path:'/pish' , element:<Pish/>},
    { path:'/sandwich' , element:<Sandwich/>},
    { path:'/sokhari' , element:<Sokhari/>},
    { path:'/mixbox' , element:<Mixbox/>},
    { path:'/sib' , element:<Sib/>},
    { path:'/nosh' , element:<Nosh/>},
    { path:'/cart' , element:<Cart/>},
]


export default routes 







