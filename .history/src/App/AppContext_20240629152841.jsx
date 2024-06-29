import { createContext, useContext } from "react";
import PropTypes from "prop-types";
const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
 

const AppContext = ({ children }) => {
    const []
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: PropTypes.object,
};
export default AppContext;
