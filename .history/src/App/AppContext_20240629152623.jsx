import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
 = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
const  AppContext= () => {
    return (  );
}
 
export default AppContext;