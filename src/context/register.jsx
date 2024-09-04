import { createContext } from 'react';

const RegisterContext = createContext({
  isLoggin: false,
  price: 0,
  number: 0,
  token: null,
  setNewNumber: () => {},
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
  setAllCarts: () => {},
  statuditemCart: () => {},
  getAllCart: () => {},
});

export default RegisterContext;
