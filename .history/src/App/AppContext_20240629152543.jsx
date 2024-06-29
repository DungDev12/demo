import { createContext, useContext } from "react";

const Context = createContext();

export const useAuth = () => {
  return useContext(Context);
};
export const AuthProvider = ({ children }) => {
return (
  <AuthContext.Provider
    value={{ }}
  >
    {children}
  </AuthContext.Provider>
);
}