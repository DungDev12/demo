import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
 const AppCo = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
const  = () => {
    return (  );
}
 
export default ;