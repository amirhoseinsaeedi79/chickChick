import { createContext } from "react";

const RegisterContext = createContext({
    isLoggin : false,
    token : null ,
    login: () => {},
    logout: () => {},
    statusLogin:() => {},
    pishmenu:[],
    noshhmenu:[],
    galery:[],
    allcart:[],
    cartHandler : ()=>{},
    username:()=>{},
    itemCart:0,
    statuditemCart:()=>{},
})

export default RegisterContext ;






