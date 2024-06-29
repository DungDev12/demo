import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
 = ({ children }) => {
};
const  AppContext= () => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
 
export default AppContext;