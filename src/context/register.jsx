import { createContext } from 'react';

const RegisterContext = createContext({
  isLoggin: false,
  price: 0,
  token: null,
  login: () => {},
  getAllPrice: () => {},
  logout: () => {},
  statusLogin: () => {},
  pishmenu: [],
  noshhmenu: [],
  galery: [],
  allcart: [],
  cartHandler: () => {},
  username: () => {},
  itemCart: 0,
  statuditemCart: () => {},
  getAllCart: () => {},
});

export default RegisterContext;
