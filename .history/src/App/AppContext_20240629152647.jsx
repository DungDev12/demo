import { createContext, useContext } from "react";
import PropTypes from 'prop-types';
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};

const AppContext = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

export default AppContext;
