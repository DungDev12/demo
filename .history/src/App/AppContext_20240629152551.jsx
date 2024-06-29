import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
export const AuthProvider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
};
